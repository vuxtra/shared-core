'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Response = function () {
    function Response() {
        var rawResponse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Response);

        this._messageType = 'res';
        this.meta = typeof rawResponse.meta !== 'undefined' && rawResponse.meta !== null ? rawResponse.meta : {};
        this.data = typeof rawResponse.data !== 'undefined' ? rawResponse.data : null;
        this.id = typeof rawResponse.id !== 'undefined' ? rawResponse.id : null;
        this.type = typeof rawResponse.type !== 'undefined' ? rawResponse.type : 'generic';
        this.statusCode = typeof rawResponse.statusCode !== 'undefined' ? rawResponse.statusCode : 200;
        this.statusMessage = typeof rawResponse.statusMessage !== 'undefined' ? rawResponse.statusMessage : 'success';
    }

    // setters


    _createClass(Response, [{
        key: 'setData',
        value: function setData(data) {
            this.data = data;
            return this;
        }
    }, {
        key: 'setMeta',
        value: function setMeta(key, val) {
            this.meta[key] = val;
            return this;
        }
    }, {
        key: 'setId',
        value: function setId(id) {
            this.id = id;
            return this;
        }
    }, {
        key: 'setType',
        value: function setType(type) {
            this.type = type;
            return this;
        }
    }, {
        key: 'ss',
        value: function ss(code) {
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            this.statusCode = code;
            this.statusMessage = message;
            return this;
        }
    }, {
        key: 'ssSuccess',
        value: function ssSuccess() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';

            this.statusCode = 200;
            this.statusMessage = msg;
            return this;
        }
    }, {
        key: 'ssClientError',
        value: function ssClientError() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Client Error';

            this.statusCode = 400;
            this.statusMessage = msg;
            return this;
        }
    }, {
        key: 'ssClientErrorNotFound',
        value: function ssClientErrorNotFound() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Client Error: Not Found';

            this.statusCode = 404;
            this.statusMessage = msg;
            return this;
        }
    }, {
        key: 'ssClientErrorInvalidRequest',
        value: function ssClientErrorInvalidRequest() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Client Error: Not Found';

            this.statusCode = 404;
            this.statusMessage = msg;
            return this;
        }
    }, {
        key: 'ssServerError',
        value: function ssServerError() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Server Error';

            this.statusCode = 500;
            this.statusMessage = msg;
            return this;
        }

        // getters

    }, {
        key: 'getData',
        value: function getData() {
            return this.data;
        }
    }, {
        key: 'getMeta',
        value: function getMeta(key) {
            var defaultVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (_typeof(this.meta[key]) !== undefined) {
                return this.meta[key];
            }
            return defaultVal;
        }
    }, {
        key: 'getId',
        value: function getId(id) {
            return this.id;
        }
    }, {
        key: 'getType',
        value: function getType(type) {
            return this.type;
        }
    }, {
        key: 'getStatusCode',
        value: function getStatusCode() {
            return this.statusCode;
        }
    }, {
        key: 'getStatusMessage',
        value: function getStatusMessage() {
            return this.statusMessage;
        }

        // checkers

    }, {
        key: 'isStatusSuccess',
        value: function isStatusSuccess() {
            if (this.statusCode >= 200 && this.statusCode < 300) {
                return true;
            }
            return false;
        }
    }, {
        key: 'isStatusError',
        value: function isStatusError() {
            if (this.statusCode >= 400 && this.statusCode < 600) {
                return true;
            }
            return false;
        }
    }]);

    return Response;
}();

exports.default = Response;