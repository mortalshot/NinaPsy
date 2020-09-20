const articleSidebar = $('#sidebar__wrapper');
const wrapper = $('body');
const headerWithLockPadding = $('.header.lock-padding').height();

if (articleSidebar.length > 0) {
    const articleSidebarOffset = articleSidebar.offset().top - headerWithLockPadding;
    const asideFixedTopClassName = 'aside-fixed-top';
    const asideFixedBottomClassName = 'aside-fixed-bottom';
    const articleSidebarHeight = articleSidebar.height();
    const articleSidebarWidth = articleSidebar.width();

    // article sidebar sticky
    if ($(window).width() > 575) {
        $(window).scroll(function () {
            const scrolled = $(this).scrollTop();
            if (scrolled > articleSidebarOffset) {
                wrapper.addClass(asideFixedTopClassName);
                articleSidebar.css({
                    'padding-top': headerWithLockPadding,
                    'height': articleSidebarHeight + headerWithLockPadding,
                    'width': articleSidebarWidth,
                });
            } else if (scrolled < articleSidebarOffset) {
                wrapper.removeClass(asideFixedTopClassName);
                articleSidebar.css(
                    {
                        'padding-top': 0,
                        'height': 'inherit',
                    }
                );
            }

            const bottomFixPoint = $(document).height() - 25 - (articleSidebar.height() + headerWithLockPadding * 2 + $('.footer').height());

            if (scrolled > bottomFixPoint) {
                wrapper.addClass(asideFixedBottomClassName);
                wrapper.removeClass(asideFixedTopClassName);
                articleSidebar.css({
                    'top': bottomFixPoint - $('#article__column--second').offset().top
                });

            } else if (wrapper.hasClass(asideFixedBottomClassName) && scrolled < bottomFixPoint) {
                wrapper.removeClass(asideFixedBottomClassName);
                wrapper.addClass(asideFixedTopClassName);
                articleSidebar.css({
                    'top': 'auto'
                });
            }
        })
    }
}