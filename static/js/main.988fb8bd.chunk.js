(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),i=(a(15),a(1)),o=a(2),s=a(4),u=a(3),m=a(5),d=(a(17),a(19),a(6)),p=a.n(d),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleScroll=function(e){var t=window.scrollY;window.innerWidth<=720&&(t>=56&&a.setState({transition:!0}),t<=55&&a.setState({transition:!1}))},a.scrollTo=function(e){var t=e.target.id;"home"===t?window.scroll(0,0):"about"===t?window.scroll(0,850):"products"===t?window.scroll(0,2160):"contact"===t&&window.scroll(0,4e3)},a.state={transition:!1,transitionBack:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnMount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t=this.state.transition;return l.a.createElement("div",{className:p()("navbar",t?"navbar--transition":null),onScroll:this.handleScroll},l.a.createElement("div",{className:"navbar-container"},l.a.createElement("div",{className:"navbar__logo"}," Knives "),l.a.createElement("div",{className:"navbar__buttons"},l.a.createElement("span",{id:"home",className:"navbar__button",onClick:function(t){return e.scrollTo(t)}},"Home"),l.a.createElement("span",{id:"about",className:"navbar__button",onClick:function(t){return e.scrollTo(t)}},"About"),l.a.createElement("span",{id:"products",className:"navbar__button",onClick:function(t){return e.scrollTo(t)}},"Products"),l.a.createElement("span",{id:"contact",className:"navbar__button",onClick:function(t){return e.scrollTo(t)}},"Contact"))))}}]),t}(n.Component),E=(a(21),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleScroll=function(e){var t=window.scrollY;window.innerWidth<=720&&(t>=56&&a.setState({transition:!0}),t<=55&&a.setState({transition:!1}))},a.state={transition:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnMount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.transition;return l.a.createElement("div",{className:p()("logo",e?"logo--transitioned":null),onScroll:this.handleScroll},l.a.createElement("div",{className:"logo-container"}," Knives "))}}]),t}(n.Component)),h=(a(23),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"home",ref:function(t){return e.containerLine=t}},l.a.createElement("div",{className:"home-container"},l.a.createElement("span",{className:"home__text"}," Check what's new ! "),l.a.createElement("span",{className:"home__button"}," SHOP NOW ")))}}]),t}(n.Component)),_=(a(25),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleScroll=function(e){var t=window.scrollY;t>=156&&a.setState({transition:!0}),t<=155&&a.setState({transition:!1})},a.state={transition:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnMount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t=this.state.transition;return l.a.createElement("div",{className:"about",ref:function(t){return e.containerLine=t}},l.a.createElement("div",{className:"about-container"},l.a.createElement("section",{className:"about__text"},l.a.createElement("div",{className:p()("text-container",t?"text-container--transitioned":null),onScroll:this.handleScroll},l.a.createElement("h1",{className:"text__header"}," Knives are our passion"),l.a.createElement("h2",{className:"text__header--small"}," We make something special ")),l.a.createElement("div",{className:p()("text-container--box",t?"box--transitioned":null)},l.a.createElement("p",{id:"p1",className:p()("text__paragraph")},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum vulputate eleifend. Sed condimentum ligula libero, nec hendrerit dui mollis at. Proin laoreet elementum condimentum. Etiam iaculis ornare metus, eu lobortis tortor. Nullam vitae massa vitae nunc aliquam commodo. Phasellus nulla ipsum, molestie consectetur enim vitae, molestie vehicula ex. Suspendisse vestibulum sagittis ipsum, vel fermentum est auctor in. Phasellus pharetra viverra dolor at lobortis."),l.a.createElement("p",{id:"p2",className:p()("text__paragraph")},"Nulla efficitur orci hendrerit auctor lobortis. Donec quis ipsum ex. In nec tempus lacus. Praesent nisl nibh, scelerisque sit amet aliquet et, tristique id est. Nam vel porta elit, a luctus orci. Maecenas at tristique lorem. Phasellus ultricies id nulla et placerat. Aenean id scelerisque metus, eu imperdiet augue. Mauris finibus turpis risus, at fermentum nibh bibendum et."),l.a.createElement("p",{id:"p3",className:p()("text__paragraph")},"Quisque dapibus ante accumsan purus vulputate, ut condimentum odio facilisis. Quisque ultrices eleifend sem vitae pulvinar. Etiam neque erat, ornare efficitur dolor sit amet, hendrerit vulputate quam. Fusce quis quam ut purus consectetur ullamcorper eu quis orci."))),l.a.createElement("section",{className:"about__image"},l.a.createElement("div",{className:p()("image__picture",t?"image__picture--transitioned":null)}))))}}]),t}(n.Component)),b=(a(27),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"banner"},l.a.createElement("div",{className:"banner-container"},l.a.createElement("span",{className:"banner__text"}," This is awesome ! ")))}}]),t}(n.Component)),f=(a(29),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"products",ref:function(t){return e.containerLine=t}},l.a.createElement("div",{className:"products-container"},l.a.createElement("div",{className:"products__box"},l.a.createElement("div",{className:"products__product"},l.a.createElement("div",{className:"product__photo"},l.a.createElement("div",{className:"product__price"},l.a.createElement("p",null,"7.90",l.a.createElement("span",null,"$")))),l.a.createElement("div",{className:"product__title"},l.a.createElement("h3",null,"Lorem ipsum")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto!")),l.a.createElement("div",{className:"products__product"},l.a.createElement("div",{className:"product__photo"},l.a.createElement("div",{className:"product__price"},l.a.createElement("p",null,"7.90",l.a.createElement("span",null,"$")))),l.a.createElement("div",{className:"product__title"},l.a.createElement("h3",null,"Lorem ipsum")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto!")),l.a.createElement("div",{className:"products__product"},l.a.createElement("div",{className:"product__photo"},l.a.createElement("div",{className:"product__price"},l.a.createElement("p",null,"7.90",l.a.createElement("span",null,"$")))),l.a.createElement("div",{className:"product__title"},l.a.createElement("h3",null,"Lorem ipsum")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto!"))),l.a.createElement("div",{className:"products__box"},l.a.createElement("div",{className:"products__product"},l.a.createElement("div",{className:"product__photo"},l.a.createElement("div",{className:"product__price"},l.a.createElement("p",null,"7.90",l.a.createElement("span",null,"$")))),l.a.createElement("div",{className:"product__title"},l.a.createElement("h3",null,"Lorem ipsum")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto!")),l.a.createElement("div",{className:"products__product"},l.a.createElement("div",{className:"product__photo"},l.a.createElement("div",{className:"product__price"},l.a.createElement("p",null,"7.90",l.a.createElement("span",null,"$")))),l.a.createElement("div",{className:"product__title"},l.a.createElement("h3",null,"Lorem ipsum")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto!")),l.a.createElement("div",{className:"products__product"},l.a.createElement("div",{className:"product__photo"},l.a.createElement("div",{className:"product__price"},l.a.createElement("p",null,"7.90",l.a.createElement("span",null,"$")))),l.a.createElement("div",{className:"product__title"},l.a.createElement("h3",null,"Lorem ipsum")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, iusto!")))))}}]),t}(n.Component)),N=(a(31),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-container"},l.a.createElement("div",{className:"footer__col"},l.a.createElement("p",null," Phone number "),l.a.createElement("p",null," 537 184 441 ")),l.a.createElement("div",{className:"footer__col"},l.a.createElement("p",null," Address "),l.a.createElement("p",null," 50-501 Wroc\u0142aw ")),l.a.createElement("div",{className:"footer__col--logo"},l.a.createElement("p",null," Knives ")),l.a.createElement("div",{className:"footer__col"},l.a.createElement("p",null," 2019 Piotr Komorowski "))))}}]),t}(n.Component)),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(v,null),l.a.createElement(h,null),l.a.createElement(_,null),l.a.createElement(b,null),l.a.createElement(f,null),l.a.createElement(N,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.988fb8bd.chunk.js.map