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
    padding-bottom: 5rem;
`

const Header = styled.div`
    font-size: 4rem;
    font-weight: 700;
    padding-top: 5rem;
`

const EmailHeader = styled.div`
    font-weight: 700;
    padding-top: 5rem;
    font-size: 2rem;
    font-family: 'Courier New', Courier, monospace;
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