!function(n,e){if("function"==typeof define&&define.amd)define(["exports","../rhelement/rhelement.compiled.js","../../whatwg-fetch/fetch.js"],e);else if("undefined"!=typeof exports)e(exports,require("../rhelement/rhelement.compiled.js"),require("../../whatwg-fetch/fetch.js"));else{var t={};e(t,n.rhelementCompiled,n.fetch),n.rhOnebox=t}}(this,function(n,e){"use strict";function t(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}Object.defineProperty(n,"__esModule",{value:!0});var r=function(n){return n&&n.__esModule?n:{default:n}}(e),o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),i=t(['\n      <div class="content">\n        <ul class="info_links">\n          ',"\n        </ul>\n      </div>\n    "],['\n      <div class="content">\n        <ul class="info_links">\n          ',"\n        </ul>\n      </div>\n    "]),a=t(['\n      <div class="product_links content">\n        <h4>Browse Product Knowledge</h4>\n        <ul>\n        ',"\n        </ul>\n      </div>\n    "],['\n      <div class="product_links content">\n        <h4>Browse Product Knowledge</h4>\n        <ul>\n        ',"\n        </ul>\n      </div>\n    "]),s=function(n){for(var e=arguments.length,t=Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];for(var o=[],i=0;n[i]||t[i];++i){var a=n[i],s=t[i];s instanceof Array&&(s=s.join("\n")),a&&o.push(a),s&&o.push(s)}return o.join("\n")},c=document.createElement("template"),l=function(n){function e(n,t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return r.config={arrayName:"rules",matchArrayName:"keywords"},r.loading=!1,r.successHandler=r.successHandler.bind(r),r.errorHandler=r.errorHandler.bind(r),r}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,r.default),o(e,null,[{key:"observedAttributes",get:function(){return["source","term"]}}]),o(e,[{key:"attributeChangedCallback",value:function(n,e,t){switch(n){case"source":this.source=t,this.getData(this.source);break;case"term":this.term=t}}},{key:"getData",value:function(n){var e=this;return this.htmlTemplate,this.loading=!0,fetch(n).then(function(n){return n.json()},function(n){return e.errorHandler}).then(this.successHandler).then(function(){return e.loading=!1})}},{key:"successHandler",value:function(n){this.data=n,this.render()}},{key:"errorHandler",value:function(n){console.log(n)}},{key:"findMatch",value:function(){var n=this,e=void 0;return this.data[this.config.arrayName].forEach(function(t){t[n.config.matchArrayName].forEach(function(r){r.toLowerCase()===n.term.toLowerCase().trim()&&(e=t)})}),e}},{key:"render",value:function(n){!function(n){c.innerHTML='\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        border: 1px solid #ececec;\n        background-color: #f7f7f7;\n      }\n\n      :host([expanded]) .description,\n      :host([expanded]) .product_links {\n        display: block;\n      }\n\n      .content {\n        padding: 0 16px;\n      }\n\n      .info_links {\n        display: flex;\n        flex-wrap: wrap;\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n      }\n\n      .info_links li {\n        width: 50%;\n      }\n\n      .info_links li a {\n        padding: 16px;\n      }\n\n      .description {\n        display: none;\n        order: 1;\n      }\n\n      .product_links {\n        display: none;\n        order: 2;\n      }\n\n      .expander {\n        position: relative;\n        text-align: center;\n        border-top: 1px solid #ececec;\n        padding-top: 16px;\n        padding-bottom: 16px;\n      }\n\n      :host([expanded]) .expander {\n        border-bottom: 1px solid #ececec;\n      }\n\n      #expandButton {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        width: 30px;\n        height: 30px;\n        top: -15px;\n        left: calc(50% - 15px);\n        background: white;\n        border: 1px solid #ececec;\n        border-radius: 50%;\n      }\n\n      .caret {\n        width: 0;\n        height: 0;\n        margin-bottom: -2px;\n        border-top: 5px solid #333;\n        border-left: 5px solid transparent;\n        border-right: 5px solid transparent;\n      }\n\n      :host([expanded]) .caret {\n        margin-bottom: 0;\n        border-top: none;\n        border-bottom: 5px solid #333;\n      }\n\n      @media (min-width: 768px) {\n        :host {\n          background-color: transparent;\n        }\n\n        .expander {\n          display: none;\n        }\n\n        .description,\n        .product_links {\n          display: block;\n        }\n\n        .description {\n          order: 0;\n        }\n      }\n    </style>\n    <h2 class="content">'+n.product+'</h2>\n    <p class="description content">'+n.description+"</p>\n    "+(n.links.info&&s(i,n.links.info.map(function(n){return'\n            <li>\n              <a href="'+n.link+'">\n                <div>\n                  <div class="icon"></div>\n                  '+n.text+"\n                </div>\n              </a>\n            </li>\n          "})))+'\n    <div class="expander content">\n      <button id="expandButton">\n        <span class="caret"></span>\n      </button>\n      About '+n.product+"\n    </div>\n    "+(n.links.knowledgebase&&s(a,n.links.knowledgebase.map(function(n){return'\n          <li><a href="'+n.link+'">'+n.text+"</a></li>\n        "})))+"\n  "}(this.findMatch()),window.ShadyCSS&&ShadyCSS.prepareTemplate(c,"rh-onebox"),this.shadowRoot.appendChild(c.content.cloneNode(!0)),window.ShadyCSS&&ShadyCSS.styleElement(this)}}]),e}();window.customElements.define("rh-onebox",l),n.default=l});