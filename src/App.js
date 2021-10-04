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

const App = () => {
    componentDidMount();
    return (
        <div className="App">
            <Header />
            <Content />
            <Summary />
            <Experience />
            <Volunteering />
            <Footer />
        </div>
    )
}

const Header = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <div className="Header" ref={node}>
            <Burger open={open} setOpen={setOpen}/>
            <Sidebar open={open} />
        </div>
    )
}

const Content = () => {
    return (
        <div className="Content" id="content">
            <a href="https://www.linkedin.com/in/stephenpjoyce" className="Content-logo-holder">
                <img src={logo} className="Content-logo" alt="logo" />
                <p className="Content-name">Stephen Joyce</p>
                <p className="Content-position">Software Engineer</p>
            </a>
        </div>
    );
}

const Summary = () => {
    return (
        <div className="Summary" id="summary">
            <h1 className="Title">Technologies Used</h1>
            <div className="Summary-honeycomb" id="summary-honeycomb">
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
}

const Experience = () => {
    return (
        <div className="Experience" id="experience">
            <h1 className="Title">Experience</h1>
            <div className="Entry">
                <h2 className="Experience-company">Prescryptive Health, Inc.</h2>
                <h3 className="Experience-position">Software Engineer</h3>
                <p className="Technologies">Technologies Used: TypeScript(React), C# (.NET Stack)</p>
                <ul>
                    <li className="Description">- Collaborated with team members to create a COVID-19 test and vaccine scheduling platform</li>
                    <li className="Description">- Built a web application for patients to manage their appointments and view their test results</li>
                    <li className="Description">- Quickly worked to release a platform for patients to easily transfer a prescription to reduce
                        prescription costs</li>
                    <li className="Description">- Spearheaded the discussion around diversity, equity, and inclusion at Prescryptive</li>
                </ul>
            </div>
            <div className="Entry">
                <h2 className="Experience-company">Gestalt Diagnostics, LLC</h2>
                <h3 className="Experience-position">Software Engineer</h3>
                <p className="Technologies">Technologies Used: C# (.NET Stack), JavaScript, IIS, React</p>
                <ul>
                    <li className="Description">- Reduced image load time by 50% in the main platform</li>
                    <li className="Description">- Continuously developed, integrated, and deployed new software and features</li>
                    <li className="Description">- Integrated three new file reading systems, improving viewing speed by 25%, reducing file storage size by 50%, and creating the capability for viewing new image types</li>
                </ul>
            </div>
            <div className="Entry">
                <h2 className="Experience-company">Gestalt Diagnostics, LLC</h2>
                <h3 className="Experience-position">Software Engineering Intern</h3>
                <p className="Technologies">Technologies Used: Python, C# (.NET Stack)</p>
                <ul>
                    <li className="Description">- Researched and created machine learning models for automatic image alignment</li>
                    <li className="Description">- Created new solutions for improving workflow efficiency</li>
                </ul>
            </div>
        </div>
    );
}

const Volunteering = () => {
    return (
        <div className="Volunteering">
            <h1 className="Title">Volunteering</h1>
            <div className="Entry">
                <ul>
                    <li className="Description">- Founding board member of a not-for-profit aimed to create an affirming space for queer people to celebrate their authentic selves</li>
                    <li className="Description">- Assisted a local high school Coding Club with learning Python to program a Raspberry Pi robot</li>
                </ul>
            </div>
        </div>
    )
}

const Footer = () => {
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

export default App;
