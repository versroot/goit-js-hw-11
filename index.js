import{i as a,S as c}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u=document.querySelector(".gallery");function g(s){const o=s.map(e=>`<li class="gallery-item">
  
        <a class="gallery-link" href=${e.webformatURL}> 
          <img
            class="gallery-image"
            src=${e.webformatURL}
            alt='${e.tags}'
  
          />
          </a>
          <ul class='properties'>
          <li class='property'><div class='key'>Likes</div> ${e.likes}</li>
          <li class='property'><div class='key'>Views </div> ${e.views}</li>
          <li class='property'><div class='key'>Comments </div> ${e.comments}</li>
          <li class='property'><div class='key'>Downloads </div> ${e.downloads}</li>
          
          
  
  
  </ul>
  
          </li>
          `).join("");u.insertAdjacentHTML("beforeend",o)}const d="46119113-9d91afa1c686c5ea1318b0639";function y(s){const o=`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return loadingMessage.style.display="none",e.json()}).catch(e=>{console.log(e)})}const m=document.querySelector("#searchButton"),p=document.querySelector(".gallery"),f=document.querySelector("#input"),h=document.querySelector("#loadingMessage");m.addEventListener("click",s=>{s.preventDefault(),p.innerHTML="",h.style.display="block";const o=f.value.trim();y(o).then(e=>{e.hits.length===0?(console.log("No pics"),a.error({title:"",titleColor:"#FFFFFF",message:" Sorry, there are no images matching your search query. Please, try again!",iconUrl:"https://raw.githubusercontent.com/versroot/goit-js-hw-11/refs/heads/main/src/img/bi_x-octagon.svg",backgroundColor:"#EF4040",messageColor:"#FFFFFF",close:!0,maxWidth:"432px",fontSize:"16px",fontWeight:"400",lineHeight:"24px",letterSpacing:"0.5px",onOpening:b})):(g(e.hits),l.refresh())}).catch(e=>console.log(e))});function b(s,o){var e=o.querySelector(".iziToast-close");e.style.backgroundColor="transparent",e.style.backgroundImage="url('https://raw.githubusercontent.com/versroot/goit-js-hw-11/refs/heads/main/src/img/bi_x-lg.svg')",e.style.backgroundSize="contain",e.style.width="16px",e.style.height="16px",e.style.color="transparent",e.style.margin="18px"}let l=new c(".gallery a",{captionsData:"alt",captionDelay:250});l.on("show.simplelightbox",function(){});
//# sourceMappingURL=index.js.map
