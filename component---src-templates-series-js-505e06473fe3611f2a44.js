"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[578],{8678:function(e,t,a){var n=a(7294),l=a(1883);t.Z=e=>{let{location:t,title:a,children:r,series:c}=e;const i="/"===t.pathname;let m;return m=i?n.createElement("h1",{className:"main-heading"},n.createElement(l.Link,{to:"/"},a)):n.createElement(l.Link,{className:"header-link-home",to:"/"},a),n.createElement("div",{className:"global-wrapper","data-is-root-path":i},n.createElement("header",{className:"global-header"},m),n.createElement("main",null,r),c&&n.createElement("footer",null,"Part of the ",n.createElement(l.Link,{to:"/series/"+c},c)," series."),n.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,a){var n=a(7294),l=a(1883);t.Z=e=>{var t,a,r;let{description:c,title:i,children:m}=e;const{site:o}=(0,l.useStaticQuery)("2841359383"),s=c||o.siteMetadata.description,u=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,u?i+" | "+u:i),n.createElement("meta",{name:"description",content:s}),n.createElement("meta",{property:"og:title",content:i}),n.createElement("meta",{property:"og:description",content:s}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=o.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""}),n.createElement("meta",{name:"twitter:title",content:i}),n.createElement("meta",{name:"twitter:description",content:s}),m)}},7101:function(e,t,a){a.r(t);var n=a(7294),l=(a(1883),a(8678)),r=a(9357);t.default=e=>{let{pageContext:t}=e;const{series:a,posts:c}=t;return n.createElement(l.Z,null,n.createElement(r.Z,{title:a}),n.createElement("h1",null,a),n.createElement("ul",null,c.map((e=>n.createElement("li",{key:e.fields.slug},n.createElement("a",{href:e.fields.slug},e.frontmatter.title))))))}}}]);
//# sourceMappingURL=component---src-templates-series-js-505e06473fe3611f2a44.js.map