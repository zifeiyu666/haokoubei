(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{332:function(t,a,e){"use strict";e.r(a);var s={name:"exampleAxios",layout:"example",data:function(){return{data:""}},created:function(){var t=this;this.$axios({method:"post",url:"/test",data:this.$qs.stringify({a:1,b:2,c:3})}).then(function(a){t.data=a}).catch(function(a){t.$message.error(a.msg||a.message||a)})}},n=e(5),i=Object(n.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  "+this._s(this.data)+"\n")])},[],!1,null,"2143ca40",null);a.default=i.exports}}]);