import React, { useState } from 'react';
import { StyledSidebar } from './Sidebar.styled';
import './Sidebar.css'

const Sidebar = ({open}) => {
    return (
        <StyledSidebar open={open}>
            <div className="Sidebar-about">About Me</div>
            <div className="Sidebar-exp">Experience</div>
            <div className="Sidebar-contact">Contact</div>
        </StyledSidebar>
    )
}

export default Sidebar;