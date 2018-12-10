import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Banner from './components/Banner';
import Results from './components/Results';

import Footer from './components/footer';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }


  render() {
    var appToLoad;

    if (this.state.data.length > 0) {
      appToLoad = <Results data={this.state.data} />;
    } else {
      appToLoad = <Banner dataResponseHandler={data => {
        const filteredData = data.filter(item => {
          if (new Date(item['Event End Timestamp']) > new Date('2018-01-01')) return true;
          return false;
        });
        this.setState({
          data: filteredData,
        });
      }} />;
    }

    return (
      <div className="App">
        {appToLoad}
        {/*<Footer />*/}
      </div>

    );
  }
}

export default App;
