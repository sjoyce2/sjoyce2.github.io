import React from 'react';
import logo from './profile.jpg';
import Sidebar from './Sidebar';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                {/* <Footer /> */}
            </div>
        )
    }
}

class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menuOpen: false,
        }
    }
    render() {
        return (
            <div className="Header">
                <h1 className="Header-name">
                    Stephen Joyce
                </h1>
                <Sidebar open={this.state.menuOpen}/>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div className="Content">
                <div className="Content-logo-holder">
                    <img src={logo} className="Content-logo" alt="logo" />
                    <p className="Content-name">
                        Stephen Joyce
                    </p>
                </div>
                {/* <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a> */}
            </div>
        );
    }
}

export default App;
