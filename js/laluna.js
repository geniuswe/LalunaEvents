(function () {
    //Responsive design font size setting
    var timer,
        setRootFontSize = function () {
            var winWidth = window.innerWidth,
                rootFontSize = ((winWidth > 800 ? 800 : winWidth) / 320 *20)+"px";
            $("html").css("font-size",rootFontSize);
        };

    window.addEventListener("resize", function() {
        clearTimeout(timer);
        timer = setTimeout(setRootFontSize, 300);
    }, false);
    window.addEventListener("orientationchange", function() {
        clearTimeout(timer);
        timer = setTimeout(setRootFontSize, 300);
    }, false);
    window.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(setRootFontSize, 300);
        }
    }, false);
    setRootFontSize();

    //Site menu init
    var btnSiteMenu = $("#J_BtnSiteMenu"),
        sitePage = $("#J_SitePage"),
        siteMenuMask = $('<div class="mask">');
    btnSiteMenu.on("click", function () {
        if(sitePage.hasClass("opened")){
            closeSiteMenu();
        }else{
            openSiteMenu();
        }
    });
    siteMenuMask.on("click", function () {
        closeSiteMenu();
    });
    function openSiteMenu(){
        siteMenuMask.appendTo(sitePage);
        sitePage.animate({translateX:"214px"},{duration:200,easing:"ease-in-out",complete: function () {
            sitePage.addClass("opened");
        }});
    }
    function closeSiteMenu(){
        siteMenuMask.remove();
        sitePage.animate({translateX:"0"},{duration:200,easing:"ease-in-out",complete: function () {
            sitePage.removeClass("opened");
        }});
    }

    //Nav Search
    var btnNavSearch = $("#J_NavSearchBtn"),
        navSearch = $("#J_NavSearchBar"),
        btnSearchCancel = navSearch.find(".search-cancel");
    btnNavSearch.on("click", function () {
        navSearch.show();
        navSearch.find("input").focus();
    });
    btnSearchCancel.on("click", function () {
        navSearch.hide();
    });
})();