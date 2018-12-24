import React, { Component } from 'react';
import './Pagination.css';


class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: [],
            length: this.props.total,
            activeIndex: 1,
            displayLimit:this.props.displayLimit
        }
    }
    componentDidMount = (p) => {

        let pageList = [];
        let i = 0;
        for (i = 0; i < this.state.displayLimit; i++) {
            pageList.push(<a href="#section" onClick={() => { this.setState({ activeIndex: i + 1 }) }} style={{ backgroundColor: this.state.activeIndex === i ? 'blue' : 'fff' }}>{i + 1}</a>)
        }
        this.setState({ page: pageList });


    }

    render() {
        return (
            <div className="pagination">
                <a href="#section" style={{display:this.props.initialFinalPair?'block':'none'}}>&laquo;</a>
                <a href="#section" style={{display:this.props.nextBackPair?'block':'none'}}>&lt;</a>
                {this.state.page}
                <a href="#section"style={{display:this.props.nextBackPair?'block':'none'}}>&gt;</a>
                <a href="#section" style={{display:this.props.initialFinalPair?'block':'none'}}>&raquo;</a>
            </div>
        );
    }
}
Pagination.defaultProps = {
    total: 12,
    displayLimit: 10,
    nextBackPair:false,
    initialFinalPair:true
}

export default Pagination;