(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/huiyuanchongzhi/add-or-update"],{"3f08":function(e,n,a){"use strict";(function(e){a("0c8f");r(a("66fd"));var n=r(a("9934"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},"607b":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(a("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function t(e,n,a,r,i,t,u){try{var o=e[t](u),c=o.value}catch(s){return void a(s)}o.done?n(c):Promise.resolve(c).then(r,i)}function u(e){return function(){var n=this,a=arguments;return new Promise((function(r,i){var u=e.apply(n,a);function o(e){t(u,r,i,o,c,"next",e)}function c(e){t(u,r,i,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("b3ee"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{cross:"",ruleForm:{huiyuanzhanghao:"",huiyuanxingming:"",lianxifangshi:"",zhaopian:"",huiyuandengji:"",jiage:"",chongzhiriqi:"",beizhu:"",sfsh:"",shhf:"",ispay:"",userid:""},huiyuandengjiOptions:[],huiyuandengjiIndex:0,user:{},ro:{huiyuanzhanghao:!1,huiyuanxingming:!1,lianxifangshi:!1,zhaopian:!1,huiyuandengji:!1,jiage:!1,chongzhiriqi:!1,beizhu:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return u(r.default.mark((function i(){var t,u,o,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a.ruleForm.chongzhiriqi=a.$utils.getCurDate(),t=e.getStorageSync("nowTable"),i.next=4,a.$api.session(t);case 4:return u=i.sent,a.user=u.data,a.ruleForm.huiyuanzhanghao=a.user.huiyuanzhanghao,a.ro.huiyuanzhanghao=!0,a.ruleForm.huiyuanxingming=a.user.huiyuanxingming,a.ro.huiyuanxingming=!0,a.ruleForm.lianxifangshi=a.user.lianxifangshi,a.ro.lianxifangshi=!0,i.next=14,a.$api.option("huiyuandengji","huiyuandengji",{});case 14:if(u=i.sent,a.huiyuandengjiOptions=u.data,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=24;break}return a.ruleForm.id=n.id,i.next=22,a.$api.info("huiyuanchongzhi",a.ruleForm.id);case 22:u=i.sent,a.ruleForm=u.data;case 24:if(a.cross=n.cross,!n.cross){i.next=68;break}o=e.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 28:if((i.t1=i.t0()).done){i.next=68;break}if(c=i.t1.value,"huiyuanzhanghao"!=c){i.next=34;break}return a.ruleForm.huiyuanzhanghao=o[c],a.ro.huiyuanzhanghao=!0,i.abrupt("continue",28);case 34:if("huiyuanxingming"!=c){i.next=38;break}return a.ruleForm.huiyuanxingming=o[c],a.ro.huiyuanxingming=!0,i.abrupt("continue",28);case 38:if("lianxifangshi"!=c){i.next=42;break}return a.ruleForm.lianxifangshi=o[c],a.ro.lianxifangshi=!0,i.abrupt("continue",28);case 42:if("zhaopian"!=c){i.next=46;break}return a.ruleForm.zhaopian=o[c],a.ro.zhaopian=!0,i.abrupt("continue",28);case 46:if("huiyuandengji"!=c){i.next=50;break}return a.ruleForm.huiyuandengji=o[c],a.ro.huiyuandengji=!0,i.abrupt("continue",28);case 50:if("jiage"!=c){i.next=54;break}return a.ruleForm.jiage=o[c],a.ro.jiage=!0,i.abrupt("continue",28);case 54:if("chongzhiriqi"!=c){i.next=58;break}return a.ruleForm.chongzhiriqi=o[c],a.ro.chongzhiriqi=!0,i.abrupt("continue",28);case 58:if("beizhu"!=c){i.next=62;break}return a.ruleForm.beizhu=o[c],a.ro.beizhu=!0,i.abrupt("continue",28);case 62:if("userid"!=c){i.next=66;break}return a.ruleForm.userid=o[c],a.ro.userid=!0,i.abrupt("continue",28);case 66:i.next=28;break;case 68:a.styleChange();case 69:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},huiyuandengjiChange:function(e){var n=this;return u(r.default.mark((function a(){var i;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.huiyuandengjiIndex=e.target.value,n.ruleForm.huiyuandengji=n.huiyuandengjiOptions[n.huiyuandengjiIndex],a.next=4,n.$api.follow("huiyuandengji","huiyuandengji",{columnValue:n.ruleForm.huiyuandengji});case 4:i=a.sent,i.data.jiage&&(n.ruleForm.jiage=i.data.jiage);case 6:case"end":return a.stop()}}),a)})))()},chongzhiriqiChange:function(e){this.ruleForm.chongzhiriqi=e.target.value,this.$forceUpdate()},zhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.zhaopian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function a(){var i,t,u,o,c,s,h,f,g,l;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.cross){a.next=16;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){a.next=16;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){a.next=12;break}for(h in s)h==o&&(s[h]=c);return f=e.getStorageSync("crossTable"),a.next=10,n.$api.update("".concat(f),s);case 10:a.next=16;break;case 12:i=Number(e.getStorageSync("userid")),t=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!t||!i){a.next=38;break}return n.ruleForm.crossuserid=i,n.ruleForm.crossrefid=t,g={page:1,limit:10,crossuserid:i,crossrefid:t},a.next=22,n.$api.list("huiyuanchongzhi",g);case 22:if(l=a.sent,!(l.data.total>=u)){a.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 28:if(!n.ruleForm.id){a.next=33;break}return a.next=31,n.$api.update("huiyuanchongzhi",n.ruleForm);case 31:a.next=35;break;case 33:return a.next=35,n.$api.add("huiyuanchongzhi",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:a.next=46;break;case 38:if(!n.ruleForm.id){a.next=43;break}return a.next=41,n.$api.update("huiyuanchongzhi",n.ruleForm);case 41:a.next=45;break;case 43:return a.next=45,n.$api.add("huiyuanchongzhi",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(a,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,a("543d")["default"])},7021:function(e,n,a){"use strict";a.r(n);var r=a("607b"),i=a.n(r);for(var t in r)"default"!==t&&function(e){a.d(n,e,(function(){return r[e]}))}(t);n["default"]=i.a},"8a1d":function(e,n,a){"use strict";var r;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return t})),a.d(n,"a",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},t=[]},9934:function(e,n,a){"use strict";a.r(n);var r=a("8a1d"),i=a("7021");for(var t in i)"default"!==t&&function(e){a.d(n,e,(function(){return i[e]}))}(t);a("ddfd");var u,o=a("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"b5ed04b4",null,!1,r["a"],u);n["default"]=c.exports},bf9b:function(e,n,a){},ddfd:function(e,n,a){"use strict";var r=a("bf9b"),i=a.n(r);i.a}},[["3f08","common/runtime","common/vendor"]]]);