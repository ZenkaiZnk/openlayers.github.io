(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{291:function(e,a,p){"use strict";p.r(a);var t,s,i=p(3),c=p(2),r=p(5),d=p(29),l="kDm0Jq1K4Ak7Bwtn8uvk",n="xnmvc4dKZrDfGlvQHXSvwQ",o=[{base:"base",type:"maptile",scheme:"normal.day",app_id:l,app_code:n},{base:"base",type:"maptile",scheme:"normal.day.transit",app_id:l,app_code:n},{base:"base",type:"maptile",scheme:"pedestrian.day",app_id:l,app_code:n},{base:"aerial",type:"maptile",scheme:"terrain.day",app_id:l,app_code:n},{base:"aerial",type:"maptile",scheme:"satellite.day",app_id:l,app_code:n},{base:"aerial",type:"maptile",scheme:"hybrid.day",app_id:l,app_code:n}],m=[];for(t=0,s=o.length;t<s;++t){var h=o[t];m.push(new r.a({visible:!1,preload:1/0,source:new d.a({url:y("https://{1-4}.{base}.maps.cit.api.here.com/{type}/2.1/maptile/newest/{scheme}/{z}/{x}/{y}/256/png?app_id={app_id}&app_code={app_code}",h),attributions:"Map Tiles &copy; "+(new Date).getFullYear()+' <a href="http://developer.here.com">HERE</a>'})}))}new i.a({layers:m,target:"map",view:new c.a({center:[921371.9389,6358337.7609],zoom:10})});function y(e,a){return e.replace("{base}",a.base).replace("{type}",a.type).replace("{scheme}",a.scheme).replace("{app_id}",a.app_id).replace("{app_code}",a.app_code)}var _=document.getElementById("layer-select");function b(){for(var e=_.value,a=0,p=m.length;a<p;++a)m[a].setVisible(o[a].scheme===e)}_.addEventListener("change",b),b()}},[[291,0]]]);
//# sourceMappingURL=here-maps.js.map