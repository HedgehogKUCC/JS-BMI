!function(e){function t(t){for(var r,a,l=t[0],d=t[1],s=t[2],c=0,b=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&b.push(i[a][0]),i[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(p&&p(t);b.length;)b.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,l=1;l<o.length;l++){var d=o[l];0!==i[d]&&(r=!1)}r&&(n.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},i={0:0},n=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=d;n.push([313,1]),o()}({122:function(e,t,o){var r=o(123),i=o(124);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var n={insert:"head",singleton:!1},a=(r(i,n),i.locals?i.locals:{});e.exports=a},124:function(e,t,o){var r=o(125),i=o(126),n=o(88);t=r(!1);var a=i(n);t.push([e.i,'*{box-sizing:border-box}body{padding:0;margin:0;line-height:1;font-family:monospace, sans-serif}ul{margin-bottom:0}li{list-style:none}.color-ideal{color:#86D73F}.color-tooLight{color:#31BAF9}.color-tooHeavy{color:#FF982D}.color-mildObesity{color:#FF6C03}.color-moderateObesity{color:#994000}.color-severeObesity{color:#FF1200}.border-left-ideal{border-left:7px solid #86D73F;box-shadow:2px 0px 3px 0px rgba(134,215,63,0.29);height:100%}.border-left-tooLight{border-left:7px solid #31BAF9;box-shadow:2px 0px 3px 0px rgba(49,186,249,0.29);height:100%}.border-left-tooHeavy{border-left:7px solid #FF982D;box-shadow:2px 0px 3px 0px rgba(255,152,45,0.29);height:100%}.border-left-mildObesity{border-left:7px solid #FF6C03;box-shadow:2px 0px 3px 0px rgba(255,108,3,0.29);height:100%}.border-left-moderateObesity{border-left:7px solid #994000;box-shadow:2px 0px 3px 0px rgba(153,64,0,0.29);height:100%}.border-left-severeObesity{border-left:7px solid #FF1200;box-shadow:2px 0px 3px 0px rgba(255,18,0,0.29);height:100%}#app{max-width:1024px;margin:0 auto}header{width:100%;height:300px;background-color:#424242;position:relative}header img{display:block;position:absolute;top:92px;left:173px}header .form{display:flex;flex-direction:column;position:absolute;top:74px;left:387px}header label{font-size:18px;line-height:21px;margin-bottom:7px;color:#FFD366;cursor:pointer}header label[for="weight"]{margin-top:23px}header input{width:250px;height:40px;border:2px solid #FFD366;border-radius:10px;padding:8px 0 8px 16px;background-color:#424242;font-size:24px;color:#fff}header input:focus{font-size:24px;outline:none;caret-color:#FFD366;color:#fff}header .btn{position:absolute;top:92px;left:690px;display:block;width:120px;height:120px;border-radius:50%;background-color:#FFD366;color:#424242;font-size:24px;border:0;cursor:pointer}header .btn:hover{box-shadow:0 1px 6px 3px #FFC432}header .btn:active{background-color:#DEA821}header span{font-size:32px;position:absolute;top:137px;left:829px}.container{background-color:#eee;min-height:calc(100vh - 90px - 300px)}.title{padding:48px 0 28px 0;text-align:center;font-size:24px;line-height:28px;color:#424242}.list{display:flex;flex-direction:column;align-items:center;margin:0;padding:0}.list__record{width:624px;height:62px;display:flex;align-items:center;justify-content:space-between;background-color:#fff;color:#4A4A4A;margin:8px auto}.list__record:last-child{margin-bottom:16px}.list .status{font-size:20px;margin-left:12px}.list li{font-size:12px}.list li:last-child{margin-right:10px}.list li span{font-size:20px}.list li i{cursor:pointer}footer{height:90px;background-color:#FFD366;display:flex;justify-content:center;align-items:center}.btn-ideal{display:block;width:120px;height:120px;border-radius:50%;background-color:#424242;color:#86D73F;border:6px solid #86D73F}.btn-ideal .icon{background:url('+a+") center;background-repeat:no-repeat;background-color:#86D73F;border:3px solid #424242;width:30px;height:30px;position:absolute;border-radius:50%;left:70%;cursor:pointer}.btn-tooLight{display:block;width:120px;height:120px;border-radius:50%;background-color:#424242;color:#31BAF9;border:6px solid #31BAF9}.btn-tooLight .icon{background:url("+a+") center;background-repeat:no-repeat;background-color:#31BAF9;border:3px solid #424242;width:30px;height:30px;position:absolute;border-radius:50%;left:70%;cursor:pointer}.btn-tooHeavy{display:block;width:120px;height:120px;border-radius:50%;background-color:#424242;color:#FF982D;border:6px solid #FF982D}.btn-tooHeavy .icon{background:url("+a+") center;background-repeat:no-repeat;background-color:#FF982D;border:3px solid #424242;width:30px;height:30px;position:absolute;border-radius:50%;left:70%;cursor:pointer}.btn-mildObesity{display:block;width:120px;height:120px;border-radius:50%;background-color:#424242;color:#FF6C03;border:6px solid #FF6C03}.btn-mildObesity .icon{background:url("+a+") center;background-repeat:no-repeat;background-color:#FF6C03;border:3px solid #424242;width:30px;height:30px;position:absolute;border-radius:50%;left:70%;cursor:pointer}.btn-moderateObesity{display:block;width:120px;height:120px;border-radius:50%;background-color:#424242;color:#994000;border:6px solid #994000}.btn-moderateObesity .icon{background:url("+a+") center;background-repeat:no-repeat;background-color:#994000;border:3px solid #424242;width:30px;height:30px;position:absolute;border-radius:50%;left:70%;cursor:pointer}.btn-severeObesity{display:block;width:120px;height:120px;border-radius:50%;background-color:#424242;color:#FF1200;border:6px solid #FF1200}.btn-severeObesity .icon{background:url("+a+") center;background-repeat:no-repeat;background-color:#FF1200;border:3px solid #424242;width:30px;height:30px;position:absolute;border-radius:50%;left:70%;cursor:pointer}.btn-ideal,.btn-tooLight,.btn-tooHeavy,.btn-mildObesity,.btn-moderateObesity,.btn-severeObesity{position:absolute;top:92px;left:690px}.btn-ideal p,.btn-tooLight p,.btn-tooHeavy p,.btn-mildObesity p,.btn-moderateObesity p,.btn-severeObesity p{font-size:32px;margin:0}.btn-ideal p:nth-child(2),.btn-tooLight p:nth-child(2),.btn-tooHeavy p:nth-child(2),.btn-mildObesity p:nth-child(2),.btn-moderateObesity p:nth-child(2),.btn-severeObesity p:nth-child(2){font-size:14px}#result:focus{outline:none}\n",""]),e.exports=t},313:function(e,t,o){"use strict";o.r(t);o(122),o(127),o.p,o.p,o(88);var r=document.getElementById("result"),i=document.querySelector(".list"),n=document.getElementById("height"),a=document.getElementById("weight"),l=document.getElementById("bmiValue"),d=document.getElementById("bmiText"),s=document.getElementById("statusText"),p=document.getElementById("buttonIcon"),c=JSON.parse(localStorage.getItem("bmiData"))||[];function b(e){var t="";e.forEach((function(e,o){t+='\n      <div class="list__record">\n        <div class="border-left-'.concat(e.statusColor,'"></div>\n        <li class="status">').concat(e.status,"</li>\n        <li>\n          BMI\n          <span>").concat(e.bmi,"</span>\n        </li>\n        <li>\n          weight\n          <span>").concat(e.weight,"kg</span>\n        </li>\n        <li>\n          height\n          <span>").concat(e.height,"cm</span>\n        </li>\n        <li>").concat(e.time,'</li>\n        <li><i class="fas fa-times fa-2x" data-index=').concat(o,"></i></li>\n      </div>\n    ")})),i.innerHTML=t}function u(e){e.target.value||alert("尚未填入數字")}b(c),r.addEventListener("click",(function(e){if("DIV"===e.target.nodeName)return;if("btn"===e.target.className||"bmiValue"===e.target.className){var t=parseInt(n.value),o=parseInt(a.value);if(!t||!o)return alert("請填寫數字"),n.value="",void(a.value="");var i=(o/Math.pow(t/100,2)).toFixed(1),p=new Date,u=p.getFullYear(),x=p.getMonth()+1,h=p.getDate(),g="",f="";18.5>i?(g="過輕",f="tooLight"):18.5<=i&&i<=25?(g="理想",f="ideal"):25<i&&i<=30?(g="過重",f="tooHeavy"):30<i&&i<=35?(g="輕度肥胖",f="mildObesity"):35<i&&i<40?(g="中度肥胖",f="moderateObesity"):(g="重度肥胖",f="severeObesity");var m={status:g,bmi:i,height:t,weight:o,time:x+"-"+h+"-"+u,statusColor:f};c.push(m),localStorage.setItem("bmiData",JSON.stringify(c)),b(c),l.textContent=i,d.textContent="BMI",s.textContent=g,r.setAttribute("class","btn-"+"".concat(f)),s.setAttribute("class","color-"+"".concat(f)),l.removeAttribute("class"),n.value="",a.value=""}})),i.addEventListener("click",(function(e){if("I"!==e.target.nodeName)return;var t=e.target.dataset.index;c.splice(t,1),localStorage.setItem("bmiData",JSON.stringify(c)),b(c)})),n.addEventListener("blur",u),a.addEventListener("blur",u),p.addEventListener("click",(function(){r.setAttribute("class","btn"),l.textContent="看結果",d.textContent="",s.textContent="",l.setAttribute("class","bmiValue")}))},88:function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/icons_loop.png"}});