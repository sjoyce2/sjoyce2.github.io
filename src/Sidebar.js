import React from 'react';
import { StyledSidebar } from './Sidebar.styled';

const Sidebar = ({open, setOpen}) => {
    return (
        <StyledSidebar open={open}>
            <div className="Sidebar-about">
                <a href="#content">Stephen Joyce</a>
            </div>
            <div className="Sidebar-exp">
                <a href="#summary">Technologies Used</a>
            </div>
            <div className="Sidebar-contact">
                <a href="#experience">Experience</a>
            </div>
        </StyledSidebar>
    )
}

export default Sidebar;