(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/pokeball.f10bf078.png"},27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),o=a.n(r),c=(a(32),a(5)),s=a(6),l=a(9),u=a(7),m=a(10),p=a(34),d=a(42),E=a(44),h=Object(E.a)(function(e){return i.a.createElement("nav",{className:"nav-wrapper red darjen-3"},i.a.createElement("div",{className:"container"},i.a.createElement(p.a,{to:"/",className:"brand-logo"},"Poke'Times"),i.a.createElement("ul",{className:"right"},i.a.createElement("li",null,i.a.createElement(p.a,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(d.a,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(d.a,{to:"/contact"},"Contact")))))}),b=a(43),f=a(45),v=a(37),g=a(24),N=a.n(g),y=a(8),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWilMount",value:function(e){this.setState({posts:e.posts})}},{key:"render",value:function(){var e=this.props.posts,t=e.length?e.map(function(e){return i.a.createElement("div",{className:"post card",key:e.id},i.a.createElement("img",{src:N.a,alt:"A pokeball"}),i.a.createElement("div",{className:"card-content"},i.a.createElement(p.a,{to:"/"+e.id},i.a.createElement("span",{className:"card-title red-text"},e.title)),i.a.createElement("p",null,e.body)))}):i.a.createElement("div",{className:"center"},"No posts yet");return i.a.createElement("div",{className:"container home"},i.a.createElement("h4",{className:"center"},"Home"),t)}}]),t}(n.Component),j=Object(y.b)(function(e){return{posts:e.posts}})(O),k=function(e){var t=["red","pink","orange","blue","green","yellow"][Math.floor(5*Math.random())]+"-text";return function(a){return i.a.createElement("div",{className:t},i.a.createElement(e,a))}}(function(){return i.a.createElement("div",{className:"container"},i.a.createElement("h4",{className:"center"},"About"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eos delectus reiciendis temporibus aut, molestiae dignissimos veritatis ex qui dolore nobis nihil ea incidunt quidem, iure tempore veniam deleniti nesciunt."))}),w=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("h4",{className:"center"},"Contact"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eos delectus reiciendis temporibus aut, molestiae dignissimos veritatis ex qui dolore nobis nihil ea incidunt quidem, iure tempore veniam deleniti nesciunt."))},C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(){a.props.deletePost(a.props.post.id),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.post?i.a.createElement("div",{className:"post"},i.a.createElement("h4",{className:"center"},this.props.post.title),i.a.createElement("p",null,this.props.post.body),i.a.createElement("div",{className:"center"},i.a.createElement("button",{className:"btn grey",onClick:this.handleClick},"Delete Post"))):i.a.createElement("div",{className:"center"},"Loading post...");return i.a.createElement("div",{className:"container"},e)}}]),t}(n.Component),q=Object(y.b)(function(e,t){var a=t.match.params.post_id;return{post:e.posts.find(function(e){return e.id===a})}},function(e){return{deletePost:function(t){return e(function(e){return{type:"DELETE_POST",id:e}}(t))}}})(C),L=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(b.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(h,null),i.a.createElement(f.a,null,i.a.createElement(v.a,{exact:!0,path:"/",component:j}),i.a.createElement(v.a,{path:"/about",component:k}),i.a.createElement(v.a,{path:"/contact",component:w}),i.a.createElement(v.a,{path:"/:post_id",component:q}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(13),P=a(26),A={posts:[{id:"1",title:"Squirtle Laid an Egg",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"},{id:"2",title:"Charmander Laid an Egg",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"},{id:"3",title:"a Helix Fossil was Found",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;if("DELETE_POST"===t.type){var a=e.posts.filter(function(e){return t.id!==e.id});return Object(P.a)({},e,{posts:a})}return e},S=Object(x.b)(T);o.a.render(i.a.createElement(y.a,{store:S},i.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.f19c66e3.chunk.js.map