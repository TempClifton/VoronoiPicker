!function(){const e=new THREE.OrthographicCamera(-1,1,1,-1,0,1),t=new THREE.BufferGeometry;t.setAttribute("position",new THREE.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),t.setAttribute("uv",new THREE.Float32BufferAttribute([0,2,0,0,2,0],2));THREE.EffectComposer=class{constructor(e,t){if(this.renderer=e,void 0===t){const s=e.getSize(new THREE.Vector2);this._pixelRatio=e.getPixelRatio(),this._width=s.width,this._height=s.height,(t=new THREE.WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===THREE.CopyShader&&console.error("THREE.EffectComposer relies on THREE.CopyShader"),void 0===THREE.ShaderPass&&console.error("THREE.EffectComposer relies on THREE.ShaderPass"),this.copyPass=new THREE.ShaderPass(THREE.CopyShader),this.clock=new THREE.Clock}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let t=0,i=this.passes.length;t<i;t++){const i=this.passes[t];if(!1!==i.enabled){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),i.needsSwap){if(s){const t=this.renderer.getContext(),s=this.renderer.state.buffers.stencil;s.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),s.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==THREE.MaskPass&&(i instanceof THREE.MaskPass?s=!0:i instanceof THREE.ClearMaskPass&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){const t=this.renderer.getSize(new THREE.Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(s,i),this.renderTarget2.setSize(s,i);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(s,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}},THREE.FullScreenQuad=class{constructor(e){this._mesh=new THREE.Mesh(t,e)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,e)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},THREE.Pass=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}}();
//# sourceMappingURL=index.3a43d648.js.map
