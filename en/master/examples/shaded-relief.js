(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{361:function(t,e,n){"use strict";n.r(e);var a=n(3),o=n(2),r=n(5),i=n(68),s=n(29),u=n(158),h=n(9);var c=new s.a({url:"https://{a-d}.tiles.mapbox.com/v3/aj.sf-dem/{z}/{x}/{y}.png",crossOrigin:"anonymous"}),d=new u.a({sources:[c],operationType:"image",operation:function(t,e){var n,a,o,r,i,s,u,h,c,d,m,v,w=t[0],p=w.width,l=w.height,M=w.data,f=new Uint8ClampedArray(M.length),g=2*e.resolution,y=p-1,b=l-1,x=[0,0,0,0],E=2*Math.PI,I=Math.PI/2,z=Math.PI*e.sunEl/180,P=Math.PI*e.sunAz/180,A=Math.cos(z),T=Math.sin(z);for(a=0;a<=b;++a)for(r=0===a?0:a-1,i=a===b?b:a+1,n=0;n<=y;++n)o=n===y?y:n+1,s=4*(a*p+(0===n?0:n-1)),x[0]=M[s],x[1]=M[s+1],x[2]=M[s+2],x[3]=M[s+3],u=e.vert*(x[0]+2*x[1]+3*x[2]),s=4*(a*p+o),x[0]=M[s],x[1]=M[s+1],x[2]=M[s+2],x[3]=M[s+3],h=(e.vert*(x[0]+2*x[1]+3*x[2])-u)/g,s=4*(r*p+n),x[0]=M[s],x[1]=M[s+1],x[2]=M[s+2],x[3]=M[s+3],u=e.vert*(x[0]+2*x[1]+3*x[2]),s=4*(i*p+n),x[0]=M[s],x[1]=M[s+1],x[2]=M[s+2],x[3]=M[s+3],c=(e.vert*(x[0]+2*x[1]+3*x[2])-u)/g,d=Math.atan(Math.sqrt(h*h+c*c)),m=(m=Math.atan2(c,-h))<0?I-m:m>I?E-m+I:I-m,v=255*(T*Math.cos(d)+A*Math.sin(d)*Math.cos(P-m)),f[s=4*(a*p+n)]=v,f[s+1]=v,f[s+2]=v,f[s+3]=M[s+3];return{data:f,width:p,height:l}}}),m=(new a.a({target:"map",layers:[new r.a({source:new h.b}),new i.a({opacity:.3,source:d})],view:new o.a({extent:[-13675026,4439648,-13580856,4580292],center:[-13615645,4497969],minZoom:10,maxZoom:16,zoom:13})}),{});["vert","sunEl","sunAz"].forEach((function(t){var e=document.getElementById(t),n=document.getElementById(t+"Out");e.addEventListener("input",(function(){n.innerText=e.value,d.changed()})),n.innerText=e.value,m[t]=e})),d.on("beforeoperations",(function(t){var e=t.data;for(var n in e.resolution=t.resolution,m)e[n]=Number(m[n].value)}))}},[[361,0]]]);
//# sourceMappingURL=shaded-relief.js.map