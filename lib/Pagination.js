'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Pagination.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
    _inherits(Pagination, _Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

        _this.state = {
            length: 15,
            activeIndex: 1,
            currentItems: [_react2.default.createElement('a', { href: '#', id: '0' })],
            displayFirstLastPair: true,
            displayNextBackPair: true,
            pagePrompter: true

        };
        return _this;
    }

    _createClass(Pagination, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.setState({
                length: Math.ceil(this.props.total),
                displayFirstLastPair: this.props.nextBackPair,
                displayNextBackPair: this.props.initialFinalPair,
                pagePrompter: this.props.pagePrompter
            }, function () {
                return _this2.pageList(1, 10);
            });
        }
    }, {
        key: 'calcPage',
        value: function calcPage(id) {
            var _this3 = this;

            if (this.state.activeIndex >= 10) {}

            switch (id) {
                case "first":
                    this.setState({ activeIndex: 1 }, function () {
                        _this3.pageList(1, 10);
                    });
                    this.pageList(1, 10);
                    break;

                case "last":
                    this.setState({ activeIndex: this.state.length }, function () {
                        _this3.pageList(_this3.state.length - 10, _this3.state.length);
                    });
                    break;

                case "next":
                    {
                        if (this.state.activeIndex > 9) {
                            this.setState({ activeIndex: this.state.activeIndex + 1 }, function () {
                                _this3.pageList(_this3.state.activeIndex - 9, _this3.state.activeIndex);
                            });
                        } else if (this.state.activeIndex < 10) {
                            this.setState({ activeIndex: this.state.activeIndex + 1 }, function () {
                                _this3.pageList(1, 10);
                            });
                        }
                        break;
                    }

                case "back":

                    if (this.state.activeIndex === parseInt(this.state.currentItems[0].props.id)) {
                        this.setState({ activeIndex: this.state.activeIndex - 1 }, function () {
                            _this3.pageList(_this3.state.activeIndex, _this3.state.activeIndex + 9 > _this3.state.length - 1 ? _this3.state.length - 1 : _this3.state.activeIndex + 9);
                        });
                    } else {
                        this.setState({ activeIndex: this.state.activeIndex - 1 }, function () {
                            _this3.pageList(_this3.state.currentItems[0].props.id, _this3.state.currentItems[_this3.state.currentItems.length - 1].props.id);
                        });
                    }
                    break;

                default:
                    {
                        this.setState({ activeIndex: id }, function () {
                            _this3.pageList(_this3.state.currentItems[0].props.id, _this3.state.currentItems[_this3.state.currentItems.length - 1].props.id);
                        });
                        break;
                    }

            }
        }
    }, {
        key: 'pageList',
        value: function pageList(initial, final) {
            var _this4 = this;

            if (final > this.state.length) {
                final = this.state.length;
            }
            if (initial < 1) {
                initial = 1;
                if (final > this.state.length) {
                    final = this.state.length;
                } else {
                    final = initial + 9;
                }
            } else if (final >= this.state.length) {
                final = this.state.length;
                initial = final - 9;
                if (initial < 0) {
                    initial = 1;
                }
            }

            var items = [];

            var _loop = function _loop(number) {
                items.push(_react2.default.createElement(
                    'a',
                    { key: number, href: '#', id: number, className: 'w3button', style: { pointerEvents: _this4.state.activeIndex === number ? 'none' : 'auto', backgroundColor: _this4.state.activeIndex === number ? "#0E6DB5" : "#ffffff", color: _this4.state.activeIndex === number ? "#ffffff" : "" }, onClick: function onClick() {
                            _this4.calcPage(number);
                        } },
                    number
                ));
            };

            for (var number = initial; number <= final; number++) {
                _loop(number);
            }
            this.setState({ currentItems: items });
            this.handleLangChange();
        }
    }, {
        key: 'checkActive',
        value: function checkActive(number, str) {
            if (this.state.activeIndex === number) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'checkPrompter',
        value: function checkPrompter(position) {
            if (position === 'initial') {
                if (this.state.currentItems[0].props.id == 1) {
                    return 'none';
                } else {
                    return 'inline-block';
                }
            } else if (position === 'last') {
                if (this.state.currentItems[this.state.currentItems.length - 1].props.id == this.state.length) {
                    return 'none';
                } else {
                    return 'inline-block';
                }
            } else {
                return 'inline-block';
            }
        }
    }, {
        key: 'handleLangChange',
        value: function handleLangChange() {
            this.props.onPageChange(this.state.activeIndex);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            console.log('abc', _typeof(this.state.activeIndex), _typeof(1), this.state.activeIndex);
            return _react2.default.createElement(
                'div',
                { className: 'alignCenter' },
                _react2.default.createElement(
                    'a',
                    { href: '#', className: 'w3buttonActive', id: 'first', style: { display: this.state.displayFirstLastPair ? 'inline-block' : 'none', pointerEvents: this.state.activeIndex === 1 ? 'none' : 'auto', backgroundColor: this.state.activeIndex === 1 ? '#ffffff' : '#0E6DB5', color: this.state.activeIndex === 1 ? '#0E6DB5' : '#ffffff' }, onClick: function onClick() {
                            return _this5.calcPage("first");
                        } },
                    '\xAB'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#', className: 'w3buttonActive', id: 'back', style: { display: this.state.displayNextBackPair ? 'inline-block' : 'none', pointerEvents: this.state.activeIndex === 1 ? 'none' : 'auto', backgroundColor: this.state.activeIndex === 1 ? '#ffffff' : '#0E6DB5', color: this.state.activeIndex === 1 ? '#0E6DB5' : '#ffffff' }, onClick: function onClick() {
                            return _this5.calcPage("back");
                        } },
                    '<'
                ),
                _react2.default.createElement(
                    'div',
                    { style: { display: this.state.pagePrompter ? this.checkPrompter('initial') : 'none', margin: '0%' } },
                    '...'
                ),
                this.state.currentItems,
                _react2.default.createElement(
                    'div',
                    { style: { display: this.state.pagePrompter ? this.checkPrompter('last') : 'none', margin: '0%' } },
                    '...'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#', className: 'w3buttonActive', id: 'next', style: { display: this.state.displayNextBackPair ? 'inline-block' : 'none', pointerEvents: this.state.activeIndex === this.state.length ? 'none' : 'auto', backgroundColor: this.state.activeIndex === this.state.length ? '#ffffff' : '#0E6DB5', color: this.state.activeIndex === this.state.length ? '#0E6DB5' : '#ffffff' }, onClick: function onClick() {
                            return _this5.calcPage("next");
                        } },
                    '>'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#', className: 'w3buttonActive', id: 'last', style: { display: this.state.displayFirstLastPair ? 'inline-block' : 'none', pointerEvents: this.state.activeIndex === this.state.length ? 'none' : 'auto', backgroundColor: this.state.activeIndex === this.state.length ? '#ffffff' : '#0E6DB5', color: this.state.activeIndex === this.state.length ? '#0E6DB5' : '#ffffff' }, onClick: function onClick() {
                            return _this5.calcPage("last");
                        } },
                    '\xBB'
                )
            );
        }
    }]);

    return Pagination;
}(_react.Component);

exports.default = Pagination;
