(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goumaixinxi/add-or-update"],{"0ad3":function(e,n,a){"use strict";var r=a("5da9"),i=a.n(r);i.a},"20b3":function(e,n,a){"use strict";var r;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return t})),a.d(n,"a",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},t=[]},"3ba3":function(e,n,a){"use strict";a.r(n);var r=a("20b3"),i=a("43cf");for(var t in i)"default"!==t&&function(e){a.d(n,e,(function(){return i[e]}))}(t);a("0ad3");var u,o=a("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"e9072b6a",null,!1,r["a"],u);n["default"]=s.exports},"408c":function(e,n,a){"use strict";(function(e){a("0c8f");r(a("66fd"));var n=r(a("3ba3"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},"43cf":function(e,n,a){"use strict";a.r(n);var r=a("891d"),i=a.n(r);for(var t in r)"default"!==t&&function(e){a.d(n,e,(function(){return r[e]}))}(t);n["default"]=i.a},"5da9":function(e,n,a){},"891d":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(a("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function t(e,n,a,r,i,t,u){try{var o=e[t](u),s=o.value}catch(c){return void a(c)}o.done?n(s):Promise.resolve(s).then(r,i)}function u(e){return function(){var n=this,a=arguments;return new Promise((function(r,i){var u=e.apply(n,a);function o(e){t(u,r,i,o,s,"next",e)}function s(e){t(u,r,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("b3ee"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{goumaibianhao:this.getUUID(),yinshibianhao:"",yinshimingcheng:"",yinshileixing:"",yinshitupian:"",jiage:"",shuliang:"",zongjia:"",goumaishijian:"",huiyuanzhanghao:"",huiyuanxingming:"",beizhu:"",sfsh:"",shhf:"",ispay:"",userid:""},user:{},ro:{goumaibianhao:!1,yinshibianhao:!1,yinshimingcheng:!1,yinshileixing:!1,yinshitupian:!1,jiage:!1,shuliang:!1,zongjia:!1,goumaishijian:!1,huiyuanzhanghao:!1,huiyuanxingming:!1,beizhu:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url},zongjia:{get:function(){return 1*this.ruleForm.jiage*this.ruleForm.shuliang}}},onLoad:function(n){var a=this;return u(r.default.mark((function i(){var t,u,o,s;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a.ruleForm.goumaishijian=a.$utils.getCurDate(),t=e.getStorageSync("nowTable"),i.next=4,a.$api.session(t);case 4:if(u=i.sent,a.user=u.data,a.ruleForm.huiyuanzhanghao=a.user.huiyuanzhanghao,a.ro.huiyuanzhanghao=!0,a.ruleForm.huiyuanxingming=a.user.huiyuanxingming,a.ro.huiyuanxingming=!0,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=18;break}return a.ruleForm.id=n.id,i.next=16,a.$api.info("goumaixinxi",a.ruleForm.id);case 16:u=i.sent,a.ruleForm=u.data;case 18:if(a.cross=n.cross,!n.cross){i.next=80;break}o=e.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 22:if((i.t1=i.t0()).done){i.next=78;break}if(s=i.t1.value,"goumaibianhao"!=s){i.next=28;break}return a.ruleForm.goumaibianhao=o[s],a.ro.goumaibianhao=!0,i.abrupt("continue",22);case 28:if("yinshibianhao"!=s){i.next=32;break}return a.ruleForm.yinshibianhao=o[s],a.ro.yinshibianhao=!0,i.abrupt("continue",22);case 32:if("yinshimingcheng"!=s){i.next=36;break}return a.ruleForm.yinshimingcheng=o[s],a.ro.yinshimingcheng=!0,i.abrupt("continue",22);case 36:if("yinshileixing"!=s){i.next=40;break}return a.ruleForm.yinshileixing=o[s],a.ro.yinshileixing=!0,i.abrupt("continue",22);case 40:if("yinshitupian"!=s){i.next=44;break}return a.ruleForm.yinshitupian=o[s],a.ro.yinshitupian=!0,i.abrupt("continue",22);case 44:if("jiage"!=s){i.next=48;break}return a.ruleForm.jiage=o[s],a.ro.jiage=!0,i.abrupt("continue",22);case 48:if("shuliang"!=s){i.next=52;break}return a.ruleForm.shuliang=o[s],a.ro.shuliang=!0,i.abrupt("continue",22);case 52:if("zongjia"!=s){i.next=56;break}return a.ruleForm.zongjia=o[s],a.ro.zongjia=!0,i.abrupt("continue",22);case 56:if("goumaishijian"!=s){i.next=60;break}return a.ruleForm.goumaishijian=o[s],a.ro.goumaishijian=!0,i.abrupt("continue",22);case 60:if("huiyuanzhanghao"!=s){i.next=64;break}return a.ruleForm.huiyuanzhanghao=o[s],a.ro.huiyuanzhanghao=!0,i.abrupt("continue",22);case 64:if("huiyuanxingming"!=s){i.next=68;break}return a.ruleForm.huiyuanxingming=o[s],a.ro.huiyuanxingming=!0,i.abrupt("continue",22);case 68:if("beizhu"!=s){i.next=72;break}return a.ruleForm.beizhu=o[s],a.ro.beizhu=!0,i.abrupt("continue",22);case 72:if("userid"!=s){i.next=76;break}return a.ruleForm.userid=o[s],a.ro.userid=!0,i.abrupt("continue",22);case 76:i.next=22;break;case 78:a.ruleForm.shuliang=0,a.ro.shuliang=!1;case 80:a.styleChange();case 81:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},goumaishijianChange:function(e){this.ruleForm.goumaishijian=e.target.value,this.$forceUpdate()},yinshitupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.yinshitupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function a(){var i,t,u,o,s,c,g,l,h,m;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.ruleForm.zongjia=n.zongjia,i=e.getStorageSync("crossObj"),t=e.getStorageSync("crossTable"),i.shuliang=i.shuliang-n.ruleForm.shuliang,!(i.shuliang<0)){a.next=7;break}return n.$utils.msg("数量数量不足"),a.abrupt("return");case 7:if(!n.ruleForm.jiage||n.$validate.isNumber(n.ruleForm.jiage)){a.next=10;break}return n.$utils.msg("价格应输入数字"),a.abrupt("return");case 10:if(!n.ruleForm.shuliang||n.$validate.isIntNumer(n.ruleForm.shuliang)){a.next=13;break}return n.$utils.msg("数量应输入整数"),a.abrupt("return");case 13:if(!n.ruleForm.zongjia||n.$validate.isNumber(n.ruleForm.zongjia)){a.next=16;break}return n.$utils.msg("总价应输入数字"),a.abrupt("return");case 16:if(!n.cross){a.next=32;break}if(c=e.getStorageSync("statusColumnName"),g=e.getStorageSync("statusColumnValue"),""==c){a.next=32;break}if(i=e.getStorageSync("crossObj"),c.startsWith("[")){a.next=28;break}for(l in i)l==c&&(i[l]=g);return t=e.getStorageSync("crossTable"),a.next=26,n.$api.update("".concat(t),i);case 26:a.next=32;break;case 28:u=Number(e.getStorageSync("userid")),o=i["id"],s=e.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 32:if(!o||!u){a.next=59;break}return n.ruleForm.crossuserid=u,n.ruleForm.crossrefid=o,h={page:1,limit:10,crossuserid:u,crossrefid:o},a.next=38,n.$api.list("goumaixinxi",h);case 38:if(m=a.sent,!(m.data.total>=s)){a.next=44;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 44:return i=e.getStorageSync("crossObj"),t=e.getStorageSync("crossTable"),i.shuliang=parseFloat(i.shuliang)-parseFloat(n.ruleForm.shuliang),a.next=49,n.$api.update("".concat(t),i);case 49:if(!n.ruleForm.id){a.next=54;break}return a.next=52,n.$api.update("goumaixinxi",n.ruleForm);case 52:a.next=56;break;case 54:return a.next=56,n.$api.add("goumaixinxi",n.ruleForm);case 56:n.$utils.msgBack("提交成功");case 57:a.next=72;break;case 59:return i=e.getStorageSync("crossObj"),t=e.getStorageSync("crossTable"),i.shuliang=i.shuliang-n.ruleForm.shuliang,a.next=64,n.$api.update("".concat(t),i);case 64:if(!n.ruleForm.id){a.next=69;break}return a.next=67,n.$api.update("goumaixinxi",n.ruleForm);case 67:a.next=71;break;case 69:return a.next=71,n.$api.add("goumaixinxi",n.ruleForm);case 71:n.$utils.msgBack("提交成功");case 72:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(a,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,a("543d")["default"])}},[["408c","common/runtime","common/vendor"]]]);