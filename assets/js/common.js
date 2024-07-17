;
(function () {
    const html = $('html');
    const CLASS = {
        _is_loading: 'is_loading',
        _is_run: 'is_run',
        _is_active: 'is_active'
    }
    const LOADING = {
        _is_run: 0,
        _timing: 1200,
    }

    const AnimateInit = () => {
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
                if (top < bottom) {
                    if (top + height > y) {
                        _.addClass(CLASS._is_run);
                    } else {
                        _.removeClass('js_ani');
                    }
                } else {

                }
            });
        };

        handleFadeUpState();
        $(window).on('scroll', function () {
            handleFadeUpState();
        });
    };

    // loading
    const LoadingInit = () => {
        const handleLoadingState = (e) => {
            if (e) {
                // remove
                html.removeClass(CLASS._is_loading);
                setTimeout(() => {
                    LOADING._is_run = 1;
                    AnimateInit();
                }, LOADING._timing);
            } else {
                // run
                LOADING._is_run = 1;
                AnimateInit();
            }
        }
        $(window).on('load', function () {
            const check = html.hasClass(CLASS._is_loading);
            handleLoadingState(check);
        })
    };
    LoadingInit();


})();