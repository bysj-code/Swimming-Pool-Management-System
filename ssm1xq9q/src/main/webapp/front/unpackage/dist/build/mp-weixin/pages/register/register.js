(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0c27":function(e,n,t){"use strict";var u;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return u}));var r=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"1d0c":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,u,r,i,a){try{var c=e[i](a),o=c.value}catch(s){return void t(s)}c.done?n(o):Promise.resolve(o).then(u,r)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(u,r){var a=e.apply(n,t);function c(e){i(a,u,r,c,o,"next",e)}function o(e){i(a,u,r,c,o,"throw",e)}c(void 0)}))}}var c={data:function(){return{huiyuanxingbieOptions:[],huiyuanxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var n=this;return a(u.default.mark((function t(){var r;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],r=e.getStorageSync("loginTable"),n.tableName=r,"huiyuan"==n.tableName&&(n.huiyuanxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.huiyuanxingbieOptions[0]),n.styleChange();case 5:case"end":return t.stop()}}),t)})))()},methods:{huiyuanxingbieChange:function(e){this.huiyuanxingbieIndex=e.target.value,this.ruleForm.xingbie=this.huiyuanxingbieOptions[this.huiyuanxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return a(u.default.mark((function n(){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.huiyuanzhanghao||"huiyuan"!=e.tableName){n.next=3;break}return e.$utils.msg("会员账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"huiyuan"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if("huiyuan"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=9;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 9:if(e.ruleForm.huiyuanxingming||"huiyuan"!=e.tableName){n.next=12;break}return e.$utils.msg("会员姓名不能为空"),n.abrupt("return");case 12:if("huiyuan"!=e.tableName||!e.ruleForm.lianxifangshi||e.$validate.isMobile(e.ruleForm.lianxifangshi)){n.next=15;break}return e.$utils.msg("联系方式应输入手机格式"),n.abrupt("return");case 15:return n.next=17,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 17:e.$utils.msgBack("注册成功");case 19:case"end":return n.stop()}}),n)})))()}}};n.default=c}).call(this,t("543d")["default"])},3191:function(e,n,t){},"436c":function(e,n,t){"use strict";t.r(n);var u=t("1d0c"),r=t.n(u);for(var i in u)"default"!==i&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=r.a},8329:function(e,n,t){},"8b41":function(e,n,t){"use strict";(function(e){t("0c8f");u(t("66fd"));var n=u(t("9632"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},9632:function(e,n,t){"use strict";t.r(n);var u=t("0c27"),r=t("436c");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("dedf"),t("b8cf");var a,c=t("f0c5"),o=Object(c["a"])(r["default"],u["b"],u["c"],!1,null,"fe239388",null,!1,u["a"],a);n["default"]=o.exports},b8cf:function(e,n,t){"use strict";var u=t("8329"),r=t.n(u);r.a},dedf:function(e,n,t){"use strict";var u=t("3191"),r=t.n(u);r.a}},[["8b41","common/runtime","common/vendor"]]]);