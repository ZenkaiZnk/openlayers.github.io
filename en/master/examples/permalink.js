(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{339:function(t,e,o){"use strict";o.r(e);var a=o(3),n=o(2),i=o(5),r=o(9),s=2,w=[0,0],p=0;if(""!==window.location.hash){var c=window.location.hash.replace("#map=","").split("/");4===c.length&&(s=parseInt(c[0],10),w=[parseFloat(c[1]),parseFloat(c[2])],p=parseFloat(c[3]))}var g=new a.a({layers:[new i.a({source:new r.b})],target:"map",view:new n.a({center:w,zoom:s,rotation:p})}),l=!0,d=g.getView();g.on("moveend",(function(){if(l){var t=d.getCenter(),e="#map="+d.getZoom()+"/"+Math.round(100*t[0])/100+"/"+Math.round(100*t[1])/100+"/"+d.getRotation(),o={zoom:d.getZoom(),center:d.getCenter(),rotation:d.getRotation()};window.history.pushState(o,"map",e)}else l=!0})),window.addEventListener("popstate",(function(t){null!==t.state&&(g.getView().setCenter(t.state.center),g.getView().setZoom(t.state.zoom),g.getView().setRotation(t.state.rotation),l=!1)}))}},[[339,0]]]);
//# sourceMappingURL=permalink.js.map