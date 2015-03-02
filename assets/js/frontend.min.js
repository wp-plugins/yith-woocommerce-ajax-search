/**
 * frontend.js
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Ajax Search
 * @version 1.1.1
 */
jQuery(document).ready(function ($) {
    "use strict";

    var el = $('.yith-s'),
        def_loader = ( typeof woocommerce_params != 'undefined' && typeof woocommerce_params.ajax_loader_url != 'undefined' ) ? woocommerce_params.ajax_loader_url : yith_wcas_params.loading,
        loader_icon = el.data('loader-icon') == '' ? def_loader : el.data('loader-icon'),
        min_chars = el.data('min-chars');

    el.each(function () {
        var $t = $(this),
            append_to = ( typeof  $t.data('append-to') == 'undefined') ? $t.closest('.yith-ajaxsearchform-container') : $t.data('append-to');

        el.autocomplete({
            minChars        : min_chars,
            appendTo        : append_to,
            serviceUrl      : woocommerce_params.ajax_url + '?action=yith_ajax_search_products',
            onSearchStart   : function () {
                $(this).css('background', 'url(' + loader_icon + ') no-repeat right center');
            },
            onSelect        : function (suggestion) {
                if (suggestion.id != -1) {
                    window.location.href = suggestion.url;
                }
            }
        });
    });
});


