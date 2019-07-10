This is a Simple Pagination Library created using React js which returns the page number selected by end-user

## Available Features

1. Total number of pages 
2. Next Page & Previos Page Buttons
3. Jump to First Page & Jump to Last Page Buttons
4. Page Prompter

## How to Install

Install react-pagination with npm:

```npm i react-pagination-plugin```

## How to use

Use import statement to use the Package -

```import Pagination from 'react-paginaion'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15
    };
  }
  handlePageUpdate(e){
    console.log(e);
    this.setState({activePage:e});
  }
  render() { 
    return (
      <div>
          <Pagination 
            total={20}  
            nextBackPair={true} 
            initialFinalPair={true} 
            onPageChange={this.handlePageUpdate} 
            pagePrompter={true}/>
      </div>
    );
  }
}```       

## Props

| Name |  Type |  Default | Description |
| --- | --- | --- | --- |
| total | Number | 15 | **Required** Total count of items which you are going to display |
| nextBackPair | Boolean | false | To show/hide buttons for navigating through pages |
| initialFinalPair | Boolean | false | To show/hide buttons to jump directly to first and last page |
| pagePrompter | Boolean | false | To show/hide ... which prompt any upcoming hidden pages in both directions  |


## Keywords
react pagination react-pagination paginator pagination-library-react
