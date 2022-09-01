import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IconContext } from "react-icons";
import styled from 'styled-components';

const Container = styled.div`
    background-color: #1d1d1f;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 5rem;

    @media screen and (max-width: 800px) {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    
`

const Header = styled.div`
    font-size: 4rem;
    font-weight: 700;
    

    @media screen and (max-width: 800px) {
        font-size: 3rem;
    }
`

const EmailHeader = styled.div`
    font-weight: 700;
    padding-top: 5rem;
    font-size: 2rem;
    font-family: 'Courier New', Courier, monospace;

    @media screen and (max-width: 800px) {
        font-size: calc(1rem + 1.5vw);
        padding-top: 2rem;
    }

    @media screen and (max-width: 400px) {
        font-size: 1rem;
    }

`

const ButtonLinks = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    gap: 50px;
    padding-top: 3rem;
`


const Contact = () => {
    return (
        <Container id='contact'>
            <Header>Contact me</Header>
            <EmailHeader>kcarlivanmartinez@gmail.com</EmailHeader>
            <ButtonLinks>
                <IconContext.Provider value={ {size: "5rem", color: "white"} }>
                    <a href="https://github.com/Muneyy" target="_blank">
                        <SiGithub />
                    </a>
                    <a href="https://github.com/Muneyy" target="_blank">
                        <SiLinkedin />
                    </a>
                </IconContext.Provider>
            </ButtonLinks>
        </Container>
    )
}

export default Contact