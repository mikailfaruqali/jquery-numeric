# Numeric jQuery Plugin

This jQuery plugin provides functionality to format numeric inputs and display them with thousand separators, handle decimal places, and support different options for customization.

## Features

- Allows numeric input with or without a minus sign.
- Formats numbers with thousand separators.
- Limits the number of decimal places and digits.
- Truncates trailing zeros after the decimal point.
- Supports multiple events (`input`, `focusout`, `change`).
- Handles both input and text elements.

## Installation

Include the jQuery library and the plugin script in your HTML file:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="path/to/numeric-plugin.js"></script>
```
## Usage

Apply Numeric Formatting to Input

```javascript
$('#myInput').numeric();
```
This will apply the default settings to the input field.

## Customizing the Options

You can pass options to customize the behavior of the plugin:

```javascript
$('#myInput').numeric({
    minus: true,              // Allow negative numbers
    maxDecimal: 5,           // Maximum number of decimal places
    maxDigits: 10,           // Maximum number of digits in the integer part
    roundDecimal: 2,         // Number of decimal places to round to
    truncateZero: false,     // Whether to truncate trailing zeros after the decimal
    event: 'focusout'        // Event to trigger formatting (input, focusout, change)
});
```
## Options

The following options can be passed to customize the behavior of the plugin:

- **`minus`** (default: `false`):  
  Allows the input of negative numbers. Set to `true` to allow negative values.

- **`maxDecimal`** (default: `15`):  
  The maximum number of decimal places allowed. Set a lower number to restrict decimals.

- **`maxDigits`** (default: `15`):  
  The maximum number of digits allowed in the integer part. Use this to limit the size of the number.

- **`roundDecimal`** (default: `2`):  
  The number of decimal places to round to. This will round the value when it exceeds the specified decimal count.

- **`truncateZero`** (default: `true`):  
  Whether to truncate trailing zeros in decimal values. If set to `false`, zeros after the decimal will remain.

- **`event`** (default: `null`):  
  The event to trigger numeric sanitization. You can choose between `input`, `focusout`, or `change`:
  - `input`: Triggers the sanitization as the user types.
  - `focusout`: Triggers the sanitization when the input loses focus.
  - `change`: Triggers when the value is changed.
  
## Example
```javascript
<input type="text" id="myInput" placeholder="Enter amount" />
<script>
    $('#myInput').numeric({
        minus: true,
        maxDecimal: 2,
        maxDigits: 10,
        roundDecimal: 2,
        truncateZero: true,
        event: 'focusout'
    });
</script>
```
## Summary

This README provides an overview of the plugin, how to include and use it, as well as descriptions of the options available for customization. Let me know if you'd like to adjust anything!

## License

MIT License. See LICENSE file for more details.
