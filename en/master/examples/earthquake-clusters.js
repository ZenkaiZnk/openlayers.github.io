(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{266:function(e,t,a){"use strict";a.r(t);var r,n=a(3),o=a(2),i=a(1),s=a(102),c=a(50),u=a(94),l=a(21),w=a(5),g=a(239),f=a(11),d=a(64),m=a(20),b=a(16),h=a(10),p=a(112),v=a(49),y=a(69),k=new m.a({color:"rgba(255, 153, 0, 0.8)"}),j=new b.a({color:"rgba(255, 204, 0, 0.2)",width:1}),x=new m.a({color:"#fff"}),O=new b.a({color:"rgba(0, 0, 0, 0.6)",width:3}),M=new m.a({color:"rgba(255, 255, 255, 0.01)"});function E(e){var t=e.get("name"),a=5+20*(parseFloat(t.substr(2))-5);return new h.c({geometry:e.getGeometry(),image:new p.a({radius1:a,radius2:3,points:5,angle:Math.PI,fill:k,stroke:j})})}var S,q=null;q=new l.a({source:new g.a({distance:40,source:new f.a({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new s.a({extractStyles:!1})})}),style:function(e,t){t!=S&&(!function(e){r=0;for(var t,a,n=q.getSource().getFeatures(),o=n.length-1;o>=0;--o){var s,c=(t=n[o]).get("features"),u=Object(i.j)(),l=void 0;for(l=0,s=c.length;l<s;++l)Object(i.q)(u,c[l].getGeometry().getExtent());r=Math.max(r,s),a=.25*(Object(i.E)(u)+Object(i.A)(u))/e,t.set("radius",a)}}(t),S=t);var a=e.get("features").length;return a>1?new h.c({image:new v.a({radius:e.get("radius"),fill:new m.a({color:[255,153,0,Math.min(.8,.4+a/r)]})}),text:new y.a({text:a.toString(),fill:x,stroke:O})}):E(e.get("features")[0])}});var F=new w.a({source:new d.a({layer:"toner"})});new n.a({layers:[F,q],interactions:Object(c.a)().extend([new u.a({condition:function(e){return"pointermove"==e.type||"singleclick"==e.type},style:function(e){for(var t,a=[new h.c({image:new v.a({radius:e.get("radius"),fill:M})})],r=e.get("features"),n=r.length-1;n>=0;--n)t=r[n],a.push(E(t));return a}})]),target:"map",view:new o.a({center:[0,0],zoom:2})})}},[[266,0]]]);
//# sourceMappingURL=earthquake-clusters.js.map