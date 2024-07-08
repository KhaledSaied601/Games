(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();class u{constructor(){}async getGames(e){const r=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${e}`,{method:"GET",headers:{"x-rapidapi-key":"92028d7e57msh232a64eaf913af1p15ad44jsn99609b0d2f60","x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"}});if(r.ok)return document.querySelector(".loading-page").classList.add("hidden"),document.body.classList.remove("overflow-hidden"),await r.json();document.querySelector(".loading-page").classList.remove("hidden"),document.body.classList.add("overflow-hidden")}}class m{constructor(){}async getGameDetailsById(e,r){const a=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${e}`,{method:"GET",headers:{"x-rapidapi-key":"92028d7e57msh232a64eaf913af1p15ad44jsn99609b0d2f60","x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"}});if(a.ok){document.querySelector(".loading-page").classList.add("hidden"),document.body.classList.remove("overflow-hidden");const t=await a.json();await r(t)}else document.querySelector(".loading-page").classList.remove("hidden"),document.body.classList.add("overflow-hidden")}}const n=new u;class g{constructor(){}displayGames(e){const r=e.map(a=>`
<div
   id=${a.id} class="card  bg-transparent group bg-opacity-25 rounded-2xl border border-[#212529]  hover:scale-105 transition-all duration-500 after:content-[''] after:w-full after:h-full after:bg-black after:block after:absolute after:top-0 after:right-0 after:bg-opacity-5 hover:after:bg-opacity-0 after:z-20 z-10 relative  ">

  <div class="card-content  p-5 rounded-lg rounded-b-none ">

    <div class="card-img rounded-md overflow-hidden relative z-10">
      <img class="w-full  " src="${a.thumbnail}" alt="">
      <div
        class="img-overlay absolute w-full h-full top-0 left-0 bg-[#212529] bg-opacity-40 z-20 group-hover:bg-opacity-0 transition-all duration-1000">
      </div>
    </div>

    <div class="card-game-head flex justify-between items-start mt-3 text-white">
      <h3>${a.title}</h3>
      <span
        class="bg-blue-300 group-hover:bg-blue-500 transition-all duration-1000  p-0.5 px-2 rounded-lg">Free</span>
    </div>

    <p class="text-center text-gray-500">${a.short_description.split(" ").slice(0,10).join(" ")}
    </p>


  </div>



  <div class="card-footer flex justify-between items-center content-center border-t  border-[#212529] max-h-10  p-3 text-white ">
    <span class="bg-[#1a1e2083] p-1 px-2 rounded-lg text-xs">${a.genre}</span>
    <span class="bg-[#1a1e2083] p-1 px-2 rounded-lg text-xs">${a.platform}</span>

  </div>

</div>

`);document.querySelector(".games-cards").innerHTML=r.join("")}async displayFirstGames(e){this.displayGames(await n.getGames("MMORPG")),await e()}async changeCategory(e,r){for(let a=0;a<e.length;a++)e[a].addEventListener("click",async t=>{t.preventDefault(!0),Array.from(e).map(s=>{s.classList.remove("text-blue-300")}),e[a].classList.add("text-blue-300"),this.displayGames(await n.getGames(t.target.text)),await r()})}getClickedCardId(e,r,a){for(let t=0;t<e.length;t++)e[t].addEventListener("click",s=>{const d=s.target.getAttribute("id");return r(d,a),d})}showGameDetails(e){document.querySelector(".game-details-section").classList.remove("hidden"),document.body.classList.add("overflow-hidden"),document.querySelector(".game-detail-content").innerHTML=`
  <div class="game-img ">
            <img src="${e.thumbnail}" class="w-full" alt="">

          </div>



          <div class="game-details col-span-2 text-white">


            <h3 class="game-title text-3xl mb-4"><span>Title: </span><span>${e.title}</span></h3>
            <p class="platform mb-4">Category: <span class="p-1 rounded-md bg-blue-500 text-black text-xs">${e.genre}</span></p>
            <p class="platform mb-4">Platform: <span class="p-1 rounded-md bg-blue-500 text-black text-xs">${e.platform}</span></p>
            <p class="status mb-4">Status: <span class="p-1 rounded-md bg-blue-500 text-black text-xs">${e.status}</span></p>
            <p class="mb-4">${e.description}</p>

            <a href="${e.freetogame_profile_url}" class="border border-yellow-600 rounded-md p-2 hover:bg-yellow-600 transition-all duration-500">Show
              Game</a>

          </div>

`}closeGameDetails(){document.querySelector(".close-icon").addEventListener("click",()=>{document.querySelector(".game-details-section").classList.add("hidden"),document.body.classList.remove("overflow-hidden")})}showNavMenu(){document.querySelector(".nav-menu-btn").addEventListener("click",()=>{document.querySelector(".nav-menu-list").classList.toggle("hidden")})}}const c=new m,o=new g,f=document.querySelectorAll("a");let l=[];o.displayFirstGames(()=>{p(()=>{o.getClickedCardId(l,c.getGameDetailsById,o.showGameDetails)})});o.changeCategory(f,()=>{p(()=>{o.getClickedCardId(l,c.getGameDetailsById,o.showGameDetails)})});o.closeGameDetails();o.showNavMenu();async function p(i){l=await document.querySelectorAll(".card"),await i()}
//# sourceMappingURL=index-PEkDgLI0.js.map
