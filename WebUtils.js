var WU = {
    input: {},
    page: {}
};

WU.input.numericTextBox = function (evt) {
    "use strict";
    var charCode = evt.keyCode;
    if (charCode === 8 || //backspace
            charCode === 46 || //delete
            charCode === 13) { //enter key

        return;
    } else if (charCode >= 37 && charCode <= 40) { //arrow keys

        return;
    } else if (charCode >= 48 && charCode <= 57) { //0-9 on key pad

        if (evt.shiftKey || evt.ctrlKey) {
            evt.preventDefault();
        }

    } else if (charCode >= 96 && charCode <= 105) { //0-9 on num pad
    
        if (evt.shiftKey || evt.ctrlKey) {
            evt.preventDefault();
        }

    } else {
        return evt.preventDefault();
    }
};

WU.input.allowableLength = function (ctrl, size, event) {
    "use strict";
    if (ctrl !== null && size !== null) {
        if (ctrl.value.length > size) {
            event.preventDefault();
        }
    }
};

WU.page.disableContextMenu = function () {
    "use strict";
    document.oncontextmenu = function () {
        return false;
    };
};