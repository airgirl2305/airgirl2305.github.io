const c=document.getElementById("circle");function l({radius:e,angle:t,cx:o,cy:i}){t=t*(Math.PI/180);const s=o+e*Math.sin(t),r=i+e*Math.cos(t);return[s,r]}function u(e,t){c.setAttribute("cx",e),c.setAttribute("cy",t)}function a(e){return()=>{const[t,o]=l({angle:e,radius:6,cx:12,cy:12});u(t,o)}}localStorage.getItem("mouseX")||localStorage.setItem("mouseX",0);["mousemove","touchmove"].forEach(e=>{window.addEventListener(e,t=>{let o=t?.touches?.[0]?.clientX||t.clientX;localStorage.setItem("mouseX",o),requestAnimationFrame(a(o/4))})});let n=0;const m=localStorage.getItem("mouseX"),d=setInterval(h);function h(){n>=360&&clearInterval(d),requestAnimationFrame(a(m/4+n)),n+=2}document.querySelectorAll(".nav-link").forEach(e=>{const{pathname:t}=window.location,{pathname:o}=e;(o===t||o.length>1&&t.includes(o))&&e.classList.add("active")});