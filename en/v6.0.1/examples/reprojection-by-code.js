(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{351:function(e,n,t){"use strict";t.r(n);var o=t(3),r=t(2),a=t(1),c=t(5),i=t(4),u=t(116),l=t(9),s=t(82),f=t(66),g=new o.a({layers:[new c.a({source:new l.b})],target:"map",view:new r.a({projection:"EPSG:3857",center:[0,0],zoom:1})}),d=document.getElementById("epsg-query"),p=document.getElementById("epsg-search"),h=document.getElementById("epsg-result"),v=document.getElementById("render-edges");function w(e,n,t,o){if(null===e||null===n||null===t||null===o)return h.innerHTML="Nothing usable found, using EPSG:3857...",void g.setView(new r.a({projection:"EPSG:3857",center:[0,0],zoom:1}));h.innerHTML="("+e+") "+n;var c="EPSG:"+e;f.a.defs(c,t),Object(u.a)(f.a);var l=Object(i.i)(c),s=Object(i.k)("EPSG:4326",l),d=Object(a.a)([o[1],o[2],o[3],o[0]],s);l.setExtent(d);var p=new r.a({projection:l});g.setView(p),p.fit(d)}p.onclick=function(e){var n;n=d.value,h.innerHTML="Searching ...",fetch("https://epsg.io/?format=json&q="+n).then(function(e){return e.json()}).then(function(e){var n=e.results;if(n&&n.length>0)for(var t=0,o=n.length;t<o;t++){var r=n[t];if(r){var a=r.code,c=r.name,i=r.proj4,u=r.bbox;if(a&&a.length>0&&i&&i.length>0&&u&&4==u.length)return void w(a,c,i,u)}}w(null,null,null,null)}),e.preventDefault()},v.onchange=function(){g.getLayers().forEach(function(e){if(e instanceof c.a){var n=e.getSource();n instanceof s.a&&n.setRenderReprojectionEdges(v.checked)}})}}},[[351,0]]]);
//# sourceMappingURL=reprojection-by-code.js.map