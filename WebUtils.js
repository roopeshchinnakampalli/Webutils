var WU = {
    input: {},
    page: {}
};

WU.input.onlyNumerics = function (evt) {
    "use strict";
    var charCode = evt.keyCode || evt.which;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
};


WU.input.numericTextBox = function (evt) {
    "use strict";
    var charCode = evt.keyCode;
    if (charCode === 8 || //backspace
            charCode === 46 || //delete
            charCode === 13) { //enter key

        return true;
    } else if (charCode >= 37 && charCode <= 40) { //arrow keys

        return true;
    } else if (charCode >= 48 && charCode <= 57) { //0-9 on key pad

        if (evt.shiftKey || evt.ctrlKey) {
            return false;
        }

        return true;
    } else if (charCode >= 96 && charCode <= 105) { //0-9 on num pad
    
        if (evt.shiftKey || evt.ctrlKey) {
            return false;
        }

        return true;
    } else {
        return false;
    }
};

WU.input.allowableLength = function (ctrl, size) {
    "use strict";
    if (ctrl !== null && size !== null) {
        if (ctrl.value.length > size) {
            return false;
        } else {
            return true;
        }
    }
};

WU.page.disableContextMenu = function () {
    "use strict";
    document.oncontextmenu = function () {
        return false;
    };
};