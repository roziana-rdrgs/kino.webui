import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--main-blue);
    width: 70vw;
    height: 100vh;
    margin: 0px;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: left;
`;


export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 100vh;
    right: 0px;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 2rem;
`;


export const StyledButton = styled.button`
    width: 200px;
    height: 52px;
    background: var(--main-blue);
    color: var(--white);
    font-weight: 700;
    outline: none;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border: none;

    &:hover{
        background: var(--secondary-blue);
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
`;

export const TextContainer = styled.p`
    color: var(--main-blue, #6883C8);
    width: 250px;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    left: 2rem;
    top: 150px;
`;