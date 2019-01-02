import React, { Component } from 'react';
import './Pagination.css';


class Pagination extends Component {

    constructor(props) {
        super(props)
        this.state = {
            length: 10,
            activeIndex: 1,
            currentItems: [],
            displayFirstLastPair: true,
            displayNextBackPair: true,

        }
    }

    componentDidMount() {
        this.setState(
            {
                length: this.props.total,
                displayFirstLastPair: this.props.nextBackPair,
                displayNextBackPair: this.props.initialFinalPair
            }, () => this.pageList(1, 10));

    }

    calcPage = (id) => {
        if (this.state.activeIndex >= 10) {

        }

        switch (id) {
            case "first": this.setState({ activeIndex: 1 }, () => { this.pageList(1, 10); });
                this.pageList(1, 10);
                break;

            case "last": this.setState({ activeIndex: this.state.length }, () => { this.pageList(this.state.length - 10, this.state.length); });
                break;

            case "next": {
                if (this.state.activeIndex > 9) {
                    this.setState({ activeIndex: this.state.activeIndex + 1 }, () => { this.pageList(this.state.activeIndex - 8, this.state.activeIndex + 1); });
                }
                else if (this.state.activeIndex < 10) {
                    this.setState({ activeIndex: this.state.activeIndex + 1 }, () => { this.pageList(1, 10); });
                }
                break;
            }

            case "back":

                if (this.state.activeIndex === parseInt(this.state.currentItems[0].props.id)) {
                    console.log('2',typeof(this.state.currentItems[0].props.id) );
                    this.setState({ activeIndex: this.state.activeIndex - 1 }, () => { this.pageList(this.state.activeIndex, this.state.activeIndex + 9 > this.state.length - 1 ? this.state.length - 1 : this.state.activeIndex + 9); });
                }
                else {
                    console.log('1');
                    this.setState({ activeIndex: this.state.activeIndex - 1 }, () => { console.log(this.state.currentItems[0].props.id, this.state.currentItems[this.state.currentItems.length - 1].props.id);this.pageList(this.state.currentItems[0].props.id, this.state.currentItems[this.state.currentItems.length - 1].props.id); });
                }
                break;

            default: {
                this.setState({ activeIndex: id }, () => {console.log('default called'); this.pageList(this.state.currentItems[0].props.id, this.state.currentItems[this.state.currentItems.length - 1].props.id); });
                break;
            }

        }

    }

    pageList = (initial, final) => {

        if (final > this.state.length) {
            final = this.state.length;
        }
        if (initial < 1) {
            initial = 1;
            if (final > this.state.length) {
                final = this.state.length;
            }
            else {
                final = initial + 9;
            }
        }
        else if (final >= this.state.length) {
            final = this.state.length;
            initial = final - 9;
            if (initial < 0) {
                initial = 1;
            }

        }

        let items = [];
        for (let number = initial; number <= final; number++) {
            items.push(
                <a key={number} href="#" id={number} className="w3button" style={{pointerEvents:this.state.activeIndex===number?'none':'auto', backgroundColor: (this.state.activeIndex === number) ? "#0E6DB5" : "#ffffff", color: (this.state.activeIndex === number) ? "#ffffff" : "" }} onClick={() => {console.log('check',this.checkActive(1));this.setState({activeIndex:number});this.calcPage(number)}}>{number}</a>
            );

        }
        this.setState({ currentItems: items });
        this.handleLangChange();

    }

    checkActive = (number,str) => {
        console.log('number',number,str);
        console.log('State',this.state.activeIndex);
        if (this.state.activeIndex === number) {
            return true;
        }
        else {
            return false;
        }
    }

    handleLangChange = () => {
        this.props.onSelectLanguage(this.state.activeIndex);
    }

    render() {
        console.log('abc',typeof(this.state.activeIndex),typeof(1),this.state.activeIndex);
        return (
            <div className="alignCenter">
            <a href="#" className="w3buttonActive" id="first" style={{ display: this.state.displayFirstLastPair ? 'inline-block' : 'none', pointerEvents: this.state.activeIndex===1 ? 'none' : 'auto', backgroundColor: this.state.activeIndex===1 ? '#ffffff' : '#0E6DB5', color: this.state.activeIndex===1 ? '#0E6DB5' : '#ffffff' }} onClick={() => this.calcPage("first")}>&laquo;</a>
            <a href="#" className="w3buttonActive" id="back" style={{ display: this.state.displayNextBackPair ? 'inline-block' : 'none', pointerEvents: this.state.activeIndex===1 ? 'none' : 'auto', backgroundColor: this.state.activeIndex===1 ? '#ffffff' : '#0E6DB5', color: this.state.activeIndex===1 ? '#0E6DB5' : '#ffffff' }} onClick={() => this.calcPage("back")}>&lt;</a>
            {this.state.currentItems}
            <a href="#" className="w3buttonActive" id="next" style={{ display: this.state.displayNextBackPair ? 'inline-block' : 'none', pointerEvents: this.checkActive(this.state.length) ? 'none' : 'auto', backgroundColor: this.checkActive(this.state.length) ? '#ffffff' : '#0E6DB5', color: this.checkActive(this.state.length) ? '#0E6DB5' : '#ffffff' }} onClick={() => this.calcPage("next")}>></a>
            <a href="#" className="w3buttonActive" id="last" style={{ display: this.state.displayFirstLastPair ? 'inline-block' : 'none', pointerEvents: this.checkActive(this.state.length) ? 'none' : 'auto', backgroundColor: this.checkActive(this.state.length) ? '#ffffff' : '#0E6DB5', color: this.checkActive(this.state.length) ? '#0E6DB5' : '#ffffff' }} onClick={() => this.calcPage("last")}>&raquo;</a>
            </div>
            );
    }
}
export default Pagination;