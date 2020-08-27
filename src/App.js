import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import logo from './profile.jpg';
import Sidebar from './Sidebar';
import Burger from './Burger';
import './App.css';

function App(){
    return (
        <div className="App">
            <Header />
            <Content />
            <Summary />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}

function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <div className="Header" ref={node}>
            <h1 className="Header-name">
                Stephen Joyce
            </h1>
            <Burger open={open} setOpen={setOpen}/>
            <Sidebar open={open} />
        </div>
    )
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

class Summary extends React.Component {
    render() {
        return (
            <div className="Summary">
            </div>
        );
    };
}

class Experience extends React.Component {
    render() {
        return (
            <div className="Experience"></div>
        );
    };
}

class Contact extends React.Component {
    render() {
        return (
            <div className="Contact"></div>
        );
    };
}

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer"></div>
        )
    }
}

export default App;
