(this["webpackJsonpapi-edamam"]=this["webpackJsonpapi-edamam"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(4),l=t.n(r),i=t(2),o=t.n(i),s=t(5),m=t(1),u=(t(12),t(13),function(e){var a=e.title,t=e.calories,c=e.recipeUrl,r=e.image;return n.a.createElement("div",{className:"recipe-container"},n.a.createElement("div",{className:"recipe-card"},n.a.createElement("div",null,n.a.createElement("img",{src:r,alt:"",className:"recipe-image"})),n.a.createElement("div",{className:"recipe-description"},n.a.createElement("h2",null,a),n.a.createElement("p",null,t," cal / per serving"),n.a.createElement("a",{href:c},"Recipe"))))});var p=function(){var e=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],a=Object(c.useState)([]),t=Object(m.a)(a,2),r=t[0],l=t[1],i=Object(c.useState)(""),p=Object(m.a)(i,2),f=p[0],b=p[1],d=Object(c.useState)("spaghetti"),h=Object(m.a)(d,2),v=h[0],E=h[1],g=Object(c.useState)(""),j=Object(m.a)(g,2),N=j[0],O=j[1];Object(c.useEffect)((function(){y()}),[v]);var y=function(){var e=Object(s.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(v,"&app_id=").concat("3caabacb","&app_key=").concat("ec02a2288b5800a44005e501a60699a8","&to=9"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,console.log(t),l(t.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"App"},n.a.createElement("h1",{className:"title"},"What to eat today?"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(f)},className:"search-form"},n.a.createElement("input",{className:"search-bar",type:"text",value:f,onChange:function(e){b(e.target.value),console.log(f)}}),n.a.createElement("div",{className:"search-button"},n.a.createElement("button",null,"Search")),n.a.createElement("div",{className:"random-button"},n.a.createElement("button",{className:"colorful-button",onClick:function(a){a.preventDefault(),O(e[Math.floor(25*Math.random())]),console.log(N),E(N)}},"Random"))),n.a.createElement("div",{className:"recipe-section"},r.map((function(e){return n.a.createElement(u,{key:e.recipe.label,title:e.recipe.label,calories:Math.floor(e.recipe.calories/e.recipe.yield),recipeUrl:e.recipe.url,image:e.recipe.image})}))))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root"))},6:function(e,a,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.ca2d8fb9.chunk.js.map