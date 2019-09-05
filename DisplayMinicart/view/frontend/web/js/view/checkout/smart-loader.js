define([
    'jquery',
    'jquery/ui',
    'mage/loader'
], function ($, mageTemplate) {
    'use strict';
    $.widget("smart.loader", $.mage.loader, {
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
                '<img alt="<%- data.texts.imgAlt %>" src="<%- data.icon %>"">' +
                // '<p><%- data.texts.loaderText %></p>' +
                '<div class="smart-text" style="position: absolute; width: 100%; text-align: center; bottom: 25%; left: 0;">' +
                // '<div class="smart-text" style="margin: 0 auto; margin-top: 2%; padding-bottom: 10%; padding-top: 10%; text-align: center; width: 30%; background-color: white;">' +
                '<h3>'+
                'Processing your order...' +
                '</div>'+
                '</h3>' +
                '</div>' +
                '</div>'

        },
    });
    return $.smart.loader;
});