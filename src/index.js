import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination';

class App extends Component {
    render() {
      return (
        <div className="App">
         <Pagination total={12} displayLimit={10} nextBackPair={false} initialFinalPair={true}/>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));


