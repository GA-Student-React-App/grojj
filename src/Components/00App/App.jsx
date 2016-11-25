import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchForm: ''
    };
  }

  revealer(e) {
    console.log('revealing')
    e.currentTarget.nextSibling.style.display = 'block';
  }

  hider(e) {
    e.currentTarget.nextSibling.style.display = 'none';
  }

  render(){
    return (
      <div>
        <header>
          <h3>Grojj.</h3>
          {/* <h3 className="test">Test</h3> */}
          <button id='showLogin' className='button'>Login or Sign Up</button>
          <nav>
<<<<<<< HEAD
            {/* <div onMouseEnter={this.revealer} onMouseOut={this.hider}>Search
              <input type="text" placeholder="search"/>
              <button>Go!</button>
            </div> */}
            <div className='nButtons'>myStoreFront</div>
            <div className='nButtons'>Messages</div>
=======
            <div className="nButton" onMouseEnter={this.revealer} onMouseOut={this.hider}>Search
              <input type="text" placeholder="search"/>
              <button>Go!</button>
            </div>
            <div className="nButton">myStoreFront</div>
            <div className="nButton">Messages</div>
>>>>>>> 1c4c87c8709cb13a39bb5f26302e8d8f38373279
          </nav>
        </header>
        <main>
        </main>
        <footer>
          <div>copyright nonsense, about us</div>
        </footer>
      </div>
    );
  }
}

export default App;
