/* MUSY · Tienda: catálogo, colores, tallas, carrito y pedido por WhatsApp
   Cambia WA (número con 57, solo dígitos) y WA_SHOW (como se ve) en la primera línea. */
const PRICE=35000, CUARTETO=100000, SHIP=0, FREE_SHIP=150000, WA="573137073453", WA_SHOW="+57 313 707 3453";
const SIZES=["S","M","L","XL"];
/* FOTOS: carpeta donde subes las fotos y su extensión.
   Nombre de cada foto: id-del-producto + "-" + color, en minúsculas y sin tildes.
   Ejemplo: esencial-negro.jpg, segunda-piel-marron.jpg. Portada: portada.jpg
   Si una foto no existe, la página muestra el dibujo del body en ese color. */
const IMG_BASE="assets/img/productos/", IMG_EXT="webp";
/* Varias fotos por color: esencial-negro.jpg (principal), esencial-negro-2.jpg,
   esencial-negro-3.jpg ... hasta MAX_FOTOS. Con 8 o más fotos alrededor de la
   prenda, arrastrar en la ficha la hace girar como una vista 360°. */
const MAX_FOTOS=12;
const COLORS={Negro:"#1f1a1c",Blanco:"#f8f5f1",Marrón:"#6b4430",Beige:"#d9c0a4",Mantequilla:"#f1e2a6",Rosa:"#e9a9b6",Celeste:"#a9c9e4",Rojo:"#b3202c",Vino:"#620029",Marfil:"#FFFFF0",Crema:"#FDFBD4",Vainilla:"#F3E5AB",VerdeOscuro:"#006A4E",AzulNavy:"#000080",Beige:"#D9C7A8",AzulCielo:"#87CEFA",PaloRosa:"#FBD9E5",Lila:"#D1C4E9"};
const ALL=Object.keys(COLORS);
const PRODUCTS=[
 //{id:"esencial",ref:"MSY-B01",name:"Esencial",coll:"basic",cut:"a",colors:ALL.slice(0,8),desc:"Tirantes delgados y escote recto. El body que combina con todo, de jean a falda."},
 {id:"more-self-love",ref:"MSY-MS05",name:"Self Love",coll:"Basico",cut:"d",colors:["Marfil"],desc:"Halter suave con espalda baja. Fresco para el calor del Caribe."},
 {id:"more-love",ref:"MSY-ML05",name:"More Love",coll:"Basico",cut:"d",colors:["Marfil"],desc:"Halter suave con espalda baja. Fresco para el calor del Caribe."},
 {id:"camiseta-unisex",ref:"MSY-NG01",name:"Negroni",coll:"Basico",cut:"a",colors:["Negro","Marrón","Marfil"],desc:"Camiseta ligera, suave y fresca, ideal para el uso diario. Confeccionada en algodón, ofrece comodidad, resistencia y un estilo versátil."},
 {id:"blueberries",ref:"MSY-BL02",name:"Blueberries",coll:"Basico",cut:"c",colors:["Crema"],desc:"Camiseta ligera, suave y fresca, ideal para el uso diario. Confeccionada en algodón, ofrece comodidad, resistencia y un estilo versátil."},
 {id:"floral",ref:"MSY-FL03",name:"Floral",coll:"Basico",cut:"b",colors:["Marrón","Marfil"],desc:"Escote cuadrado y tiras anchas que estilizan los hombros."},
 {id:"radiate",ref:"MSY-RD04",name:"Radiate",coll:"Basico",cut:"a",colors:["Vainilla","Marrón"],desc:"Corte clásico con pierna media para quienes prefieren más cobertura."},
 {id:"nuevayork",ref:"MSY-NY05",name:"Nueva York",coll:"Basico",cut:"b",colors:["AzulNavy","Rojo","Marrón","Negro","VerdeOscuro"],desc:"Espalda en U y frente liso. Marca la silueta sin incomodar."},
 {id:"rosa",ref:"MSY-RS01",name:"White Fox",coll:"Basico",cut:"d",colors:["AzulCielo","Marfil","Beige","PaloRosa"],desc:"Cuello halter y espalda descubierta para salir de noche."},
 {id:"bay",ref:"MSY-BY02",name:"Bay Cartagena",coll:"Basico",cut:"c",colors:["Vainilla"],desc:"Manga larga con acabado aterciopelado al tacto. Abriga sin perder forma."},
 {id:"sundream",ref:"MSY-SD03",name:"Sun Dream",coll:"Basico",cut:"a",colors:["Marfil"],desc:"Tirantes cruzados en la espalda y tonos pastel para el día."},
 {id:"bloom",ref:"MSY-BL04",name:"Bloom",coll:"Basico",cut:"b",colors:["AzulCielo","Lila"],desc:"Escote cuadrado y pierna alta. Pensado para faldas largas y shorts."},
 {id:"flowers-bloom",ref:"MSY-FB05",name:"Flowers Bloom",coll:"Basico",cut:"d",colors:["Mantequilla"],desc:"Halter suave con espalda baja. Fresco para el calor del Caribe."},
 {id:"beach-party",ref:"MSY-BP05",name:"Beach Party",coll:"Basico",cut:"d",colors:["Marfil","Vainilla"],desc:"Halter suave con espalda baja. Fresco para el calor del Caribe."},
 {id:"sweet-girl",ref:"MSY-SG05",name:"Sweet Girl",coll:"Basico",cut:"d",colors:["Marfil","AzulCielo"],desc:"Halter suave con espalda baja. Fresco para el calor del Caribe."},
 {id:"sardines",ref:"MSY-SR05",name:"Sardines",coll:"Basico",cut:"d",colors:["Marfil"],desc:"Halter suave con espalda baja. Fresco para el calor del Caribe."},
 {id:"summer-waves",ref:"MSY-SW05",name:"Summer Waves",coll:"Basico",cut:"d",colors:["PaloRosa"],desc:"Halter suave con espalda baja. Fresco para el calor del Caribe."},
 {id:"green-girl",ref:"MSY-GG05",name:"Green Girl",coll:"Basico",cut:"d",colors:["Marfil"],desc:"Halter suave con espalda baja. Fresco para el calor del Caribe."},
 {id:"papaya",ref:"MSY-PP05",name:"Papaya",coll:"Basico",cut:"d",colors:["Crema","Marfil"],desc:"Halter suave con espalda baja. Fresco para el calor del Caribe."},
 {id:"mojito",ref:"MSY-MJ05",name:"Mojito",coll:"Basico",cut:"d",colors:["Marfil"],desc:"Halter suave con espalda baja. Fresco para el calor del Caribe."}
];
const NOTES={all:"Diez modelos, varios colores y un solo precio: $35.000 cada uno.",basic:"Basic: cortes esenciales para el día a día, con un poco más de cobertura.",tender:"Tender: cortes con espalda descubierta, halter y tonos de temporada para salir."};

const COLOR_CODE={Negro:"NEG",Blanco:"BLA",Marrón:"MAR",Beige:"BEI",Mantequilla:"MAN",Rosa:"ROS",Celeste:"CEL",Rojo:"ROJ",Vino:"VIN"};
const skuOf=(p,color,size)=>[p.ref,COLOR_CODE[color]||color.slice(0,3).toUpperCase(),size].filter(Boolean).join("-");
const fmt=n=>"$"+n.toLocaleString("es-CO");
const light=c=>["Blanco","Mantequilla","Beige","Celeste","Rosa"].includes(c);

function bodySVG(color,cut="a",back=false){
  const fill=COLORS[color]||color, stroke=light(color)?"rgba(43,13,24,.25)":"rgba(0,0,0,.15)";
  const torso="Q140 110 136 150 Q134 180 150 215 L128 232 Q112 210 100 210 Q88 210 72 232 L50 215 Q66 180 64 150 Q60 110 66 70";
  let top, extra="";
  if(cut==="a") top="M70 18 L79 18 L86 62 Q100 70 114 62 L121 18 L130 18 L134 70 "+torso+" Z";
  else if(cut==="b") top="M62 30 L84 30 L84 58 L116 58 L116 30 L138 30 L136 70 "+torso+" Z";
  else if(cut==="d") top="M92 14 L108 14 L118 60 Q100 70 82 60 Z M82 60 Q100 70 118 60 L134 72 "+torso+" Z";
  else { top="M64 34 Q100 52 136 34 L136 70 "+torso+" Z";
    extra=`<path d="M64 34 L40 46 L22 128 L36 132 L60 76 Z M136 34 L160 46 L178 128 L164 132 L140 76 Z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`; }
  return `<svg class="body" viewBox="0 0 200 250" role="img" aria-label="Body color ${color}">${extra}<path d="${top}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>${back?`<path d="${cut==="d"?"M72 72 Q100 150 128 72":cut==="c"?"M86 46 Q100 58 114 46":"M76 70 Q100 118 124 70"}" fill="rgba(0,0,0,.16)" stroke="${stroke}" stroke-width="1.2"/><path d="M100 ${cut==="c"?60:110} L100 205" stroke="rgba(0,0,0,.12)" stroke-width="1.5"/>`:`<path d="M82 92 Q78 140 88 190" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="6" stroke-linecap="round"/>`}</svg>`;
}

const slug=t=>t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
function visual(p,color){
  if(!IMG_BASE) return bodySVG(color,p.cut);
  return `<img class="photo" src="${IMG_BASE}${p.id}-${slug(color)}.${IMG_EXT}" alt="${p.name} color ${color}" loading="lazy" data-color="${color}" data-cut="${p.cut}" onerror="photoFail(this)">`;
}
const photoUrl=(p,color,n)=>`${IMG_BASE}${p.id}-${slug(color)}${n>1?"-"+n:""}.${IMG_EXT}`;
const _photoCache={};
function exists(url){return new Promise(r=>{const i=new Image();i.onload=()=>r(true);i.onerror=()=>r(false);i.src=url})}
/* Devuelve la lista de fotos que existen para ese producto y color */
async function photoList(p,color){
  const k=p.id+"|"+color;
  if(_photoCache[k]) return _photoCache[k];
  const urls=[];
  if(IMG_BASE){
    for(let n=1;n<=MAX_FOTOS;n++){const u=photoUrl(p,color,n);if(await exists(u))urls.push(u);else break}
  }
  return _photoCache[k]=urls;
}
/* Vistas para la galería: fotos reales o, si no hay, dibujo de frente y espalda */
async function viewsFor(p,color){
  const urls=await photoList(p,color);
  if(urls.length) return urls.map((u,i)=>({html:`<img class="photo" src="${u}" alt="${p.name} color ${color}, foto ${i+1}" draggable="false">`,label:`Foto ${i+1} de ${urls.length}`}));
  return [{html:bodySVG(color,p.cut),label:"Frente"},{html:bodySVG(color,p.cut,true),label:"Espalda"}];
}
/* Tarjeta: foto principal y, al pasar el mouse, la segunda vista */
async function fillCard(card,p,color){
  const vis=card.querySelector(".vis"), alt=card.querySelector(".alt2");
  card.dataset.color=color;
  const v=await viewsFor(p,color);
  if(card.dataset.color!==color) return;
  vis.innerHTML=v[0].html; alt.innerHTML=v[1]?v[1].html:"";
  alt.hidden=!v[1];
}
function photoFail(img){
  const box=img.parentNode; if(!box) return;
  if(box.classList) box.classList.remove("has-photo");
  img.outerHTML=bodySVG(img.dataset.color,img.dataset.cut);
}

// State
let cart=[];
try{cart=JSON.parse(localStorage.getItem("musy-cart")||"[]")}catch(e){cart=[]}
const save=()=>{try{localStorage.setItem("musy-cart",JSON.stringify(cart))}catch(e){}};
let filter="all";
const cardColor={};

const $=s=>document.querySelector(s);
document.getElementById("heroArt").insertAdjacentHTML("afterbegin",IMG_BASE?`<img class="photo" src="${IMG_BASE}portada.${IMG_EXT}" alt="Musy" data-color="Vino" data-cut="b" onerror="photoFail(this)">`:bodySVG("Vino","b"));

function renderGrid(){
  const g=$("#grid");
  g.innerHTML=PRODUCTS.filter(p=>filter==="all"||p.coll===filter).map(p=>{
    const sel=cardColor[p.id]||p.colors[0];
    return `
    <div class="card" data-id="${p.id}">
      <button class="card-open" data-open="${p.id}" aria-label="Ver ${p.name} en ${sel}">
        <div class="card-img"><div class="vis">${bodySVG(sel,p.cut)}</div><div class="alt2" hidden></div><span class="card-tag">${p.coll}</span></div>
        <h3>${p.name}</h3>
      </button>
      <div class="card-meta"><span class="price">${fmt(PRICE)}</span><span class="dots" role="group" aria-label="Colores de ${p.name}">${p.colors.map(c=>`<button class="dot" style="background:${COLORS[c]}" data-pid="${p.id}" data-c="${c}" title="${c}" aria-label="${c}" aria-pressed="${c===sel}"></button>`).join("")}</span></div>
      <span class="sub">${sel} · ${p.colors.length} colores</span>
    </div>`}).join("");
  g.querySelectorAll(".card").forEach(c=>{const p=PRODUCTS.find(x=>x.id===c.dataset.id);fillCard(c,p,cardColor[p.id]||p.colors[0])});
  $("#collNote").textContent=NOTES[filter];
  document.querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed",c.dataset.f===filter));
}
function setFilter(f){filter=f;renderGrid()}
document.querySelectorAll(".chip").forEach(c=>c.onclick=()=>setFilter(c.dataset.f));
document.querySelectorAll("[data-go]").forEach(a=>a.addEventListener("click",()=>{setFilter(a.dataset.go);$("#menu").classList.remove("open")}));
$("#grid").addEventListener("click",e=>{
  const d=e.target.closest(".dot");
  if(d){
    const p=PRODUCTS.find(x=>x.id===d.dataset.pid), c=d.dataset.c, card=d.closest(".card");
    cardColor[p.id]=c;
    fillCard(card,p,c);
    card.querySelectorAll(".dot").forEach(x=>x.setAttribute("aria-pressed",x.dataset.c===c));
    card.querySelector(".sub").textContent=`${c} · ${p.colors.length} colores`;
    card.querySelector(".card-open").setAttribute("aria-label",`Ver ${p.name} en ${c}`);
    return;
  }
  const o=e.target.closest(".card-open");if(o)openProduct(o.dataset.open);
});

// Overlay helpers
const overlay=$("#overlay");
function closeAll(){$("#modal").classList.remove("on");$("#cart").classList.remove("on");$("#cart").setAttribute("aria-hidden","true");overlay.classList.remove("on")}
overlay.onclick=closeAll;
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=closeAll);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeAll()});
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeAll()});

// Product modal
let cur=null, curColor=null, curSize=null, curQty=1;
function openProduct(id){
  cur=PRODUCTS.find(p=>p.id===id);curColor=cardColor[id]||cur.colors[0];curSize=null;curQty=1;$("#mErr").textContent="";
  $("#mColl").textContent="Colección "+cur.coll;
  $("#mName").textContent=cur.name;
  $("#mDesc").textContent=cur.desc;
  $("#mSw").innerHTML=cur.colors.map(c=>`<button class="sw" style="background:${COLORS[c]}" data-c="${c}" aria-label="${c}" aria-pressed="false"></button>`).join("");
  $("#mSizes").innerHTML=SIZES.map(z=>`<button class="sz" data-z="${z}" aria-pressed="false">${z}</button>`).join("");
  paintModal();buildGallery();
  $("#modal").classList.add("on");overlay.classList.add("on");
  setTimeout(()=>$("#mAdd").focus(),50);
}
function paintModal(){
  $("#mColor").textContent=curColor;
  $("#mQty").textContent=curQty;
  $("#mSize").textContent=curSize||"elige una";
  $("#mRef").textContent=skuOf(cur,curColor,curSize);
  document.querySelectorAll(".sz").forEach(z=>z.setAttribute("aria-pressed",z.dataset.z===curSize));
  document.querySelectorAll(".sw").forEach(s=>s.setAttribute("aria-pressed",s.dataset.c===curColor));
}
$("#mSw").addEventListener("click",e=>{const s=e.target.closest(".sw");if(s){curColor=s.dataset.c;cardColor[cur.id]=curColor;paintModal();buildGallery();renderGrid()}});
// Galería con giro 3D
let gal={views:[],i:0,busy:false,token:0};
const reduceMotion=matchMedia("(prefers-reduced-motion: reduce)").matches;
async function buildGallery(){
  const tk=++gal.token, box=$("#mImg");
  const views=await viewsFor(cur,curColor);
  if(tk!==gal.token) return;
  gal.views=views;gal.i=0;
  const photos=!/^<svg/.test(views[0].html);
  box.classList.toggle("has-photo",photos);
  const many=views.length>1;
  box.innerHTML=`
    <div class="stage"><div class="spin" id="spin">${views[0].html}</div></div>
    ${many?`<div class="gal-hint">↔ Arrastra para girar</div>
    <div class="gal-label" id="galLabel">${views[0].label}</div>
    <button class="gal-nav gal-prev" id="galPrev" aria-label="Vista anterior">‹</button>
    <button class="gal-nav gal-next" id="galNext" aria-label="Vista siguiente">›</button>
    <div class="gal-thumbs">${views.map((v,i)=>`<button class="gal-th" data-v="${i}" aria-label="${v.label}" aria-current="${i===0}">${v.html}</button>`).join("")}</div>`:""}`;
  if(!many) return;
  $("#galPrev").onclick=e=>{e.stopPropagation();go(gal.i-1,-1)};
  $("#galNext").onclick=e=>{e.stopPropagation();go(gal.i+1,1)};
  box.querySelectorAll(".gal-th").forEach(b=>b.onclick=e=>{e.stopPropagation();const n=+b.dataset.v;go(n,n>=gal.i?1:-1)});
}
function show(i){
  gal.i=i;$("#spin").innerHTML=gal.views[i].html;
  const l=$("#galLabel");if(l)l.textContent=gal.views[i].label;
  document.querySelectorAll(".gal-th").forEach(b=>b.setAttribute("aria-current",+b.dataset.v===i));
}
function go(i,dir,fast){
  const n=gal.views.length;if(n<2||gal.busy)return;
  i=(i+n)%n;if(i===gal.i)return;
  const sp=$("#spin");
  if(reduceMotion){show(i);return}
  gal.busy=true;
  const t=fast?.09:.2;
  sp.style.transition=`transform ${t}s ease-in`;
  sp.style.transform=`rotateY(${dir*-90}deg)`;
  setTimeout(()=>{
    show(i);
    sp.style.transition="none";sp.style.transform=`rotateY(${dir*90}deg)`;
    sp.offsetWidth;
    sp.style.transition=`transform ${t}s ease-out`;sp.style.transform="rotateY(0deg)";
    setTimeout(()=>{gal.busy=false},t*1000);
  },t*1000);
}
// Arrastrar para girar (mouse o dedo)
(()=>{
  const box=$("#mImg");let x0=null,moved=false;
  box.addEventListener("pointerdown",e=>{if(e.target.closest("button")||gal.views.length<2)return;x0=e.clientX;moved=false;box.setPointerCapture(e.pointerId)});
  box.addEventListener("pointermove",e=>{
    if(x0===null)return;
    const dx=e.clientX-x0, step=gal.views.length>=6?35:70;
    const sp=$("#spin");
    if(Math.abs(dx)>=step){go(gal.i+(dx<0?1:-1),dx<0?1:-1,gal.views.length>=6);x0=e.clientX;moved=true}
    else if(!gal.busy&&sp){sp.style.transition="none";sp.style.transform=`rotateY(${dx/step*25}deg)`}
  });
  const end=()=>{if(x0===null)return;x0=null;const sp=$("#spin");if(sp&&!gal.busy){sp.style.transition="transform .25s ease-out";sp.style.transform="rotateY(0deg)"}};
  box.addEventListener("pointerup",end);box.addEventListener("pointercancel",end);
})();
document.addEventListener("keydown",e=>{if(!$("#modal").classList.contains("on"))return;if(e.key==="ArrowRight")go(gal.i+1,1);if(e.key==="ArrowLeft")go(gal.i-1,-1)});
$("#mMinus").onclick=()=>{curQty=Math.max(1,curQty-1);paintModal()};
$("#mPlus").onclick=()=>{curQty=Math.min(10,curQty+1);paintModal()};
$("#mSizes").addEventListener("click",e=>{const z=e.target.closest(".sz");if(z){curSize=z.dataset.z;$("#mErr").textContent="";paintModal()}});
document.querySelectorAll("[data-close-link]").forEach(a=>a.addEventListener("click",closeAll));
$("#mAdd").onclick=()=>{
  if(!curSize){$("#mErr").textContent="Elige una talla para agregar al carrito.";return}
  const sku=skuOf(cur,curColor,curSize);
  const l=cart.find(x=>x.sku===sku);
  if(l)l.qty+=curQty;else cart.push({sku,id:cur.id,color:curColor,size:curSize,qty:curQty});
  save();renderCart();closeAll();
  const n=units();
  toast(n%4===0?`Agregado. Tienes ${n} camisetas con la promo completa.`:`Agregado. Suma ${4-n%4} más para completar el trío.`);
};

// Cart
const units=()=>cart.reduce((a,l)=>a+l.qty,0);
const prod=id=>PRODUCTS.find(p=>p.id===id);
function totals(){
  const n=units(), cuartetos=Math.floor(n/4), rest=n%4;
  const sub=n*PRICE, promo=cuartetos*CUARTETO+rest*PRICE, saving=sub-promo;
  const ship=n===0?0:(promo>=FREE_SHIP?0:SHIP);
  return {n,cuartetos,rest,sub,promo,saving,ship,total:promo+ship};
}
function renderCart(){
  cart=cart.filter(l=>prod(l.id));
  const t=totals();
  $("#cartCount").textContent=t.n;
  $("#drawerTitle").textContent="Tu carrito";
  if(!t.n){
    $("#cartBody").innerHTML=`<div class="empty"><b>Tu carrito está vacío</b>Elige cuatros camisetas y paga $100.000.<br><br><button class="btn btn-vino" id="goShop">Ver la tienda</button></div>`;
    $("#cartFoot").innerHTML="";
    $("#goShop").onclick=()=>{closeAll();location.hash="tienda"};
    return;
  }
  $("#cartBody").innerHTML=cart.map((l,i)=>{const p=prod(l.id);return `
    <div class="line">
      <div class="thumb">${visual(p,l.color)}</div>
      <div><h4>${p.name}</h4>
        <div class="sub">Color: ${l.color} · Talla: ${l.size}</div>
        <div class="ref">Ref. ${l.sku}</div>
        <div><span class="qty"><button data-dec="${i}" aria-label="Disminuir">−</button><span>${l.qty}</span><button data-inc="${i}" aria-label="Aumentar">+</button></span><button class="rm" data-rm="${i}">Quitar</button></div></div>
      <div class="price">${fmt(l.qty*PRICE)}</div>
    </div>`}).join("");
  const hint=t.rest?`Agrega ${4-t.rest} camisetas${4-t.rest>1?"s":""} más y ahorra $40.000 con otro cuarteto.`:`Promo aplicada a ${t.cuarteto} cuaterto${t.cuarteto>1?"s":""}.`;
  $("#cartFoot").innerHTML=`
    <div class="sum-row"><span>Subtotal (${t.n} und.)</span><span>${fmt(t.sub)}</span></div>
    ${t.saving?`<div class="sum-row save"><span>Promo 4 x $100.000</span><span>−${fmt(t.saving)}</span></div>`:""}
    <div class="sum-row total"><span>Total</span><span>${fmt(t.total)}</span></div>
    <button class="btn btn-vino full" style="margin-top:14px" id="toCheckout">Finalizar compra</button>`;
  $("#toCheckout").onclick=renderCheckout;
}
$("#cartBody").addEventListener("click",e=>{
  const d=e.target.dataset;
  if(d.inc!==undefined)cart[d.inc].qty++;
  else if(d.dec!==undefined){cart[d.dec].qty--;if(cart[d.dec].qty<1)cart.splice(d.dec,1)}
  else if(d.rm!==undefined)cart.splice(d.rm,1);
  else return;
  save();renderCart();
});
function openCart(){renderCart();$("#cart").classList.add("on");$("#cart").setAttribute("aria-hidden","false");overlay.classList.add("on")}
$("#openCart").onclick=openCart;

// Checkout -> WhatsApp
let orderNum="";
function renderCheckout(){
  const t=totals();
  orderNum="MSY-"+String(Date.now()).slice(-6);
  $("#drawerTitle").textContent="Datos de envío";
  $("#cartBody").innerHTML=`
  <form class="co" id="coForm" novalidate>
    <label for="cName">Nombre completo<input id="cName" autocomplete="name" required></label>
    <div class="two">
      <label for="cPhone">Celular<input id="cPhone" type="tel" inputmode="numeric" placeholder="300 000 0000" required></label>
      <label for="cCity">Ciudad<input id="cCity" placeholder="Cartagena" required></label>
    </div>
    <label for="cAddr">Dirección y barrio<input id="cAddr" autocomplete="street-address" required></label>
    <label for="cNote">Indicaciones (opcional)<textarea id="cNote" rows="2" placeholder="Torre, apartamento, punto de referencia"></textarea></label>
    <div class="label">Medio de pago</div>
    <div class="pay">
      <label><input type="radio" name="pay" id="p1" value="Contra entrega" checked> Pago contra entrega (Cartagena) </label>
      <label><input type="radio" name="pay" id="p2" value="Nequi / Daviplata"> Nequi o Llave</label>
    </div>
    <div class="err" id="coErr"></div>
  </form>`;
  $("#cartFoot").innerHTML=`
    <div class="sum-row total" style="margin-top:0"><span>Total a pagar</span><span>${fmt(t.total)}</span></div>
    <div style="display:flex;gap:8px;margin-top:14px"><button class="btn btn-line" id="back">Volver</button><a class="btn btn-vino" style="flex:1;justify-content:center" id="sendWa" href="#" target="_blank" rel="noopener">Enviar pedido por WhatsApp</a></div>`;
  $("#back").onclick=renderCart;
  $("#coForm").addEventListener("input",updateWa);
  $("#coForm").addEventListener("submit",e=>e.preventDefault());
  $("#sendWa").addEventListener("click",sendOrder);
  updateWa();
}
const val=id=>($(id)?$(id).value.trim():"");
function orderText(){
  const t=totals(), pay=(document.querySelector('input[name="pay"]:checked')||{}).value||"";
  const items=cart.map((l,i)=>{const p=prod(l.id);return `${i+1}. *${p.name}*\n   Ref: ${l.sku}\n   Color: ${l.color} | Talla: ${l.size}\n   Cantidad: ${l.qty} x ${fmt(PRICE)} = ${fmt(l.qty*PRICE)}`}).join("\n\n");
  return `*NUEVO PEDIDO MUSY ${orderNum}*\n\n${items}\n\n`+
    `Unidades: ${t.n}\nSubtotal: ${fmt(t.sub)}\n`+
    (t.saving?`Promo 4 x $100.000: -${fmt(t.saving)}\n`:"")+
    `Envío: ${t.ship?fmt(t.ship):""}\n*TOTAL: ${fmt(t.total)}*\n\n`+
    `*Datos de envío*\nNombre: ${val("#cName")}\nCelular: ${val("#cPhone")}\nCiudad: ${val("#cCity")}\nDirección: ${val("#cAddr")}`+
    (val("#cNote")?`\nIndicaciones: ${val("#cNote")}`:"")+`\nPago: ${pay}`;
}
function updateWa(){$("#sendWa").href="https://wa.me/"+WA+"?text="+encodeURIComponent(orderText())}
function sendOrder(e){
  if(!val("#cName")||!val("#cCity")||!val("#cAddr")){e.preventDefault();$("#coErr").textContent="Completa nombre, ciudad y dirección para enviar tu pedido.";return}
  if(val("#cPhone").replace(/\D/g,"").length<10){e.preventDefault();$("#coErr").textContent="Escribe un celular de 10 dígitos para coordinar la entrega.";return}
  updateWa();
  const txt=orderText();
  setTimeout(()=>{
    $("#drawerTitle").textContent="Pedido "+orderNum;
    $("#cartBody").innerHTML=`<div style="display:grid;gap:12px">
      <div class="ok-head">Abrimos WhatsApp con tu pedido</div>
      <p style="margin:0;color:var(--tinta-2)">Envía el mensaje en WhatsApp para confirmar. Si no se abrió, copia este resumen y mándalo al <b style="user-select:all">${WA_SHOW}</b>.</p>
      <div class="order-text" id="orderTxt"></div></div>`;
    $("#orderTxt").textContent=txt;
    $("#cartFoot").innerHTML=`<button class="btn btn-vino full" id="copyOrder">Copiar resumen</button>`;
    $("#copyOrder").onclick=()=>{
      navigator.clipboard.writeText(txt).then(()=>toast("Resumen copiado")).catch(()=>{const r=document.createRange();r.selectNodeContents($("#orderTxt"));const s=getSelection();s.removeAllRanges();s.addRange(r);toast("Texto seleccionado: cópialo manualmente")});
    };
    cart=[];save();$("#cartCount").textContent=0;
  },300);
}

// Misc
$("#burger").onclick=()=>{const m=$("#menu");m.classList.toggle("open");$("#burger").setAttribute("aria-expanded",m.classList.contains("open"))};
$("#newsForm").addEventListener("submit",e=>{e.preventDefault();const em=$("#newsEmail").value;if(!/^\S+@\S+\.\S+$/.test(em)){$("#newsMsg").textContent="Escribe un correo válido.";return}$("#newsMsg").textContent="Listo. Te avisaremos primero de los nuevos lanzamientos.";$("#newsEmail").value=""});
let tt;function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("on"),2600)}

renderGrid();renderCart();
