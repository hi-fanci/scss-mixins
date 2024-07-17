;
(function () {
    const html = $('html');
    const CLASS = {
        _is_run: 'is_run',
        _is_active: 'is_active'
    }
    const opts = {
        _loading: false,
        _loading_timing: 2000,
    }
    const fadeInSection = () => {
        $('.js_inview').on('inview', function (event, isInView) {
            if (isInView) {
                let _this = $(this);
                _this.addClass('is_show');
            } else {
                // element has gone out of viewport
            }
        });
    }
    const AnimateFadeUpInit = () => {
        const js_ani = $('.js_ani');
        const handleFadeUpState = () => {
            const {
                scrollY: y,
                innerHeight: wh
            } = window;
            js_ani.map((a, b) => {
                const _ = $(b);
                const {
                    top
                } = _.offset();
                const height = _.innerHeight();
                const bottom = y + wh;
                console.log(top, bottom);
                if (top < bottom) {
                    console.log('object');
                    if (top + height > y) {
                        _.addClass(CLASS._is_run);
                    } else {
                        _.removeClass('js_ani');
                    }
                } else {

                }
            });
        };

        $(window).on('load scroll', function () {
            handleFadeUpState();
        });
    };
    AnimateFadeUpInit();

    // loading
    const LoadingInit = () => {
        $(window).on('load', function () {
            if (html.hasClass('is_loading')) {
                html.removeClass('is_loading');
                setTimeout(function () {
                    fadeInSection();
                    opts._loading = true;
                }, opts._loading_timing);
            } else {
                fadeInSection();
            }
        })
    };
    LoadingInit();


})();