import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const Container = styled.div`
    width: 100vw;
    background-color: #1d1d1f;
    height: 40px;
    color: white;
    font-size: 1rem;
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: 3;

    @media screen and (max-width: 800px) {
        display: none;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 1000px;
    max-width: 1200px;

    @media screen and (max-width: 1250px) {
        min-width: 800px;
    }
`

const Title = styled.h1`
    font-weight: 700;
`

const Links = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

const LinkItem = styled.p`
    color: white;
    text-decoration: none;
    &:visited {
        color: blue;
        text-decoration: none;
    }
`



const Nav = () => {
    return (
        <Container>
            <Content>
                <Title>Muney</Title>
                <Links>
                    <HashLink smooth to="/#home">
                        <LinkItem style={{ textDecoration: 'none' }}>Home</LinkItem>
                    </HashLink>
                    <HashLink smooth to="/#about">
                        <LinkItem>About</LinkItem>
                    </HashLink>
                    <HashLink smooth to="/#projects">
                        <LinkItem>Projects</LinkItem>
                    </HashLink>
                    <HashLink smooth to="/#contact">
                        <LinkItem>Contact</LinkItem>
                    </HashLink>
                </Links>
            </Content>
        </Container>
    )
}

export default Nav