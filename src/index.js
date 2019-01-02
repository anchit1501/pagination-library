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
         <Pagination total={12}  nextBackPair={true} initialFinalPair={true} onSelectLanguage={this.handleLanguage}/>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));


