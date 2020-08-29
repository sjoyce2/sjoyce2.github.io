import React, { useState, useRef } from 'react';
import { useOnClickOutside, componentDidMount } from './hooks';
import logo from './profile.jpg';
import Sidebar from './Sidebar';
import Burger from './Burger';
import './App.css';
import csLogo from './cs.png';
import jsLogo from './javascript.png';
import cppLogo from './cpp.jpg';
import pythonLogo from './python.png';
import htmlLogo from './html5.png';
import cssLogo from './css3.png';
import netLogo from './net.png';
import githubLogo from './github.png';
import mysqlLogo from './mysql.png';
import mongodbLogo from './mongodb.png';
import iisLogo from './iis.png';
import javaLogo from './java.png';
import reactLogo from './react.png';
import sqlLogo from './sql.png';

function App(){
    componentDidMount();
    return (
        <div className="App">
            <Header />
            <Content />
            <Summary />
            <Experience />
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
            {/* <h1 className="Header-name">
                Stephen Joyce
            </h1> */}
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
            </div>
        );
    }
}

// TODO: Make this portion interactive/responsive in some way
class Summary extends React.Component {
    render() {
        return (
            <div className="Summary">
                <h1 className="Summary-title">Technologies Used</h1>
                <div className="Summary-honeycomb">
                    <ul id="hexGrid">
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://docs.microsoft.com/en-us/dotnet/csharp/">
                                <img src={csLogo} alt="" />
                                <h1>C#</h1>
                                <p>Documentation</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://www.javascript.com/">
                                <img src={jsLogo} alt="" />
                                <h1>JavaScript</h1>
                                <p>Website</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://www.cplusplus.com/">
                                <img src={cppLogo} alt="" />
                                <h1>C++</h1>
                                <p>Documentation</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://www.python.org/">
                                <img src={pythonLogo} alt="" />
                                <h1>Python</h1>
                                <p>Website</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
                                <img src={htmlLogo} alt="" />
                                <h1>HTML5</h1>
                                <p>Developer Guide</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="http://www.css3.info/">
                                <img src={cssLogo} alt="" />
                                <h1>CSS3</h1>
                                <p>Information</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://dotnet.microsoft.com/">
                                <img src={netLogo} alt="" />
                                <h1>.NET Stack</h1>
                                <p>Overview</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://github.com/about">
                                <img src={githubLogo} alt="" />
                                <h1>Git/GitHub</h1>
                                <p>Description</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://www.mysql.com/">
                                <img src={mysqlLogo} alt="" />
                                <h1>MySQL</h1>
                                <p>Website</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://www.mongodb.com/">
                                <img src={mongodbLogo} alt="" />
                                <h1>MongoDB</h1>
                                <p>Website</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://www.iis.net/">
                                <img src={iisLogo} alt="" />
                                <h1>Microsoft IIS</h1>
                                <p>Website</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://www.java.com/en/">
                                <img src={javaLogo} alt="" />
                                <h1>Java</h1>
                                <p>Website</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://reactjs.org/">
                                <img src={reactLogo} alt="" />
                                <h1>React</h1>
                                <p>Website</p>
                            </a>
                            </div>
                        </li>
                        <li class="hex">
                            <div class="hexIn">
                            <a class="hexLink" href="https://www.microsoft.com/en-us/sql-server/sql-server-2019">
                                <img src={sqlLogo} alt="" />
                                <h1>SQL Server</h1>
                                <p>Tutorial</p>
                            </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <p className="Summary-data"></p>
            </div>
        );
    };
}

class Experience extends React.Component {
    render() {
        return (
            <div className="Experience">
                <h1 className="Experience-title">Experience</h1>
                <div className="Experience-entry">
                    <h3 className="Experience-company">Gestalt Diagnostics, LLC</h3>
                    <h4 className="Experience-position">Software Engineer</h4>
                    <p className="Experience-technologies">Technologies Used: C# (.NET Stack), JavaScript, IIS, React</p>
                    <p className="Experience-summary">Reduced image load time by 50% in the main platform</p>
                    <p className="Experience-summary">Continuously developed, integrated, and deployed new software and features</p>
                    <p className="Experience-summary">Integrated three new file reading systems, improving viewing speed by 25%, reducing file storage size by 50%, and creating the capability for viewing new image types</p>
                </div>
                <div className="Experience-entry">
                    <h3 className="Experience-company">Gestalt Diagnostics, LLC</h3>
                    <h4 className="Experience-position">Software Engineering Intern</h4>
                    <p className="Experience-technologies">Technologies Used: Python, C# (.NET Stack)</p>
                    <p className="Experience-summary">Researched and created machine learning models for automatic image alignment</p>
                    <p className="Experience-summary">Created new solutions for improving workflow efficiency</p>
                </div>
                <div className="Experience-entry">
                    <h3 className="Experience-company">Gonzaga University</h3>
                    <h4 className="Experience-position">Student Researcher</h4>
                    <p className="Experience-summary">Contributed to disproving the existence of certain methods of polygon dissection</p>
                    <p className="Experience-summary">Used mathematical formulae and logic to discover non-convex dissections</p>
                    <p className="Experience-summary">Reimagined strategic approaches to proving case validity</p>
                </div>
            </div>
        );
    };
}

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <div className="contactLinkHolder">
                    <a href="https://www.linkedin.com/in/stephenpjoyce" className="contactLink">LinkedIn</a>
                    <a href="mailto: sjoyce081@gmail.com" className="contactLink">Email</a>
                </div>
                <p className="copyright">Copyright © 2020 Stephen Joyce</p>
            </div>
        )
    }
}

export default App;
