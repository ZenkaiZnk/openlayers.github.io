(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{372:function(e,n,t){"use strict";t.r(n);for(var o=t(24),r=t(3),a=t(2),i=t(26),l=t(34),w=t(22),s=t(10),u=t(11),c=t(48),d=t(23),g=t(19),m=t(63),v=new Array(2e4),f=18e6,p=0;p<2e4;++p)v[p]=new o.a({geometry:new i.a([2*f*Math.random()-f,2*f*Math.random()-f]),i:p,size:p%2?10:20});var y={10:new u.c({image:new c.a({radius:5,fill:new d.a({color:"#666666"}),stroke:new g.a({color:"#bada55",width:1})})}),20:new u.c({image:new c.a({radius:10,fill:new d.a({color:"#666666"}),stroke:new g.a({color:"#bada55",width:1})})})},b=new s.a({features:v,wrapX:!1}),h=new w.a({source:b,style:function(e){return y[e.get("size")]}}),k=new r.a({layers:[h],target:document.getElementById("map"),view:new a.a({center:[0,0],zoom:2})}),C=null,E=null,z=function(e){var n=b.getClosestFeatureToCoordinate(e);if(null===n)C=null,E=null;else{var t=n.getGeometry().getClosestPoint(e);null===C?C=new i.a(t):C.setCoordinates(t),null===E?E=new l.a([e,t]):E.setCoordinates([e,t])}k.render()};k.on("pointermove",function(e){if(!e.dragging){var n=k.getEventCoordinate(e.originalEvent);z(n)}}),k.on("click",function(e){z(e.coordinate)});var G=new g.a({color:"rgba(255,255,0,0.9)",width:3}),P=new u.c({stroke:G,image:new c.a({radius:10,stroke:G})});h.on("postrender",function(e){var n=Object(m.b)(e);n.setStyle(P),null!==C&&n.drawGeometry(C),null!==E&&n.drawGeometry(E)}),k.on("pointermove",function(e){if(!e.dragging){var n=k.getEventPixel(e.originalEvent),t=k.hasFeatureAtPixel(n);k.getTarget().style.cursor=t?"pointer":""}})}},[[372,0]]]);
//# sourceMappingURL=synthetic-points.js.map