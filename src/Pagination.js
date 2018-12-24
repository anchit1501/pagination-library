import React, { Component } from 'react';
import './Pagination.css';


class Pagination extends Component {
    constructor(props){
        super(props)
    this.state={page:[],
    length:this.props.number,
    activeIndex:1
}
    }
    componentDidMount=(p)=>{

        let pageList = [];
        let i=0;
        for (i = 0; i < this.state.length; i++) {
            pageList.push(<a href="#section" onClick={()=>{this.setState({activeIndex:i+1})}}style={{backgroundColor:this.state.activeIndex===i?'blue':'fff'}}>{i+1}</a>)
        }
        this.setState({page:pageList});


    }
  
    render() {
        return (
            <div className="pagination">
                <a href="#section">&laquo;</a>
                {this.state.page}
                <a href="#section">&raquo;</a>
            </div>
        );
    }
}
Pagination.defaultProps = {
    number: 10
}

export default Pagination;