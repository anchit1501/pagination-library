import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination';

class App extends Component {
    constructor(props){
      super(props)
      this.state=({
        value: 1
      });
    }
    
    handleLanguage=(e)=>{
      this.setState({
        value:e
      });
      console.log('val',e)
    }
    render() {
      return (
        <div className="App">
         <Pagination total={20}  nextBackPair={true} initialFinalPair={true} onPageChange={this.handleLanguage} pagePrompter={true}/>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));


