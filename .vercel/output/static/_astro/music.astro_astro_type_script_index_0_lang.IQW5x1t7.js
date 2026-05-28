import{e as l,u as y,b as v}from"./admin-ui.bfuTU8h8.js";let s,p=!1;const d=document.getElementById("tracks-list"),f=document.getElementById("playlist-enabled"),m=document.getElementById("music-status");function c(e,t=""){m.classList.remove("hidden","is-success","is-error"),m.textContent=e,t&&m.classList.add(t==="success"?"is-success":"is-error")}function b(){d.querySelectorAll("[data-sortable-item]").forEach((e,t)=>{const a=e.getAttribute("data-id"),i=s.tracks.find(n=>n.id===a);i&&(i.title=e.querySelector('[data-field="title"]').value,i.src=e.querySelector('[data-field="src"]').value,i.order=t+1)})}function k(e){b();const t=new Map(s.tracks.map(a=>[a.id,a]));s.tracks.splice(0,s.tracks.length,...e.map((a,i)=>{const n=t.get(a);if(!n)throw new Error("Track missing");return n.order=i+1,n})),u()}function h(){p||(v(d,k),p=!0)}function u(){f.checked=s.playlistEnabled;const e=[...s.tracks].sort((t,a)=>t.order-a.order);if(!e.length){d.innerHTML='<p class="admin-empty">No hay pistas. Sube el primer audio abajo.</p>';return}d.innerHTML=e.map((t,a)=>`
					<article class="admin-item" data-sortable-item data-id="${t.id}" draggable="true">
						<div class="admin-item__head">
							<span class="admin-item__handle" title="Arrastrar para reordenar">⋮⋮</span>
							<span class="admin-item__position">${a+1}</span>
							<span class="admin-item__title">${l(t.title||"Sin título")}</span>
							<button class="admin-btn admin-btn--danger admin-btn--sm" type="button" data-action="delete">Eliminar</button>
						</div>
						<div class="admin-item__body">
							<audio class="admin-item__audio" controls src="${l(t.src)}" preload="metadata"></audio>
							<div class="admin-item__fields">
								<div class="admin-field">
									<label>Título</label>
									<input data-field="title" value="${l(t.title)}" />
								</div>
								<div class="admin-field">
									<label>Archivo</label>
									<input data-field="src" value="${l(t.src)}" readonly />
								</div>
							</div>
						</div>
					</article>
				`).join(""),h(),y(d)}async function g(){s=await(await fetch("/api/admin/music")).json(),u()}d.addEventListener("click",e=>{const t=e.target;if(t.getAttribute("data-action")!=="delete")return;const i=t.closest("[data-sortable-item]")?.getAttribute("data-id"),n=s.tracks.findIndex(r=>r.id===i);n<0||(s.tracks.splice(n,1),s.tracks.forEach((r,o)=>{r.order=o+1}),u())});document.getElementById("music-form")?.addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("track-file"),a=document.getElementById("track-title"),i=t.files?.[0];if(!i)return;c("Subiendo audio...");const n=new FormData;n.append("file",i),n.append("folder","music");const r=await fetch("/api/admin/upload",{method:"POST",body:n}),o=await r.json();if(!r.ok){c(o.error??"Error al subir","error");return}s.tracks.push({id:`track-${Date.now().toString(36)}`,title:a.value||i.name,src:o.src,order:s.tracks.length+1}),t.value="",a.value="",u(),c("Pista agregada. Recuerda guardar cambios.","success")});document.getElementById("save-music-btn")?.addEventListener("click",async()=>{if(b(),s.playlistEnabled=f.checked,!(await fetch("/api/admin/music",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok){c("No se pudo guardar","error");return}c("Playlist guardada correctamente","success"),await g()});g();
