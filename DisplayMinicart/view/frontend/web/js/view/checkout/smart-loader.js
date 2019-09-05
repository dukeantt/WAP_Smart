define([
    'jquery',
    'jquery/ui',
    'mage/loader'
], function ($, mageTemplate) {
    'use strict';
    $.widget("smart.loader",$mage.loader, {
        loaderStarted: 0,
        options: {
            icon: '',
            texts: {
                loaderText: $.mage.__('Please wait...'),
                imgAlt: $.mage.__('Loading...')
            },
            template:
                '<div class="loading-mask" data-role="loader">' +
                '<div class="loader">' +
                '<img alt="<%- data.texts.imgAlt %>" src="<%- data.icon %>">' +
                '<p><%- data.texts.loaderText %></p>' +
                '</div>' +
                '<div>' +
                '<h1>hello</h1>'+
                '</div>'+
                '</div>'

        },
    });
    return $.smart.loader;
});