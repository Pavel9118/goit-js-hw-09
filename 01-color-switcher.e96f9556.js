const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),bodyColor:document.querySelector("body")};let o=null;function e(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}t.start.addEventListener("click",(function(){o=setInterval(e,1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(function(){clearInterval(o),t.start.disabled=!1,t.stop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.e96f9556.js.map
