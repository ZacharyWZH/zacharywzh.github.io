(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{263:function(t,e,a){},264:function(t,e,a){"use strict";var s=a(263);a.n(s).a},265:function(t,e,a){"use strict";a.r(e);a(36),a(37),a(29),a(21),a(15),a(14),a(25);var s=a(13),r=a(3),o=a(147),i=a(149),n=a(148);function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach(function(e){Object(s.a)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var u={data:function(){return{header:{showCover:!1,coverImage:null,title:null,description:null}}},components:{SiteHeader:i.a,Card:o.a,Error:n.a},methods:l({},Object(r.b)(["updateSite","updatePage","updateParams"]),{updateLayoutClass:function(){this.$el.parentNode.className="error-template"}}),computed:l({},Object(r.c)(["type","blog","posts"])),watch:{$page:function(){this.updatePage(this.$page),this.updateLayoutClass()},$route:function(){this.updateParams(this.$route.params)}},mounted:function(){this.updatePage(this.$page),this.updateSite(this.$site),this.updateParams(this.$route.params),this.updateLayoutClass()}},p=(a(264),a(0)),d=Object(p.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-wrapper"},[a("site-header",{attrs:{blog:t.blog,header:t.header}},[a("nav",{staticClass:"site-nav-center"},[a("a",{staticClass:"site-nav-logo",attrs:{href:t.blog.base}},[t.blog.logo?a("img",{staticClass:"site-logo",attrs:{src:t.blog.logo,alt:t.blog.title}}):a("span",[t._v(t._s(t.blog.title))])])])]),t._v(" "),a("main",{staticClass:"site-main outer",attrs:{id:"site-main"}},[a("div",{staticClass:"inner"},[a("error",{attrs:{description:"Page not found",code:"404",link:t.blog.base}})],1)]),t._v(" "),t.posts.length>0?a("aside",{staticClass:"outer"},[a("div",{staticClass:"inner"},[a("div",{staticClass:"post-feed"},t._l(t.posts.slice(0,3),function(t,e){return a("card",{key:e,attrs:{post:t}})}),1)])]):t._e()],1)},[],!1,null,null,null);e.default=d.exports}}]);