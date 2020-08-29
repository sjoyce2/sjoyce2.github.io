import React from 'react';
import { StyledSidebar } from './Sidebar.styled';

const Sidebar = ({open, setOpen}) => {
    return (
        <StyledSidebar open={open}>
            <div className="Sidebar-about">
                <a href="">About Me</a>
            </div>
            <div className="Sidebar-exp">
                <a href="">Experience</a>
            </div>
            <div className="Sidebar-contact">
                <a href="">Contact</a>
            </div>
        </StyledSidebar>
    )
}

export default Sidebar;