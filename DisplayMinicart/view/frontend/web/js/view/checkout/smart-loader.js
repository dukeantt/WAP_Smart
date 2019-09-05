define([
    'jquery',
    'jquery/ui',
    'mage/loader'
], function ($, mageTemplate) {
    'use strict';
    $.widget("smart.loader",$.mage.loader, {
        loaderStarted: 0,
        options: {
            icon: '',
            texts: {
                loaderText: $.mage.__('Please wait...'),
                imgAlt: $.mage.__('Loading...')
            },
            template:
                '<div class="loading-mask" data-role="loader"  style="background-color: rgba(187,187,187,.7)">' +
                '<div class="loader">' +
                '<img alt="<%- data.texts.imgAlt %>" src="<%- data.icon %>" style="background-color: white">' +
                // '<p><%- data.texts.loaderText %></p>' +
                '<h3 style="position: absolute; width: 100%; text-align: center; bottom: 0; left: 0;">' +
                'Processing your order....' +
                '</h3>'+
                '</div>' +
                '<div>' +
                '<h1>hello</h1>'+
                '</div>'+
                '</div>'

        },
    });
    return $.smart.loader;
});