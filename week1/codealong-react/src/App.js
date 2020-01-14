import React from 'react';
import './App.css';
import Button from './Components/Button';

class App extends React.Component {
  nextQuoteClickHandler() {
    console.log('hi');
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <Button buttonDisplayName="Next Quote" clickHandler={this.nextQuoteClickHandler} />
      </div>
    );
  }

}

export default App;
