import styled from 'styled-components';

export const StyledSidebar = styled.div`
    text-align: center;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #d8dbd7;
    border: none;
    padding: 10px;
    font-size: calc(10px + 2vmin);
    min-width: 100vw;
    z-index: -10;
    transition: all 0.3s linear;
    transform-origin: 1px;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
`;