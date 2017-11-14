'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _response = require('./response');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServiceResponse = function (_Response) {
    _inherits(ServiceResponse, _Response);

    function ServiceResponse() {
        var rawRequest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ServiceResponse);

        var _this = _possibleConstructorReturn(this, (ServiceResponse.__proto__ || Object.getPrototypeOf(ServiceResponse)).call(this, rawRequest));

        _this.setType('service');
        return _this;
    }

    _createClass(ServiceResponse, [{
        key: 'setServiceName',
        value: function setServiceName(serviceName) {
            this.setMeta('serName', serviceName);
            return this;
        }
    }, {
        key: 'setServiceAction',
        value: function setServiceAction(serviceAction) {
            this.setMeta('serAction', serviceAction);
            return this;
        }
    }, {
        key: 'getServiceName',
        value: function getServiceName() {
            return this.getMeta('serName');
        }
    }, {
        key: 'getServiceAction',
        value: function getServiceAction() {
            return this.getMeta('serAction');
        }
    }]);

    return ServiceResponse;
}(_response2.default);

exports.default = ServiceResponse;