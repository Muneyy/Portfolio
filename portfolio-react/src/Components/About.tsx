import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const Container = styled.div`
    background-color: #1D1D1F;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
    border-radius: 25px;
    max-width: 1000px;
    margin: auto;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */

    @media screen and (max-width: 800px) {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
`

const Header = styled.div`
    font-size: 4rem;
    font-weight: 700;

    @media screen and (max-width: 800px) {
        font-size: 3rem;
    }
    
`

const Content = styled.div`
    border-radius: 10px;
    padding: 60px;
`

const ContentText = styled.p`
    font-size: 1.2em;
    font-weight: 400;
    margin-bottom: 1.5em;
`

const ContentHeader = styled.h2`
    font-size: 1.5em;
    margin-bottom: 1.5em;
`

const projectVariants: Variants = {
    offscreen: {
        opacity:0,
        y: 50
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "linear"
      }
    }
  };

const About = () => {
    return (
            <Container id='about'>
                <Header>Hi there!</Header>
                <Content>
                    <ContentText>
                        I am an aspiring Web Developer based in the Philippines who loves anything
                        programming-related!
                    </ContentText>
                    <ContentText>
                        Right now, I am looking for an internship/part-time job for the coming summer
                        starting on June 2023.
                    </ContentText>
                    <ContentHeader>
                        More About Me
                    </ContentHeader>

                    <ContentText>
                        I am currently an undergraduate student taking up BS Electronics Engineering in
                        the University of the Philippines - Diliman who have found a passion for web development. 
                        I am hoping to graduate by the year 2023!
                    </ContentText>
                    <ContentText>
                        My journey as a web developer started during the summer vacation on June 2022 
                        when I took up the Full Stack curriculum provided by The Odin Project as a hobby. 
                        I soon discovered a passion for web development and it has been a blast so far!
                    </ContentText>
                    <ContentText>
                        Take a look at what I have built during these past two and a half months.
                    </ContentText>

                </Content>
            </Container>
    )
}

export default About