/**
 * Created by mac on 16/5/9.
 */

'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../css/Overlay.less');

var Overlay = (function (_Component) {
    _inherits(Overlay, _Component);

    function Overlay() {
        _classCallCheck(this, Overlay);

        _Component.apply(this, arguments);
    }

    Overlay.prototype.renderOverlay = function renderOverlay() {
        var _props = this.props;
        var overlayContent = _props.overlayContent;
        var overlayList = _props.overlayList;

        if (overlayContent) {
            return overlayContent;
        }
        if (overlayList && overlayList.length) {
            return overlayList.map(function (item) {
                return _react2['default'].createElement(
                    'span',
                    { className: 'eg-overlay-item', onClick: item.callback },
                    item.content
                );
            });
        }
    };

    Overlay.prototype.render = function render() {
        return _react2['default'].createElement(
            'a',
            { className: 'eg-overlay-container' },
            this.props.children,
            _react2['default'].createElement(
                'div',
                { className: 'eg-overlay ' + this.props.position + ' ' + this.props.show },
                this.renderOverlay()
            )
        );
    };

    _createClass(Overlay, null, [{
        key: 'propTypes',
        value: {
            //overlay的位置，可选top、bottom、left、right、top-left、top-right、bottom-left、bottom-right。默认bottom-right
            position: _react.PropTypes.string,
            //何时显示遮罩块，可选always、hover（always会一直显示，hover只有在鼠标移动到的时候会显示）默认always
            show: _react.PropTypes.string,
            //overlay的内容
            overlayContent: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.element])

        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            position: 'bottom-right',
            show: 'always'
        },
        enumerable: true
    }]);

    return Overlay;
})(_react.Component);

exports['default'] = Overlay;
module.exports = exports['default'];