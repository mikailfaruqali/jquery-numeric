(function ($) {
    'use strict';

    $.fn.numeric = function (options) {
        const settings = $.extend({}, {
            minus: false,
            maxDecimal: 15,
            maxDigits: 15,
            roundDecimal: 2,
            truncateZero: true,
            event: null
        }, options);

        function addThousandSeparators(value) {
            let parts = value.split('.');
            let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return parts.length > 1 ? `${integerPart}.${parts[1]}` : integerPart;
        }

        function sanitizeAndFormat(element, isInput = true) {
            let value = isInput ? element.val() : element.text();
            const placeholder = element.attr('placeholder');

            value = parseFloat(value.replace(/,/g, ''));

            if (isNaN(value)) {
                const defaultValue = placeholder ? '' : 0;
                return isInput ? element.val(defaultValue) : element.text(defaultValue);
            }

            if (settings.roundDecimal) {
                value = value.toFixed(settings.roundDecimal);
            }

            if (settings.truncateZero || (value.includes('.') && [...value.split('.')[1]].every(char => char === '0'))) {
                value = value.replace(/(\.0+|0+)$/, '');
            }

            const formattedValue = addThousandSeparators(value);

            isInput ? element.val(formattedValue) : element.text(formattedValue);
        }

        function handleInputEvent(element) {
            let value = convertToEnglishDigits(element.val());

            value = value.replace(settings.minus ? /[^٠-٩0-9\.,-]/g : /[^٠-٩0-9\.,]/g, '').replace(/,/g, '');

            const [integerPart, decimalPart] = value.split('.');

            if (integerPart && integerPart.length > settings.maxDigits) {
                value = integerPart.slice(0, settings.maxDigits) + (decimalPart ? `.${decimalPart}` : '');
            }

            if (decimalPart && decimalPart.length > settings.maxDecimals) {
                value = `${integerPart}.${decimalPart.slice(0, settings.maxDecimals)}`;
            }

            element.val(addThousandSeparators(value));
        }

        const element = this;

        switch (settings.event) {
            case 'input':
                handleInputEvent(element);
                break;
            case 'focusout':
                sanitizeAndFormat(element);
                break;
            case 'change':
                sanitizeAndFormat(element, element.is('input'));
                break;
        }
    };
})(jQuery);
