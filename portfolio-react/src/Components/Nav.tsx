import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const Container = styled.div`
    width: 99vw;
    background-color: #1d1d1f;
    height: 40px;
    color: white;
    font-size: 1rem;
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: 3;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
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
                        <LinkItem>Home</LinkItem>
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