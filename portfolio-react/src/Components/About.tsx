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
`

const Header = styled.div`
    font-size: 4rem;
    font-weight: 700;
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
        <motion.div 
            initial = "offscreen"
            whileInView= "onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants = {projectVariants}
        >
        <Container>
            <Header>About Me</Header>
            <Content>
                <ContentText>
                    I am an aspiring Web Developer based in the Philippines who loves anything
                    programming-related!
                </ContentText>
                <ContentText>
                    I am an undergraduate student taking up BS Electronics Engineering in
                    the University of the Philippines - Diliman who have found a passion for web development. 
                    I am hoping to graduate by the year 2023!
                </ContentText>
                <ContentText>
                    My journey as a web developer started during the summer vacation on June 2022 
                    when I took up the Full Stack curriculum provided by The Odin Project as a hobby. 
                    I soon discovered a passion for web development and it has been a blast so far!
                    Currently, I have studied up to the front-end development part of the curriculum
                    but I am planning to study the back-end side of things the next vacation I get as 
                    my college classes are coming up soon.
                </ContentText>
                <ContentText>
                    Take a look at what I have built during these past 2 and a half months 
                    and disclaimer: I am indeed planning to refactor and clean up my project
                    codes during my free time.
                </ContentText>

            </Content>
        </Container>
        </motion.div>
    )
}

export default About