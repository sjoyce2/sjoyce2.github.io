import styled from 'styled-components';

export const StyledSidebar = styled.div`
    text-align: center;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #ae9e83;
    border: none;
    padding: 10px;
    font-size: calc(10px + 2vmin);
    min-width: 100vw;
    z-index: -10;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};

    &:focus {
        outline: none;
    }

    // div {
    //     width: 2rem;
    //     height: 0.25rem;
    //     background: ${({ theme }) => theme.primaryLight};
    //     border-radius: 10px;
    //     transition: all 0.3s linear;
    //     position: relative;
    //     transform-origin: 1px;
    // }
`;