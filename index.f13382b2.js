function e(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=document.createElement("div");o.setAttribute("data-qa","notification"),o.className=n?"error":"success",o.textContent=e,document.body.appendChild(o)}var n=new Promise(function(e,n){var o=!1;function t(n){0===n.button&&(o=!0,e("First promise was resolved on a left click"),document.removeEventListener("mousedown",t))}document.addEventListener("mousedown",t),setTimeout(function(){o||n(Error("First promise was rejected in 3 seconds if not clicked"),document.removeEventListener("mousedown",t))},3e3)}),o=new Promise(function(e){document.addEventListener("mousedown",function n(o){(0===o.button||2===o.button)&&(e("Second promise was resolved"),document.removeEventListener("mousedown",n))})}),t=!1,c=!1,r=new Promise(function(e){document.addEventListener("mousedown",function n(o){0===o.button?t=!0:2===o.button&&(c=!0),t&&c&&(e("Third promise was resolved only after both left and right clicks happened"),document.removeEventListener("mousedown",n))})});n.then(function(n){e(n,!1),console.log(n)}).catch(function(n){e(n,!0),console.error(n)}),o.then(function(n){e(n,!1),console.log(n)}).catch(function(n){e(n,!0),console.error(n)}),r.then(function(n){e(n,!1),console.log(n)}).catch(function(n){e(n,!0),console.error(n)});
//# sourceMappingURL=index.f13382b2.js.map
