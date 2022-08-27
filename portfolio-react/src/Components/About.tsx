import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
    background-color: #61481C;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 10rem;
`

const Header = styled.div`
    font-size: 6rem;
    font-weight: 700;
    border-bottom: 5px solid #E6B325;
    margin-bottom: 60px;
`

const Content = styled.div`
    border: 5px solid #E6B325;
    border-radius: 10px;
    padding: 60px;
    max-width: 800px;
`

const ContentText = styled.p`
    font-size: 2rem;
    font-weight: 400;
`

const About = () => {
    return (
        <Container>
            <Header>About Me</Header>
            <Content>
                <ContentText>
                    I am an aspiring Web Developer based in the Philippines who loves anything
                    programming-related! 
                </ContentText>
            </Content>
        </Container>
    )
}

export default About