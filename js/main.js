!function(a){"use strict";var b=a(window);a.fn.resPriceDetails=function(b){var c=this;return b=a.extend({getData:null,putData:null,beforeData:"<strong>",afterData:"</strong>"},b),this.find(b.putData).each(function(){var d=a(this),e=c.find(b.getData).eq(d.index()).text();d.append(b.beforeData+e+b.afterData)})},a(function(){var c=a("body");b.on("load scroll",function(){b.scrollTop()>1?c.addClass("scrolled"):c.removeClass("scrolled")});var d=a("[data-bg-img]");d.each(function(){var b=a(this);b.css("background-image","url("+b.data("bg-img")+")").removeAttr("data-bg-img").addClass("bg--img")});var e=a("#headerNav");e.hoverIntent({selector:"li.dropdown",over:function(){a(this).addClass("open")},out:function(){a(this).removeClass("open")},timeout:500,interval:300});var f=a(".BannerSlider"),g=a(".banner--slider-nav"),h=g.find("li"),i=function(b){var c=a(b.$owlItems[b.currentItem]).children().data("owl-id"),d=g.find('li[data-owl-target="'+c+'"]');d.addClass("active").siblings().removeClass("active"),f.length&&f.trigger("owl.goTo",d.index()),j.length&&j.trigger("owl.goTo",d.index())},j=a(".PricingSlider");f.length&&f.owlCarousel({slideSpeed:700,singleItem:!0,autoPlay:f.data("owl-autoplay"),addClassActive:!0,pagination:!1,navigation:!1,afterInit:function(){i(this),g.addClass("has--bs")},afterMove:function(){i(this)}}),h.on("click",function(){var b=a(this),c=a('[data-owl-id="'+b.data("owl-target")+'"]');c.length&&(b.addClass("active").siblings("li").removeClass("active"),f.trigger("owl.goTo",c.parent(".owl-item").index()),j.trigger("owl.goTo",c.parent(".owl-item").index()))}),j.length&&j.owlCarousel({slideSpeed:700,singleItem:!0,autoPlay:j.data("owl-autoplay"),addClassActive:!0,pagination:!1,navigation:!1,afterInit:function(){i(this),g.addClass("has--ps")},afterMove:function(){i(this)}});var k=a(".TestimonialSlider");if(k.length){var l=function(b){var c=b.$userItems,d=b.paginationWrapper.children(".owl-page");c.each(function(){var b=a(this);d.eq(b.parent(".owl-item").index()).html('<img src="'+b.data("thumb")+'" />')})};k.owlCarousel({slideSpeed:700,singleItem:!0,autoPlay:k.data("owl-autoplay"),addClassActive:!0,pagination:!0,navigation:!1,afterInit:function(){l(this),this.owlControls.prependTo(this.$elem)},afterUpdate:function(){l(this)}})}var m=a(".vps-pricing--slider-holder"),n=a(".VPSPricingSlider"),o=a(".vps-pricing--cpu"),p=a(".vps-pricing--ram"),q=a(".vps-pricing--space"),r=a(".vps-pricing--bandwidth"),s=a(".vps-pricing--total-price span"),t=a(".vps-pricing--action-btn .btn--default"),u=a(".InputCPUText"),v=a(".InputRamText"),w=a(".InputSpaceText"),x=a(".InputBandwidthText"),y=a(".InputPriceText");if(n.length){for(var z,A=vpsSliderOpts.maxPlans-1,B=vpsSliderOpts.detfaultPlan-1,C=0;A>C;C++)a('<div class="pip"></div>').css("left",100/A*C+"%").appendTo(m.children(".pips"));n.slider({animate:"fast",range:"min",min:0,max:A,value:B,step:1,create:function(){o.text(vpsSliderOpts.plans[B].cpuText),p.text(vpsSliderOpts.plans[B].ramText),q.text(vpsSliderOpts.plans[B].spaceText),r.text(vpsSliderOpts.plans[B].brandwidthText),s.text(vpsSliderOpts.plans[B].priceText),t.attr("href",vpsSliderOpts.plans[B].url),u.val(vpsSliderOpts.plans[B].cpuText),v.val(vpsSliderOpts.plans[B].ramText),w.val(vpsSliderOpts.plans[B].spaceText),x.val(vpsSliderOpts.plans[B].brandwidthText),y.val(vpsSliderOpts.plans[B].priceText),z=n.children(".ui-slider-handle"),a('<i class="fa fa-circle"></i><em></em>').appendTo(z),z.children("em").html(vpsSliderOpts.plans[B].planName)},slide:function(a,b){o.text(vpsSliderOpts.plans[b.value].cpuText),p.text(vpsSliderOpts.plans[b.value].ramText),q.text(vpsSliderOpts.plans[b.value].spaceText),r.text(vpsSliderOpts.plans[b.value].brandwidthText),s.text(vpsSliderOpts.plans[b.value].priceText),t.attr("href",vpsSliderOpts.plans[b.value].url),u.val(vpsSliderOpts.plans[b.value].cpuText),v.val(vpsSliderOpts.plans[b.value].ramText),w.val(vpsSliderOpts.plans[b.value].spaceText),x.val(vpsSliderOpts.plans[b.value].brandwidthText),y.val(vpsSliderOpts.plans[b.value].priceText),z.children("em").html(vpsSliderOpts.plans[b.value].planName)}})}var D=a(".ResPriceDetailsTable");D.resPriceDetails({getData:"thead th",putData:"tbody td"});var E=a(".ResPriceDetailsItemsI"),F=a(".ResPriceDetailsItems2");E.resPriceDetails({getData:".price-details--item.head li",putData:".price-details--item.body li"}),F.resPriceDetails({getData:".price-details--item.head li",putData:".price-details--item.body li"});var G=a(".contact--form form"),H=G.find(".contact--form-status");G.length&&G.on("submit",function(){var b=a(this);return a.ajax({type:"POST",url:b.attr("action"),data:b.serialize(),dataType:"json",success:function(a){"success"===a.type?(H.show().html(a.content).delay(3e3).fadeOut("slow"),b[0].reset()):H.show().html(a.content)}}),!1});var I=a("#map");if(I.length){var L,M,N,J={lat:I.data("latitude"),lng:I.data("longitude")},K=I.data("zoom");N=[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}],L=new google.maps.Map(document.getElementById("map"),{center:J,zoom:K,scrollwheel:!1,disableDefaultUI:!0,zoomControl:!0,styles:N}),M=new google.maps.Marker({position:J,map:L,animation:google.maps.Animation.DROP})}var Q=(new Date,document.createElement("script"));Q.async=!0,Q.src="https://embed.tawk.to/57dfd4b85dc7a25e92808cf6/default",Q.charset="UTF-8",Q.setAttribute("crossorigin","*"),a(Q).appendTo("body");var R=a("#backToTop");R.on("click","a",function(){return a("html, body").animate({scrollTop:0},"800"),!1}),"undefined"!=typeof a.cColorSwitcher&&b.outerWidth()>767&&a.cColorSwitcher({switcherTitle:"Main Colors:",switcherColors:[{bgColor:"#ff4718",filepath:"css/colors/theme-color-1.css"},{bgColor:"#8bc34a",filepath:"css/colors/theme-color-2.css"},{bgColor:"#03a9f4",filepath:"css/colors/theme-color-3.css"},{bgColor:"#ff5252",filepath:"css/colors/theme-color-4.css"},{bgColor:"#ff9600",filepath:"css/colors/theme-color-5.css"},{bgColor:"#e91e63",filepath:"css/colors/theme-color-6.css"},{bgColor:"#00BCD4",filepath:"css/colors/theme-color-7.css"},{bgColor:"#FC5143",filepath:"css/colors/theme-color-8.css"},{bgColor:"#00B249",filepath:"css/colors/theme-color-9.css"},{bgColor:"#D48B91",filepath:"css/colors/theme-color-10.css"}],switcherTarget:a("#changeColorScheme")})}),b.on("load",function(){var b=a("[data-counterUp]");"function"==typeof a.fn.counterUp&&b.counterUp({delay:10,time:1e3});var c=a("#preloader");c.length&&c.fadeOut("slow"),"function"==typeof ScrollReveal&&ScrollReveal().reveal("[data-revealFromRight]",{origin:"right",mobile:!1,duration:800}).reveal("[data-revealFromBottom]",{duration:800})})}(jQuery);