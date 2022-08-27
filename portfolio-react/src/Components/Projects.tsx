import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
    background-color: #3F4E4F;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15rem;
    padding-top: 5rem;
`

const Header = styled.div`
    font-size: 6rem;
    font-weight: 700;
    border-bottom: 5px solid #42855B;
    margin-bottom: 60px;
`

const Project = styled.div`
    display: grid;
    grid-template-columns: 50% 1fr;
`

const ProjectText = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 80%;
`

const ProjectTitle = styled.h1`
    font-size: 3rem;
`

const ProjectDescription = styled.p`
    font-size: 1.5rem;
    margin-bottom: 16px;
    opacity: 0.9;
`
const ProjectLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`

const ProjectLink = styled.a`
    text-decoration: none;
`

const ProjectButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;

    &:focus {
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    &:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-1px);
    }

    &:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    }
`


const ProjectImage = styled.div`
    padding: 20px;
    img {
        width: 800px;
        height: auto;
        background-size: contain;

    }
`

const Projects = () => {
    return (
        <Container>
            <Header>Projects</Header>
            <Project>
                <ProjectText>
                    <ProjectTitle>Shopping Cart</ProjectTitle>
                    <ProjectDescription>
                        A Pokemon-themed shopping cart project built with TypeScript
                        and React with data fetched from PokeAPI using async functions
                        and promises.
                    </ProjectDescription>
                    <ProjectLinks>
                        <ProjectLink href='https://github.com/Muneyy/TOP-shopping-cart' target="_blank">
                            <ProjectButton>View Code</ProjectButton>
                        </ProjectLink>
                        <ProjectLink href='https://muneyy.github.io/TOP-shopping-cart/' target="_blank">
                            <ProjectButton>Live Preview</ProjectButton>
                        </ProjectLink>
                    </ProjectLinks>
                </ProjectText>
                <ProjectImage>
                    <img src={require("../Images/shopping-cart.jpeg")}/>
                </ProjectImage>
            </Project>

        </Container>
    )
}

export default Projects