"use strict";function _dismissDropdownsOnClick(e){if(!e.target.matches(".dropbtn")){let t=document.getElementsByClassName("dropdown-content");for(let o=0;o<t.length;o++){let l=t[o];l.classList.contains("show")&&(l.classList.contains("dropdown-dialog")&&l.contains(e.target)||lm.ToggleDropdown(l))}}}!function(e){e.lm={}}(this),lm.DEBUG=!0,lm.TINY=1e-6,lm.HUGE=1e6,lm.PI=Math.PI,lm.PI2=2*Math.PI,lm.PIOVER2=Math.PI/2,lm.IsMobileDevice=function(){let e=!1;var t;if(t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),!e){const t=window.navigator.userAgent.toLowerCase();(t.indexOf("ipad")>-1||t.indexOf("macintosh")>-1&&"ontouchend"in document)&&(e=!0)}return e},lm._MouseDownCount_=0,lm.IsMouseDown=function(){return lm._MouseDownCount_>0},lm.FocusedInput=null,lm.Abs=function(e){return e<0?-e:e},lm.Round=function(e){return e>0?parseInt(e+.5):-parseInt(.5-e)},lm.Sgn=function(e){return e<0?-1:1},lm.Zsgn=function(e){return e<0?-1:e>0?1:0},lm.Frandom=function(){return Math.random()},lm.FrandomSgn=function(){return 2*Math.random()-1},lm.RandomInt=function(e,t){return e+lm.Floor(Math.random()*(.999+t-e))},lm.RandomFloat=function(e,t){return e+Math.random()*(t-e)},lm.RandomBool=function(e){return lm.RandomFloat(0,1)<e},lm.Floor=function(e){return e<0?parseInt(e-1):parseInt(e)},lm.Ceil=function(e){return e<0?parseInt(e):parseInt(e+1)},lm.Mod=function(e,t){return(e%t+t)%t},lm.Rad=function(e){return e*Math.PI/180},lm.Deg=function(e){return 180*e/Math.PI},lm.Min=function(e,t){return e<t?e:t},lm.Max=function(e,t){return e>t?e:t},lm.Lerp=function(e,t,o){return t+(o-t)*e},lm.Slerp=function(e,t,o){let l=3*e*e-2*e*e*e;return lm.Lerp(l,t,o)},lm.SplineInterp4=function(e,t,o,l,n){let i,s,r,a=l.y-o.y;lm.Abs(a)<lm.TINY?(r=l.Minus(o).Times(.33333333),i=o.Plus(r),s=l.Minus(r)):(a=o.y-t.y,lm.Abs(a)<lm.TINY?(r=o.Minus(t).Times(.33333333),i=o.Plus(r)):(r=l.Minus(t),r.DivEq(r.x),r.TimesEq(.333333*(l.x-o.x)),i=o.Plus(r)),a=n.y-l.y,lm.Abs(a)<lm.TINY?(r=n.Minus(l).Times(.33333333),s=l.Minus(r)):(r=n.Minus(o),r.DivEq(r.x),r.TimesEq(.333333*(l.x-o.x)),s=l.Minus(r)));let m=lm.Min(o.y,l.y),c=lm.Max(o.y,l.y);i.y=lm.Clamp(i.y,m,c),s.y=lm.Clamp(s.y,m,c),a=(e-o.x)/(l.x-o.x);let d=a*a*a*l.y;return d+=3*a*a*(1-a)*s.y,d+=3*a*(1-a)*(1-a)*i.y,d+=(1-a)*(1-a)*(1-a)*o.y,d},lm.Clamp=function(e,t,o){return e<t?t:e>o?o:e},lm.RealEqual=function(e,t,o){o=lm.Default(o,lm.TINY);let l=e-t;return lm.Abs(l)<o},lm.Default=function(e,t){return void 0!==e?e:t},lm.RgbStringToHexString=function(e){let t=e.split("(")[1].split(")")[0];t=t.split(",");let o=t.map((function(e){return 1==(e=parseInt(e).toString(16)).length?"0"+e:e}));return o="0x"+o.join(""),o},lm.RgbStringToRgbColor=function(e){let t=e.split("(")[1].split(")")[0];t=t.split(",");for(let e=0;e<t.length;e++)t[e]=parseInt(t[e]);return 3==t.length?new lm.RgbColor(t[0],t[1],t[2]):4==t.length?new lm.RgbColor(t[0],t[1],t[2],t[3]):new lm.RgbColor(0,0,0)},lm.UUID=function(){let e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){let o=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?o:7&o|8).toString(16)}))},lm.RemovePunctuation=function(e){return e.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()?]/g,"")},lm.RemoveFileExtension=function(e){return e.replace(/\.[^/.]+$/,"")},lm.IsImageValid=function(e){return e.videoWidth?!!(e.videoHeight&&e.readyState>=3):!!(e.complete&&void 0!==e.naturalWidth&&e.naturalWidth>0)},lm.Format=function(e){let t=arguments,o=new RegExp("%([1-"+arguments.length+"])","g");return String(e).replace(o,(function(e,o){return t[o]}))},lm.ShuffleArray=function(e){let t=e.length,o=3*t;for(let l=0;l<o;l++){let o=e.pop(),l=Math.floor(Math.random()*(t-1));e.splice(l,0,o)}},lm.AddLoadEvent=function(e,t){let o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){t&&e(),o&&o(),t||e()},window.onmousedown=_dismissDropdownsOnClick,"ontouchstart"in window&&(window.ontouchstart=_dismissDropdownsOnClick)},lm.ConvertObjectType=function(existingObj,typeStr){let obj=eval("new "+typeStr+"();");for(let e in existingObj)existingObj.hasOwnProperty(e)&&(obj[e]=existingObj[e]);return obj},lm.RestoreObjectTypes=function(e){let t=e;if(null==t||"object"!=typeof t)return t;t._lmType_&&(t=lm.ConvertObjectType(t,t._lmType_));for(let e in t)"rt_"!=e.slice(0,3)&&"_rt_"!=e.slice(0,4)&&t.hasOwnProperty(e)&&"object"==typeof t[e]&&(t[e]=lm.RestoreObjectTypes(t[e]));return t},lm.TagObjectTypes=function(e){let t=e;if(null==t||"object"!=typeof t)return t;t._lmType_=t.constructor.name;for(let e in t)"rt_"!=e.slice(0,3)&&"_rt_"!=e.slice(0,4)&&t.hasOwnProperty(e)&&"object"==typeof t[e]&&(t[e]=lm.TagObjectTypes(t[e]));return t},lm.Serialize=function(e){return e.PreSerialize&&e.PreSerialize(),lm.TagObjectTypes(e),JSON.stringify(e,(function(e,t){if("rt_"!=e.slice(0,3)&&"_rt_"!=e.slice(0,4))return t}))},lm.Unserialize=function(e){let t=JSON.parse(e);return t=lm.RestoreObjectTypes(t),t.PostUnserialize&&t.PostUnserialize(),t},lm.Clone=function(e){if("object"==typeof e){if(Array.isArray(e)){let t={arrayValue:e},o=lm.Serialize(t);return lm.Unserialize(o).arrayValue}if("function"==typeof e.Clone)return e.Clone();if("function"==typeof e.clone)return e.clone();{let t=lm.Serialize(e);return lm.Unserialize(t)}}return"string"==typeof e?e.slice():e},lm.LoadJSON=function(e,t){let o=new XMLHttpRequest;o.overrideMimeType("application/json"),o.open("GET",e,!0),o.onreadystatechange=function(){if(4==o.readyState&&"200"==o.status){let e=lm.Unserialize(o.responseText);t(e)}},o.send(null)};class lm_Stopwatch{constructor(){this.active=!1,this.elapsedTime=0,this.startTime=0}Synchronize(e){this.startTime=e.startTime,this.elapsedTime=e.elapsedTime}Start(){this.startTime=(new Date).getTime(),this.elapsedTime=0,this.active=!0}Stop(){this.elapsedTime=this.ElapsedTime(),this.active=!1}SetElapsedTime(e){this.elapsedTime=e,this.startTime=(new Date).getTime()-1e3*this.elapsedTime}MarkLap(){this.elapsedTime=this.ElapsedTime(),this.active=!1}ResumeLap(){this.active=!0}ElapsedTime(){if(this.active&&(this.elapsedTime=((new Date).getTime()-this.startTime)/1e3,this.loopTime)){let e=this.elapsedTime%this.loopTime;this.backAndForth?lm.Floor(this.elapsedTime/this.loopTime)%2!=0?this.elapsedTime=lm.Slerp((this.loopTime-e)/this.loopTime,0,this.loopTime):this.elapsedTime=lm.Slerp(e/this.loopTime,0,this.loopTime):this.elapsedTime=e}if(this.fps){return lm.Floor(this.elapsedTime*this.fps)/this.fps}return this.elapsedTime}SetFrameRate(e){this.fps=e}CurrentFrame(){if(this.fps){return this.ElapsedTime()*this.fps}return 0}SetLoopDuration(e,t){this.loopTime=e,t=lm.Default(t,!1),this.backAndForth=t,this.elapsedTime=this.ElapsedTime()}ElapsedLoopPercentage(){return this.loopTime?this.ElapsedTime()/this.loopTime:0}}lm.Stopwatch=lm_Stopwatch;class lm_RgbColor{constructor(e,t,o,l){if("string"==typeof e){let t=getComputedStyle(document.documentElement),o=lm.RgbStringToRgbColor(t.getPropertyValue(e));return this.r=o.r,this.g=o.g,void(this.b=o.b)}this.r=lm.Default(e,255),this.g=lm.Default(t,255),this.b=lm.Default(o,255),this.a=lm.Default(l,255)}FloatToIntegerColor(){let e=new lm.RgbColor;return e.r=lm.Clamp(lm.Round(255*this.r),0,255),e.g=lm.Clamp(lm.Round(255*this.g),0,255),e.b=lm.Clamp(lm.Round(255*this.b),0,255),e.a=lm.Clamp(lm.Round(255*this.a),0,255),e}IntegerToFloatColor(){let e=new lm.RgbColor;return e.r=lm.Clamp(this.r/255,0,1),e.g=lm.Clamp(this.g/255,0,1),e.b=lm.Clamp(this.b/255,0,1),e.a=lm.Clamp(this.a/255,0,1),e}PixiColor(){return(this.r%256<<16)+(this.g%256<<8)+this.b%256}HTMLColor(){return"rgba("+this.r+","+this.g+","+this.b+","+this.a+")"}Clone(){return new lm.RgbColor(this.r,this.g,this.b,this.a)}ToHSVColor(){let e={a:this.a};if(e.v=lm.Max(this.r,this.g),e.v=lm.Max(e.v,this.b),0==e.v)return e.s=0,e.h=0,e;let t=1/255,o=this.r*t,l=this.g*t,n=this.b*t,i=lm.Min(o,l);i=lm.Min(i,n);let s=lm.Max(o,l);s=lm.Max(s,n);let r=s-i;return r<lm.TINY?(e.h=0,e.s=0,e):(t=r/s,t*=255,e.s=lm.Clamp(lm.Round(t),0,255),t=this.r==e.v?(l-n)/r:this.g==e.v?2+(n-o)/r:4+(o-l)/r,t*=60,t<0&&(t+=360),t=255*t/360,e.h=lm.Clamp(lm.Round(t),0,255),e)}FromHSVColor(e){if(this.a=e.a,0==e.s)return void(this.r=this.g=this.b=e.v);let t=1/255,o=e.h*t;o*=360;let l=e.s*t,n=e.v*t;o/=60;let i=lm.Floor(o);t=o-i;let s,r,a,m=n*(1-l),c=n*(1-l*t),d=n*(1-l*(1-t));switch(i){case 0:s=n,r=d,a=m;break;case 1:s=c,r=n,a=m;break;case 2:s=m,r=n,a=d;break;case 3:s=m,r=c,a=n;break;case 4:s=d,r=m,a=n;break;default:s=n,r=m,a=c}s*=255,r*=255,a*=255,this.r=lm.Clamp(lm.Round(s),0,255),this.g=lm.Clamp(lm.Round(r),0,255),this.b=lm.Clamp(lm.Round(a),0,255)}}lm.RgbColor=lm_RgbColor;class lm_Animation{constructor(e,t,o){this.duration=lm.Default(e,5),this.fps=lm.Default(t,0),this.interpolation=lm.Default(o,"linear")}Run(e){this.duration<=0?e(1):(this.callbackFunction=e,this.timer=new lm.Stopwatch,this.fps>0&&(this.timer.SetFrameRate(this.fps),this.prevFrame=-1),this.timer.Start(),requestAnimationFrame(this._AnimationCallback.bind(this)))}_AnimationCallback(){let e=!1,t=this.timer.ElapsedTime()/this.duration;if(this.fps>0){let t=this.timer.CurrentFrame();t>this.prevFrame&&(e=!0,this.prevFrame=t)}else e=!0;if(e){let e=!1;t>=1&&(e=!0);let o=lm.Clamp(t,0,1);if(!e)switch(this.interpolation){case"linear":default:break;case"smooth":o=lm.Slerp(o,0,1);break;case"elastic":o=this._ElasticPercent(o,3,0,.25);break;case"bounce":o=this._BouncePercent(o,4,.3)}this.callbackFunction(o,e)}t<1&&requestAnimationFrame(this._AnimationCallback.bind(this))}_ElasticPercent(e,t,o,l){t<1&&(t=4),l<lm.TINY&&(l=1),l*=3;let n=lm.PI2*t;n=1&t?lm.PI/2+lm.PI2*(t+1)/2-lm.PI:lm.PI/2+lm.PI2*t/2,1==o&&(e=1-e);return e=Math.pow(2,-10*e)*Math.sin(e*n+1.5*lm.PI)*l+1,1==o&&(e=1-e),e}_BouncePercent(e,t,o){let l,n,i=o,s=1;if(t<1&&(t=3),i<lm.TINY&&(i=.5),n=Math.sqrt(1/t),e<=n/2)e=.5+e/(n/2)/2;else for(l=1,e=(e-n/2)/(1-n/2),s*=i;l<t;){if(e<=n){e/=n;break}e=(e-n)/(1-n),s*=i,l++}return e=2*e-1,1-(1-(e*=e))*s}}lm.Animation=lm_Animation,lm.console=null,lm.Log=function(e){lm.console?lm.console.consoleShowing?lm.console.LogMsg.apply(lm.console,arguments):console._originalLog_.apply(null,arguments):console.log.apply(null,arguments)},lm.ErrorLog=function(e){lm.console?(lm.console.consoleShowing||lm.console.browserConsoleShowing||lm.console.Show(),lm.console.LogMsgError.apply(lm.console,arguments)):console.log.apply(null,arguments)},lm.DebugLog=function(e){lm.DEBUG&&(lm.console?(lm.console.consoleShowing||lm.console.browserConsoleShowing||lm.console.Show(),lm.console.LogMsg.apply(lm.console,arguments)):console.log.apply(null,arguments))},lm.VerboseLog=function(e){lm.console?(lm.console.consoleShowing||lm.console.browserConsoleShowing||lm.console.Show(),lm.console.LogMsg.apply(lm.console,arguments)):console.log.apply(null,arguments)},lm.Error=function(e){if(lm.VerboseLog(e),lm.DEBUG){let t=e;if(arguments.length>1){t="";for(let e=0;e<arguments.length;e++)e>0&&(t+=" "),t+=arguments[e]}else 1==arguments.length&&(t=arguments[0]);throw new Error(t)}},lm.Assert=function(e,t){if(lm.DEBUG&&!e)throw lm.ErrorLog(e),new Error(t)};class lm_Console{constructor(){lm.console?lm.DebugLog("!!! Console already initialized. Don't do this twice. !!!"):(lm.console=this,this.consoleShowing=!1,this.browserConsoleShowing=!1,this.muted=!1,this.consoleDiv=null,console._originalLog_=console.log,console.log=this.LogMsg.bind(this),window.addEventListener("error",function(e){this.LogError(e)}.bind(this)))}Show(){this.consoleShowing||this.browserConsoleShowing||(this.consoleDiv=document.createElement("div"),this.consoleDiv.style.position="absolute",this.consoleDiv.style.bottom="0px",this.consoleDiv.style.left="0px",this.consoleDiv.style.fontFamily="dejavu sans mono, monospace",this.consoleDiv.style.fontSize="11px",this.consoleDiv.style.cursor="default",this.consoleDiv.style.backgroundColor="rgba(203, 203, 193, 0.5)",this.consoleDiv.style.width="100%",this.consoleDiv.style.height="200px",this.consoleDiv.style.borderTop="1px solid black",this.consoleDiv.style.overflow="scroll",this.consoleDiv.style.letterSpacing="0px",this.consoleDiv.style.zIndex="10000",document.body.appendChild(this.consoleDiv),this.consoleShowing=!0)}Hide(){this.consoleShowing&&document.body.removeChild(this.consoleDiv)}Mute(e){this.muted=e}LogMsg(e){if(this.muted)return;if(console._originalLog_.apply(null,arguments),!this.consoleShowing)return;let t=e;if(arguments.length>1){t="";for(let e=0;e<arguments.length;e++)e>0&&(t+=" "),t+=arguments[e]}else 1==arguments.length&&(t=arguments[0]);let o=this.formatValue(t);if(o){let e=document.createElement("div");e.style.verticalAlign="center",e.style.paddingLeft="10px",e.style.paddingRight="10px",e.style.marginTop="2px",e.appendChild(o),this.consoleDiv.appendChild(e),this.consoleDiv.scrollTop=this.consoleDiv.scrollHeight}}LogMsgError(e){if(this.muted)return;if(console._originalLog_.apply(null,arguments),!this.consoleShowing)return;let t=e;if(arguments.length>1){t="";for(let e=0;e<arguments.length;e++)e>0&&(t+=" "),t+=arguments[e]}else 1==arguments.length&&(t=arguments[0]);let o=this.formatValue(t);if(o){o.style.color="red";let e=document.createElement("div");e.style.verticalAlign="center",e.style.paddingLeft="10px",e.style.paddingRight="10px",e.style.marginTop="2px",e.appendChild(o),this.consoleDiv.appendChild(e),this.consoleDiv.scrollTop=this.consoleDiv.scrollHeight}}LogError(e){if(this.Show(),!this.consoleShowing)return;let t=this.formatValue(e.message);if(t){t.style.color="red";let e=document.createElement("div");e.style.verticalAlign="center",e.style.paddingLeft="10px",e.style.paddingRight="10px",e.style.marginTop="2px",e.appendChild(t),this.consoleDiv.appendChild(e),this.consoleDiv.scrollTop=this.consoleDiv.scrollHeight}if(t=this.formatValue(e.filename+":"+e.lineno),t){t.style.color="red";let e=document.createElement("div");e.style.verticalAlign="center",e.style.paddingLeft="10px",e.style.paddingRight="10px",e.style.marginTop="2px",e.appendChild(t),this.consoleDiv.appendChild(e),this.consoleDiv.scrollTop=this.consoleDiv.scrollHeight}}formatValue(e){let t=null;switch(typeof e){case"number":t=this.showNumber(e);break;case"string":t=this.showString(e);break;case"object":t=this.showObject(e);break;default:t=this.showString(typeof e)}return t&&(t.style.display="inline"),t}showNumber(e){let t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.style.color="blue",t}showString(e){let t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.style.color="black",t}showTheHTML(e){let t=document.createElement("div");if(3==e.nodeType){let t=document.createElement("span");return this.addSpan(t,e.nodeValue),t}if(t=document.createElement("div"),1==e.nodeType){this.addSpan(t,"<"),this.addSpan(t,e.tagName.toLowerCase(),"purple");for(let o=0;o<e.attributes.length;o++)this.addSpan(t," "),this.addSpan(t,e.attributes[o].nodeName,"blue"),this.addSpan(t,"='"),this.addSpan(t,e.attributes[o].nodeValue,"blue"),this.addSpan(t,"'");this.addSpan(t,">");for(let t=0;t<e.childNodes.length;t++);this.addSpan(t," .... "),this.addSpan(t,"<"),this.addSpan(t,e.tagName.toLowerCase(),"purple"),this.addSpan(t,">")}return t.style.color="black",t.style.display="inline",t.style.verticalAlign="top",t}addSpan(e,t,o){let l=document.createElement("span");l.appendChild(document.createTextNode(t)),o&&(l.style.color=o),e.appendChild(l)}showObject(e){let t=document.createElement("div");if(!e)return t;if(e&&e.nodeType)return this.showTheHTML(e);if(e.length){t.appendChild(document.createTextNode("["));for(let o=0;o<e.length;o++)t.appendChild(this.formatValue(e[o])),o<e.length-1&&t.appendChild(document.createTextNode(", "));t.appendChild(document.createTextNode("]")),t.style.color="black"}else{let o=document.createElement("div"),l=document.createElement("span");l.appendChild(document.createTextNode("▶  Object")),l.style.color="gray",o.appendChild(l),o.style.display="inline",l.style.fontSize="11px",o.theObject=e,o.expanded=!1,o.addEventListener("click",function(e){if(o.expanded){for(o.firstChild.textContent="▶  Object";o.childNodes.length>1;)o.removeChild(o.lastChild);o.expanded=!1}else{let e=this.expandObject(o.theObject);o.appendChild(e),o.firstChild.textContent="▼  Object",o.expanded=!0}e.stopPropagation()}.bind(this),!1),t.appendChild(o),t.style.display="inline-block"}return t}expandObject(e){let t=document.createElement("div");for(let o in e){let l=document.createElement("div"),n=document.createElement("span");n.appendChild(document.createTextNode(o+": ")),n.style.color="purple",l.appendChild(n),"opener"!=o&&l.appendChild(this.formatValue(e[o])),l.style.verticalAlign="top",n.style.verticalAlign="top",t.appendChild(l)}return t.style.marginLeft="14px",t}}lm.Console=lm_Console,lm.AddLoadEvent((function(){lm.console=new lm.Console,document.addEventListener("mousedown",(function(e){lm._MouseDownCount_=1}),!1),document.addEventListener("mouseup",(function(e){lm._MouseDownCount_=0}),!1),document.addEventListener("dragend",(function(e){lm._MouseDownCount_=0}),!1),document.addEventListener("touchstart",(function(e){lm._MouseDownCount_=e.targetTouches.length}),!1),document.addEventListener("touchend",(function(e){lm._MouseDownCount_=e.targetTouches.length,lm._MouseDownCount_<0&&lm.ErrorLog("Unexpected: MouseDownCount < 0")}),!1),document.addEventListener("touchcancel",(function(e){lm._MouseDownCount_=e.targetTouches.length,lm._MouseDownCount_<0&&lm.ErrorLog("Unexpected: MouseDownCount < 0")}),!1)}),!0);
//# sourceMappingURL=index.7e401c35.js.map
