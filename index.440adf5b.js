var THREEx=THREEx||{};THREEx.WindowResize=function(n,e){var i=function(){n.setSize(window.innerWidth,window.innerHeight),e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix()};return window.addEventListener("resize",i,!1),{trigger:function(){i()},destroy:function(){window.removeEventListener("resize",i)}}};
//# sourceMappingURL=index.440adf5b.js.map
