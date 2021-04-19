import React from 'react'
import {Header} from './layout/Header'
import {Footer} from './layout/Footer'
import {Main} from './layout/Main'

import {MovieT} from './components/MovieT'


class App extends React.Component{

  constructor() {
    super();

    //console.log(props.res);
    this.state = {
      movies: []
    }
  }





  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Header />
          <Main/>
          <Footer />
        </React.Fragment>
      </div>
    )
  }
}

export default App;
