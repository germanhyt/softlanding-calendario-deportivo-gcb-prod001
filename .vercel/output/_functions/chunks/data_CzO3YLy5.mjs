import { readFile, mkdir, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';

const dataDir = nodePath.join(process.cwd(), "data");
function dataPath(filename) {
  return nodePath.join(dataDir, filename);
}
async function readJsonFile(filename) {
  const content = await readFile(dataPath(filename), "utf-8");
  return JSON.parse(content);
}
async function writeJsonFile(filename, data) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(dataPath(filename), `${JSON.stringify(data, null, "	")}
`, "utf-8");
}
function sortSlides(slides) {
  return [...slides].sort((a, b) => a.order - b.order);
}
function todayIso() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
async function getSchedule() {
  return readJsonFile("schedule.json");
}
async function saveSchedule(data) {
  await writeJsonFile("schedule.json", data);
}
async function getActiveSlides() {
  const schedule = await getSchedule();
  if (schedule.viewMode === "day") {
    const date = schedule.activeDate || todayIso();
    const day = schedule.days.find((item) => item.date === date) ?? schedule.days.find((item) => item.date === todayIso());
    return sortSlides(day?.slides ?? []);
  }
  const week = schedule.weeks.find((item) => item.id === schedule.activeWeekId) ?? schedule.weeks.find((item) => item.startDate <= todayIso() && item.endDate >= todayIso()) ?? schedule.weeks[0];
  return sortSlides(week?.slides ?? []);
}
async function getMusic() {
  return readJsonFile("music.json");
}
async function saveMusic(data) {
  await writeJsonFile("music.json", data);
}

export { getMusic as a, getSchedule as b, saveSchedule as c, getActiveSlides as g, readJsonFile as r, saveMusic as s, writeJsonFile as w };
