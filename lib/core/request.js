'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Request = function () {
    function Request() {
        var rawRequest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, Request);

        this._messageType = 'req';
        if (rawRequest === null) {
            rawRequest = {};
        }
        this.meta = typeof rawRequest.meta !== 'undefined' && rawRequest.meta !== null ? rawRequest.meta : {};
        this.data = typeof rawRequest.data !== 'undefined' ? rawRequest.data : null;
        this.id = typeof rawRequest.id !== 'undefined' ? rawRequest.id : null;
        this.type = typeof rawRequest.type !== 'undefined' ? rawRequest.type : 'generic';
    }
    // setters


    _createClass(Request, [{
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

            if (typeof this.meta[key] !== 'undefined') {
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
    }]);

    return Request;
}();

exports.default = Request;