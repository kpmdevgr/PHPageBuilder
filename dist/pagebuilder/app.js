!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([,,,,,,function(t,e,n){t.exports=n(7)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),o=(n.n(i),n(9)),a=(n.n(o),n(10)),r=(n.n(a),n(11)),s=(n.n(r),n(12)),l=(n.n(s),n(13)),c=(n.n(l),n(14));n.n(c)},function(t,e){$(document).ready(function(){function t(){$(window).width()<1e3&&($("#gjs").addClass("sidebar-collapsed"),e())}function e(){window.editor.trigger("change:canvasOffset canvasScroll")}$(".gjs-editor").append($("#toggle-sidebar")),$(".gjs-pn-panels").prepend($("#sidebar-header")),$(".gjs-pn-panels").append($("#sidebar-bottom-buttons")),$("#toggle-sidebar").click(function(){$("#gjs").toggleClass("sidebar-collapsed"),e()}),t(),window.editor.on("run:open-sm",function(t){$(".gjs-trt-traits").parent().parent().css("display","none"),$(".gjs-sm-sectors").parent().parent().css("display","block"),$("#gjs-sm-advanced .gjs-sm-properties").append($(".gjs-clm-tags"))}),window.editor.on("run:open-tm",function(t){$(".gjs-sm-sectors").parent().parent().css("display","none"),$(".gjs-trt-traits").parent().parent().css("display","block")}),window.editor.on("block:drag:start",function(e){t()}),window.editor.on("rteToolbarPosUpdate",function(t){window.editor&&window.editor.getSelected()&&(window.editor.getSelected().getEl()&&setTimeout(function(){var e=$(".gjs-rte-toolbar").first();if(e.offset().top<t.elementTop+.5*t.elementHeight){var n=t.elementTop-e.height();n>0&&e.css("top",n+"px")}},0))});var n=!1;$(document).keydown(function(t){8===t.which&&(n=!0)}).keyup(function(t){8===t.which&&(n=!1)}),$(window).on("beforeunload",function(t){n&&t.preventDefault()})}),window.addEventListener("message",function(t){"page-loaded"===t.data?($("#phpb-loading").addClass("loaded"),$(".gjs-blocks-cs").prepend($("#block-search")),window.isLoaded=!0,$(window).trigger("pagebuilder-page-loaded")):"touch-start"===t.data&&window.touchStart()},!1)},function(t,e){$(document).on("input","#block-search input",function(){var t=$(this).val().toLowerCase();$(".gjs-block-category").each(function(){var e=!1;$(this).find(".gjs-block").each(function(){$(this).data("original-html")||$(this).data("original-html",$(this).html());var n=$(this).text();if(n.toLowerCase().includes(t)){$(this).removeClass("d-none"),e=!0;var i=new RegExp("("+t+")","gi"),o=n.replace(i,"<b>$1</b>");$(this).find(".gjs-block-label").html($(this).data("original-html").replace(n.trim(),o))}else $(this).addClass("d-none")}),$(this).removeClass("d-none"),e||$(this).addClass("d-none")})})},function(t,e){!function(){window.customBuilderScripts={},window.editor.on("component:create",function(t){if(t.components().length){var e=t.components().models[t.components().length-1];if("script"===e.attributes.type){var n=t.attributes.attributes["block-id"];void 0===n&&(n=t.attributes.attributes.id);for(var i=e,o=!1;i.parent();)if((i=i.parent()).attributes.attributes["phpb-content-container"]){o=!0;break}o&&(window.customBuilderScripts[n]=e.toHTML(),e.remove())}}}),window.editor.on("component:add",function(t){if(void 0!==t.attributes["run-builder-script"]){var e=customBuilderScripts;window.customBuilderScripts[t.attributes["block-id"]]=customBuilderScripts[t.attributes["run-builder-script"]],runScriptsOfComponentAndChildren(t),window.customBuilderScripts=e,delete t.attributes["run-builder-script"]}}),window.editor.on("sorter:drag:end",function(t){var e=t.modelToDrop;for(var n in e&&e.attributes&&(e.attributes["block-id"]||e.attributes.id)&&window.runScriptsOfComponentAndChildren(e),CKEDITOR.instances)CKEDITOR.instances[n].destroy(!0)}),window.runScriptsOfComponentAndChildren=function(t){!function(t){var e=t.attributes["block-id"];void 0===e&&(e=t.attributes.attributes.id);if(e&&void 0!==window.customBuilderScripts[e]){var n=t.attributes["style-identifier"],i=$("<container>").append(window.customBuilderScripts[e]);i.find("script").prepend("let inPageBuilder = true;"),i.find("script").prepend('let blockSelector = ".'+n+'";'),i.find("script").prepend('let block = document.getElementsByClassName("'+n+'")[0];'),i.find("script").prepend("(function(){"),i.find("script").append("})();");var o=document.createElement("script");o.type="text/javascript",o.innerHTML=i.find("script").html(),window.editor.Canvas.getDocument().body.appendChild(o)}}(t),t.components().each(function(t){runScriptsOfComponentAndChildren(t)})}}()},function(t,e){!function(){function t(){!function(){for(var t in window.themeBlocks){var e=window.themeBlocks[t],n=$("<container>").append(e.content);n.find("[phpb-blocks-container]").each(function(){""!==$(this).html()&&""===$(this).html().trim()&&$(this).html("")}),window.themeBlocks[t].content=n.html(),e.content=n.html(),editor.BlockManager.add(t,e)}}();var t=document.createElement("script");t.type="text/javascript",t.src=window.injectionScriptUrl;var n=t.outerHTML+"<script>"+e.toString()+e.name+"()<\/script>";window.initialComponents=window.initialComponents.replace("</body>",n+"</body>"),$.each(window.languages,function(t,e){null===window.pageBlocks[t]&&(window.pageBlocks[t]={})}),activateLanguage(window.currentLanguage)}function e(){for(var t=document.querySelectorAll("script"),e=0;e<t.length;e++){var n=t[e];if(n.innerHTML.startsWith("var script")){var i=n.innerHTML.split("=")[0],o=parseInt(i.replace("var script",""));if(Number.isInteger(o)){var a="script"+o+"Start";if("function"==typeof window[a])return 0!==o&&window[a](),!1}}}}function n(t){var e=t;if("phpb-block"===t.get("tagName")){var i=t.attributes.attributes.id;void 0!==window.pageBlocks[window.currentLanguage][i]&&void 0!==window.pageBlocks[window.currentLanguage][i].html&&(e=t.replaceWith(window.pageBlocks[window.currentLanguage][i].html),window.pageBlocks[window.currentLanguage][i].html="")}e.get("components").each(function(t){return n(t)})}function i(t){var e=!1,n=t.getEl();if(n&&n.style){var i=window.getComputedStyle(n);["background","background-image","background-color"].forEach(function(t){var n=i.getPropertyValue(t);void 0===n||""===n||n.includes("none")||n.includes("rgba(0, 0, 0, 0)")||(e=!0)})}return e}function o(t){return t.attributes.traits.length>0}function a(t){if("phpb-block"===t.attributes.tagName){var e=t.parent(),n=cloneComponent(t),i=void 0;"false"===t.attributes.attributes["is-html"]?e.components().each(function(e){if(e.cid===t.cid){var o="wrapper"in t.attributes.attributes?t.attributes.attributes.wrapper:"div";(i=t.replaceWith({tagName:o})).attributes["is-style-wrapper"]=!0,n.components().each(function(t){i.append(cloneComponent(t))})}}):e.components().each(function(e){if(e.cid===t.cid)if(1===n.components().length){var o=cloneComponent(n.components().models[0]);i=t.replaceWith(o)}else(i=t.replaceWith({tagName:"div"})).attributes["is-style-wrapper"]=!0,n.components().each(function(t){i.append(cloneComponent(t))})}),t.remove(),l(n,i,!0,!1),function(t){if(void 0===window.blockSettings[t.attributes["block-slug"]])return;t.attributes.settings={};var e=function(t){var e=[],n=t,i=!1;for(;n.parent()&&void 0===n.parent().attributes.attributes["phpb-blocks-container"]&&"true"!==n.parent().attributes["is-html"]&&void 0===n.parent().attributes.attributes["phpb-content-container"];)"false"===n.parent().attributes["is-html"]&&(i=!0),void 0!==n.attributes["block-id"]&&e.push(n.attributes["block-id"]),n=n.parent();var o=t.attributes["block-id"];i?o=n.attributes["block-id"]:e=[];var a=window.pageBlocks[window.currentLanguage][o];e.reverse().forEach(function(t){a=void 0===a||void 0===a.blocks||void 0===a.blocks[t]?{}:a.blocks[t]});var r={};void 0!==a&&void 0!==a.settings&&void 0!==a.settings.attributes&&(r=a.settings.attributes);return r}(t);void 0!==e["style-identifier"]&&t.addClass(e["style-identifier"]);t.attributes["is-updating"]=!0,window.blockSettings[t.attributes["block-slug"]].forEach(function(n){var i=t.addTrait(n);void 0!==e[n.name]?i.setTargetValue(e[n.name]):void 0!==n["default-value"]&&i.setTargetValue(n["default-value"])}),t.attributes["is-updating"]=!1}(i),a(i)}else t.components().each(function(t){a(t)})}function r(t,e){if(0===e.length)return t;var n=null;return t.components().each(function(t){if(t.attributes["block-id"]===e[0])return n=r(t,e.slice(1)),!1}),t.components().each(function(t){var i=r(t,e);if(null!==i)return n=i,!1}),n}$("#language-selector select").on("change",function(){var t=$(this).find("option:selected").val();window.switchLanguage(t,function(){activateLanguage(t)})}),window.activateLanguage=function(t){window.currentLanguage=t,window.editor.select(),window.editor.DomComponents.clear(),window.editor.DomComponents.componentsById=[],window.editor.UndoManager.clear(),window.editor.Canvas.getDocument().querySelectorAll("script").forEach(function(t){t.remove()}),window.editor.setComponents(window.initialComponents),function t(e){if("phpb-content-container"in e.attributes.attributes)return;u(e);e.get("components").each(function(e){return t(e)})}(editor.getWrapper()),window.editor.getWrapper().find("[phpb-content-container]").forEach(function(t,e){t.set("custom-name",window.translations["page-content"]),t.components(window.contentContainerComponents[e]),n(t),a(t)})},$(window).on("pagebuilder-page-loaded",function(t){window.editor.getWrapper().find("[phpb-content-container]").forEach(function(t){c(t),window.runScriptsOfComponentAndChildren(t)}),window.setWaiting(!1),setTimeout(function(){window.changesOffset=window.editor.getModel().get("changesCount"),window.afterInitialRendering=!0},250)}),window.editor.on("component:selected",function(t){o(t)?$(".gjs-pn-buttons .gjs-pn-btn:nth-of-type(2)").click():""===t.get("type")&&i(t)&&($(".gjs-pn-buttons .gjs-pn-btn:nth-of-type(3)").click(),$("#gjs-sm-position").hasClass("gjs-sm-open")&&$("#gjs-sm-position").find(".gjs-sm-title").click(),$("#gjs-sm-background").hasClass("gjs-sm-open")||$("#gjs-sm-background").find(".gjs-sm-title").click()),o(t)||setTimeout(function(){$(".gjs-trt-traits").html('<p class="no-settings">'+window.translations["trait-manager"]["no-settings"]+"</p>")},0),setTimeout(function(){t.attributes.removable||$(".gjs-toolbar .fa-trash-o.gjs-toolbar-item").hide(),t.attributes.copyable||$(".gjs-toolbar .fa-clone.gjs-toolbar-item").hide(),t.attributes.draggable||$(".gjs-toolbar .fa-arrows.gjs-toolbar-item").hide(),t.attributes.removable||t.attributes.copyable||t.attributes.draggable||window.editor.select(t.parent());var e=t.attributes["block-slug"];if(e&&window.themeBlocks[e]){var n=window.themeBlocks[e].label.split("</div>");n.length>1&&$(".gjs-toolbar").attr("title","Bloknaam: "+n[1])}},0)}),window.editor.on("component:clone",function(t){if(!s){var e=window.editor.getWrapper().find("."+t.attributes["style-identifier"])[0];void 0!==t.attributes["style-identifier"]&&""!==t.attributes["style-identifier"]&&(t.removeClass(t.attributes["style-identifier"]),delete t.attributes["style-identifier"],d(t)),t.attributes["block-id"]=t.attributes["block-slug"],e&&void 0!==window.customBuilderScripts[e.attributes["block-id"]]&&(t.attributes["run-builder-script"]=e.attributes["block-id"])}}),window.editor.on("block:drag:stop",function(t){if(t&&t.attributes&&t.attributes.attributes){var e=b();t.attributes.attributes["dropped-component-id"]=e;var n=t.parent();a(t),n.components().each(function(n){n.attributes["dropped-component-id"]===e&&(delete n.attributes["dropped-component-id"],t=n)}),c(t),window.runScriptsOfComponentAndChildren(t)}}),window.editor.on("component:update",function(t){if(!0===window.isLoaded&&void 0!==t.attributes["block-slug"]&&!t.attributes["is-updating"]&&void 0!==t.changed.attributes&&0!==$(".gjs-frame").contents().find("#"+t.ccid).length){for(var e=[],i=t,o=!1;i.parent()&&void 0===i.parent().attributes.attributes["phpb-blocks-container"]&&"true"!==i.parent().attributes["is-html"]&&void 0===i.parent().attributes.attributes["phpb-content-container"];)"false"===i.parent().attributes["is-html"]&&(o=!0),void 0!==i.attributes["block-id"]&&e.push(i.attributes["block-id"]),i=i.parent();o?t=i:e=[],t.attributes["is-updating"]=!0,$(".gjs-frame").contents().find("#"+t.ccid).addClass("gjs-freezed");var s=window.editor.getWrapper().find("#"+t.ccid)[0].parent(),l=window.getComponentDataInStorageFormat(t);$.ajax({type:"POST",url:window.renderBlockUrl,data:{data:JSON.stringify(l),language:window.currentLanguage},success:function(i){var o=$(i).attr("block-id");window.pageBlocks[window.currentLanguage][o]=void 0===l.blocks[o]?{}:l.blocks[o],t.replaceWith(i),n(s),a(s),c(s,!1,!1);var d=r(s,[o]);runScriptsOfComponentAndChildren(d),e.push(o);var u=r(s,e.reverse());window.editor.select(u)},error:function(){$(".gjs-frame").contents().find("#"+t.ccid).removeClass("gjs-freezed"),t.attributes["is-updating"]=!1,window.toastr.error(window.translations["toastr-component-update-failed"])}})}});var s=!1;function l(t,e,n,i){var o=t.attributes.attributes;for(var a in o)i&&(e.attributes.attributes[a]=o[a]),n&&(e.attributes[a]=o[a])}function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(u(t),void 0!==t.attributes.attributes["phpb-content-container"])t.set({droppable:!0,hoverable:!0});else if(void 0!==t.attributes["block-slug"]){t.find("[phpb-hide-if-not-editable]").forEach(function(t){n||window.afterInitialRendering?t.addClass("editable"):t.removeClass("editable")});var o={selectable:!0,hoverable:!0};e||(o={removable:!0,draggable:!0,copyable:!0,selectable:!0,hoverable:!0,stylable:!0},d(t)),"true"===t.attributes["is-html"]?(e=!1,n=!0):(e=!0,n=!1,t.getEl().setAttribute("data-cursor","default")),t.set(o)}if(void 0===t.attributes.attributes["data-raw-content"]){if(n&&(function(t){var e=t.get("tagName"),n={};"phpb-blocks-container"in t.attributes.attributes&&(n.hoverable=!0,n.selectable=!0,n.droppable=!0);["h1","h2","h3","h4","h5","h6","h7","p","small","b","strong","i","em","label","button","ol","ul","li","table"].includes(e)||"phpb-editable"in t.attributes.attributes?(n.editable=!0,t.attributes["made-text-editable"]="true"):["img"].includes(e)&&(n.editable=!0);i(t)&&(n.hoverable=!0,n.selectable=!0,n.stylable=!0);"a"===e&&(n.hoverable=!0,n.selectable=!0,n.stylable=!0,n.removable=!0);$.isEmptyObject(n)||(t.set(n),void 0!==n.stylable&&n.stylable&&d(t))}(t),"true"===t.attributes["made-text-editable"])){t.attributes.attributes["data-raw-content"]="true";var a=t.replaceWith(t.toHTML());return["block-id","block-slug","is-html","style-identifier"].forEach(function(e){a.attributes[e]=t.attributes[e]}),void c(a)}t.get("components").each(function(t){return c(t,e,n)})}else t.set({editable:!0})}function d(t){var e=!1;t.getClasses().forEach(function(t){t.startsWith("ID")&&t.length>=16&&(e=t)}),void 0===t.attributes["style-identifier"]&&(t.attributes["style-identifier"]=e||b()),t.addClass(t.attributes["style-identifier"])}function u(t){t.set({removable:!1,draggable:!1,droppable:!1,badgable:!1,stylable:!1,highlightable:!1,copyable:!1,resizable:!1,editable:!1,layerable:!1,selectable:!1,hoverable:!1})}window.cloneComponent=function(t){s=!0;var e=t.clone();return function t(e,n){l(e,n,!1,!0);for(var i=0;i<e.components().length;i++){var o=e.components().models[i],a=n.components().models[i];t(o,a)}}(t,e),s=!1,e};var p=0;function b(){return"ID"+(Date.now().toString(36)+Math.random().toString(36).substr(2,5)+p++).toUpperCase()}!function e(){window.grapesJSLoaded?t():setTimeout(e,100)}()}()},function(t,e){var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};$(document).ready(function(){function t(t){var e=window.pageBlocks[t],n=window.pageBlocks[window.currentLanguage];if(void 0===e)e=n;else for(var i in function(t,e){for(var n in t)if(void 0!==e[n])for(var i in t[n].blocks){var o=t[n].blocks[i],a=e[n].blocks[i];if(o&&a){var r=o.html.match(/phpb-blocks-container(.*)>(.*)</g),s=a.html.match(/phpb-blocks-container(.*)>(.*)</g);if(r&&s)for(var l=0;l<r.length;l++)e[n].blocks[i].html=e[n].blocks[i].html.replace(s[l],r[l])}}}(n,e),n)void 0===e[i]&&(e[i]=n[i]);var o=function(t){var i=$("<container>"+n[t].html+"</container>"),o=$("<container>"+e[t].html+"</container>");i.find("[phpb-blocks-container]").each(function(t){var e=$(this).html();o.find("[phpb-blocks-container]").eq(t).html(e)}),e[t].html=o.html()};for(var a in n)o(a);window.pageBlocks[t]=e}function e(t){setTimeout(function(){var e=window.pageData.css?window.pageData.css:window.initialCss;window.pageData={html:[],components:[],css:null,style:null},window.pageBlocks[window.currentLanguage]=[],window.editor.getWrapper().find("[phpb-content-container]").forEach(function(t,i){var a=o(t);window.pageData.css=function(t,e){if(!t)return e;var n=JSON.stringify(window.pageBlocks),i=t.match(new RegExp("\\.ID(.*?){(.*?)}","g"));if(!i)return e;return i.forEach(function(t){var i=t.split("{")[0],o=i.replace("."," ").trim();-1===e.indexOf(i)&&n.indexOf(o)>=0&&(e+=t)}),e}(e,a.css),window.pageData.style=a.style,window.pageData.html[i]=a.html,window.pageData.components[i]=a.components,window.pageBlocks[window.currentLanguage]=n({},window.pageBlocks[window.currentLanguage],a.blocks),window.contentContainerComponents[i]=a.components}),t&&t()},200)}function i(){l(),e(function(){$.each(window.languages,function(e,n){e!==window.currentLanguage&&t(e)});var e,n,i,o=window.pageData;o.style=(e=o.style,n=JSON.stringify(window.pageBlocks),i=[],e.forEach(function(t){if(t.attributes.selectors.models.length){var e=t.attributes.selectors.models[0].id;n.includes(e)&&i.push(t)}}),i),o.blocks=window.pageBlocks,$.ajax({type:"POST",url:$("#save-page").data("url"),data:{data:JSON.stringify(o)},success:function(){l(),window.toastr.success(window.translations["toastr-changes-saved"]),setTimeout(function(){window.changesOffset=window.editor.getModel().get("changesCount")},250)},error:function(t){l(),console.log(t);var e=t.statusText+" "+t.status;e=t.responseJSON.message?e+': "'+t.responseJSON.message+'"':e,window.toastr.error(e),window.toastr.error(window.translations["toastr-saving-failed"])}})})}function o(t){var e=window.editor.DomComponents.componentsById;window.editor.DomComponents.componentsById=[];var n=function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];var o={current_block:{settings:{},blocks:{},html:"",is_html:!1},blocks:{}};var r=n;var l=i;void 0!==e.attributes["block-id"]&&("false"===e.attributes["is-html"]?(r=!0,l=!1):n&&(r=!1,l=!0));e.get("components").forEach(function(e){var n=t(e,r,l);for(var i in n.current_block.blocks)o.current_block.blocks[i]=n.current_block.blocks[i];for(var a in n.blocks)o.blocks[a]=n.blocks[a]});if(!e.parent())return o;if(void 0===e.attributes["block-id"])return o;if("true"===e.attributes["is-html"])if(n)o.current_block.blocks[e.attributes["block-id"]]={settings:{},blocks:{},html:window.html_beautify(a(e)),is_html:!0};else{void 0!==e.attributes["style-identifier"]&&(o.current_block.settings.attributes={"style-identifier":e.attributes["style-identifier"]});var c=e.attributes["block-id"];e.attributes["block-id"].startsWith("ID")||(c=s()),e.replaceWith({tagName:"phpb-block",attributes:{slug:e.attributes["block-slug"],id:c}}),o.blocks[c]={settings:o.current_block.settings,blocks:{},html:window.html_beautify(a(e)),is_html:!0},o.current_block={settings:{},blocks:{},html:"",is_html:!1}}else{var d={};e.get("traits").each(function(t){d[t.get("name")]=t.getTargetValue()}),o.current_block.settings.attributes=d,void 0!==e.attributes["style-identifier"]&&(o.current_block.settings.attributes["style-identifier"]=e.attributes["style-identifier"]);var u=e.attributes["block-id"];if(e.attributes["block-id"].startsWith("ID")||(u=s()),e.replaceWith({tagName:"phpb-block",attributes:{slug:e.attributes["block-slug"],id:u}}),n){var p={settings:{},blocks:{},html:"",is_html:!1};p.blocks[e.attributes["block-id"]]=o.current_block,o.current_block=p}else o.blocks[u]=o.current_block,o.current_block={settings:{},blocks:{},html:"",is_html:!1}}return o}(t=window.cloneComponent(t)).blocks,i=window.html_beautify(function(t){var e="";t.get("components").forEach(function(t){return e+=t.toHTML()});var n=$("<container>"+e+"</container>");return n.find("phpb-block").each(function(){$(this).replaceWith('[block slug="'+$(this).attr("slug")+'" id="'+$(this).attr("id")+'"]')}),n.html()}(t)),o=window.editor.getCss(),r=window.editor.getStyle(),l=JSON.parse(JSON.stringify(t.get("components")));return window.editor.DomComponents.componentsById=e,{html:i,css:o,components:l,blocks:n,style:r}}function a(t){var e=$("<container>"+t.toHTML()+"</container>");return e.find("phpb-block").each(function(){$(this).replaceWith('[block slug="'+$(this).attr("slug")+'" id="'+$(this).attr("id")+'"]')}),e.html()}window.pageData={},window.changesOffset=0,window.onbeforeunload=function(){if(window.editor.getModel().get("changesCount")-window.changesOffset>0)return"Are you sure? There are unsaved changes."},$("#save-page").click(function(){i()}),$(document).bind("keydown",function(t){if(t.ctrlKey&&83===t.which)return window.editor.store(),i(),t.preventDefault(),!1}),window.switchLanguage=function(n,i){window.setWaiting(!0),e(function(){t(n);var e,o,a,r=window.pageData;r.blocks=(e={},o=n,a=window.pageBlocks[n],o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e),$.ajax({type:"POST",url:window.renderLanguageVariantUrl,data:{data:JSON.stringify(r),language:n},success:function(t){t=JSON.parse(t),window.pageBlocks[n]=t.dynamicBlocks?t.dynamicBlocks:{},i()},error:function(t){i(),console.log(t);var e=t.statusText+" "+t.status;e=t.responseJSON.message?e+': "'+t.responseJSON.message+'"':e,window.toastr.error(e),window.toastr.error(window.translations["toastr-switching-language-failed"])}})})},window.getComponentDataInStorageFormat=function(t){var e=window.cloneComponent(t.parent());return e.get("components").reset(),e.append(t),o(e)};var r=0;function s(){return"ID"+(Date.now().toString(36)+Math.random().toString(36).substr(2,5)+r++).toUpperCase()}function l(){var t=$("#save-page");t.blur(),t.hasClass("waiting")?(t.attr("disabled",!1),t.removeClass("waiting"),t.find(".spinner-border").addClass("d-none")):(t.attr("disabled",!0),t.addClass("waiting"),t.find(".spinner-border").removeClass("d-none"))}window.setWaiting=function(t){var e=window.editor.DomComponents.getWrapper();t?e.addClass("gjs-waiting"):e.removeClass("gjs-waiting")}})},function(t,e){$(document).ready(function(){window.CKEDITOR.on("instanceReady",function(t){t.editor.on("paste",function(t){var e=t.data.dataValue;e=(e=e.replace(/<(?!\/?(?:a|table|tr|td|th|thead|tbody|tfoot|caption|col|colgroup|p|ul|ol|li|br|strong|em|b|i|u|strike|sub|sup|h1|h2|h3|h4|h5|h6|blockquote|pre|hr)\b)[^>]+>/gm,"")).replace(/<(a|table|tr|td|th|thead|tbody|tfoot|caption|col|colgroup|p|ul|ol|li|br|strong|em|b|i|u|strike|sub|sup|h1|h2|h3|h4|h5|h6|blockquote|pre|hr)\b[^>]*>/gm,function(t,e){if("a"===e){var n=t.match(/href="([^"]*)"/);return n?'<a href="'+n[1]+'">':t}if("|table|tr|td|th|thead|tbody|tfoot|".includes("|"+e+"|")){var i=t.match(/style="([^"]*)"/);return i?"<"+e+' style="'+i[1]+'">':t}return"<"+e+">"}),t.data.dataValue=e})}),window.CKEDITOR.on("dialogDefinition",function(t){var e=t.data.name,n=t.data.definition;if("link"===e){var i=n.getContents("info");n.onLoad=function(){var t=CKEDITOR.dialog.getCurrent();t.getContentElement("info","linkType").getElement().hide(),t.getContentElement("info","protocol").getElement().hide(),t.getContentElement("info","url").getElement().hide()},i.add({type:"select",id:"linktype-selector",label:"Linktype",default:"",items:[[window.translations.page,"page"],["URL","url"]],onChange:function(t){var e=CKEDITOR.dialog.getCurrent();"page"===t.data.value?(e.getContentElement("info","page-selector").getElement().show(),e.getContentElement("info","url-field").getElement().hide()):(e.getContentElement("info","page-selector").getElement().hide(),e.getContentElement("info","url-field").getElement().show(),e.getContentElement("info","url-field").setValue(""))},setup:function(t){void 0===t.type?this.setValue("page"):"url"===t.type&&t.url.url.startsWith("[page id=")?this.setValue("page"):this.setValue(t.type)}}),i.add({type:"select",id:"page-selector",label:window.translations.page,default:"",items:window.pages,onChange:function(){var t=CKEDITOR.dialog.getCurrent(),e="[page id="+this.getValue()+"]";t.setValueOf("info","url",e),t.setValueOf("info","protocol","")},setup:function(t){this.allowOnChange=!1;var e="";t.url&&(e=t.url.url.substr(9,t.url.url.length-10)),this.setValue(e),this.allowOnChange=!0}}),i.add({type:"text",id:"url-field",label:"URL",default:"",onChange:function(){var t=CKEDITOR.dialog.getCurrent(),e=this.getValue();t.setValueOf("info","url",e)},setup:function(t){this.allowOnChange=!1;var e="";t.url&&(e=t.url.url),this.setValue(e),this.allowOnChange=!0}})}})})},function(t,e){$(document).ready(function(){window.touchStart=function(){$("#gjs").addClass("sidebar-collapsed")}})}]);