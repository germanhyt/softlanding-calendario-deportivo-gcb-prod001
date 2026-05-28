import { randomBytes, timingSafeEqual, scryptSync, createHmac } from 'node:crypto';
import { r as readJsonFile, w as writeJsonFile } from './data_CzO3YLy5.mjs';

const SESSION_COOKIE = "catelera_session";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1e3;
function getSecret() {
  return "dev-secret-change-me";
}
function hashPassword(password, salt) {
  return scryptSync(password, salt, 64).toString("hex");
}
async function verifyCredentials(username, password) {
  const user = await readJsonFile("users.json");
  if (username !== user.username) return false;
  const hash = hashPassword(password, user.salt);
  const hashBuffer = Buffer.from(hash, "hex");
  const storedBuffer = Buffer.from(user.passwordHash, "hex");
  if (hashBuffer.length !== storedBuffer.length) return false;
  return timingSafeEqual(hashBuffer, storedBuffer);
}
function signPayload(payload) {
  return createHmac("sha256", getSecret()).update(payload).digest("base64url");
}
function createSessionToken(username) {
  const payload = {
    u: username,
    exp: Date.now() + SESSION_TTL_MS
  };
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${encoded}.${signPayload(encoded)}`;
}
function verifySessionToken(token) {
  if (!token) return null;
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return null;
  if (signPayload(encoded) !== signature) return null;
  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString());
    if (!payload.u || payload.exp < Date.now()) return null;
    return payload.u;
  } catch {
    return null;
  }
}
function setSessionCookie(cookies, username) {
  cookies.set(SESSION_COOKIE, createSessionToken(username), {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    path: "/",
    maxAge: SESSION_TTL_MS / 1e3
  });
}
function clearSessionCookie(cookies) {
  cookies.delete(SESSION_COOKIE, { path: "/" });
}
function getSessionUser(cookies) {
  return verifySessionToken(cookies.get(SESSION_COOKIE)?.value);
}
async function getUser() {
  return readJsonFile("users.json");
}
async function updateCredentials(input) {
  const user = await getUser();
  const currentPassword = input.currentPassword.trim();
  const newUsername = input.newUsername?.trim();
  const newPassword = input.newPassword?.trim();
  if (!currentPassword) {
    throw new Error("La contraseña actual es requerida");
  }
  const valid = await verifyCredentials(user.username, currentPassword);
  if (!valid) {
    throw new Error("La contraseña actual es incorrecta");
  }
  if (!newUsername && !newPassword) {
    throw new Error("Indica un nuevo usuario o una nueva contraseña");
  }
  if (newUsername && newUsername.length < 3) {
    throw new Error("El usuario debe tener al menos 3 caracteres");
  }
  if (newPassword && newPassword.length < 6) {
    throw new Error("La nueva contraseña debe tener al menos 6 caracteres");
  }
  const updated = {
    username: newUsername || user.username,
    salt: user.salt,
    passwordHash: user.passwordHash
  };
  if (newPassword) {
    updated.salt = randomBytes(16).toString("hex");
    updated.passwordHash = hashPassword(newPassword, updated.salt);
  }
  await writeJsonFile("users.json", updated);
  return updated;
}

export { getUser as a, clearSessionCookie as c, getSessionUser as g, setSessionCookie as s, updateCredentials as u, verifyCredentials as v };
