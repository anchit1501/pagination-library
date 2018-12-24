import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination';

class App extends Component {
    render() {
      return (
        <div className="App">
         <Pagination number={12}/>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));


