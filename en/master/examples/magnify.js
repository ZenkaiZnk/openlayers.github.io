(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{317:function(t,e,a){"use strict";a.r(e);var r=a(3),n=a(2),o=a(5),i=a(4),c=a(29),p=a(46),s=new o.a({source:new c.a({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20,crossOrigin:""})}),u=document.getElementById("map"),d=new r.a({layers:[s],target:u,view:new n.a({center:Object(i.f)([-109,46.5]),zoom:6})}),h=75;document.addEventListener("keydown",(function(t){38===t.which?(h=Math.min(h+5,150),d.render(),t.preventDefault()):40===t.which&&(h=Math.max(h-5,25),d.render(),t.preventDefault())}));var w=null;u.addEventListener("mousemove",(function(t){w=d.getEventPixel(t),d.render()})),u.addEventListener("mouseout",(function(){w=null,d.render()})),s.on("postrender",(function(t){if(w){for(var e=Object(p.a)(t,w),a=Object(p.a)(t,[w[0]+h,w[1]]),r=Math.sqrt(Math.pow(a[0]-e[0],2)+Math.pow(a[1]-e[1],2)),n=t.context,o=e[0],i=e[1],c=o-r,s=i-r,u=Math.round(2*r+1),d=n.getImageData(c,s,u,u).data,l=n.createImageData(u,u),m=l.data,g=0;g<u;++g)for(var v=0;v<u;++v){var f=v-r,M=g-r,b=v,y=g;Math.sqrt(f*f+M*M)<r&&(b=Math.round(r+f/2),y=Math.round(r+M/2));var k=4*(g*u+v),D=4*(y*u+b);m[k]=d[D],m[k+1]=d[D+1],m[k+2]=d[D+2],m[k+3]=d[D+3]}n.beginPath(),n.arc(o,i,r,0,2*Math.PI),n.lineWidth=3*r/h,n.strokeStyle="rgba(255,255,255,0.5)",n.putImageData(l,c,s),n.stroke(),n.restore()}}))}},[[317,0]]]);
//# sourceMappingURL=magnify.js.map