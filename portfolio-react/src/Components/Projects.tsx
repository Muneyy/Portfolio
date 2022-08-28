import React from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import ProjectItem from './SubComponents/Project';
import ProjectList from './ProjectList';
const uniqid = require('uniqid');



const Container = styled.div`
    background-color: #313132;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15rem;
    padding-top: 5rem;
`

const Header = styled.div`
    font-size: 4rem;
    font-weight: 700;
    border-bottom: 5px solid #42855B;
    margin-bottom: 60px;
`

type ProjectObject = {
    title: string,
    desc: string,
    linkCode: string,
    linkLive: string,
    imgSrc: string,
}

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

const Projects = () => {

    return (
        <Container>
            <Header>Projects</Header>
            <>
            {/*
                // @ts-ignore */}
            {ProjectList.map((project: ProjectObject) => {
                return (
                        <motion.div 
                            initial = "offscreen"
                            whileInView= "onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            id = {uniqid()}
                            variants = {projectVariants}
                        >
                            <ProjectItem
                                title = {project.title}
                                desc = {project.desc}
                                linkCode = {project.linkCode}
                                linkLive = {project.linkLive}
                                imgSrc = {project.imgSrc}
                            />
                        </motion.div>
                )
            })}
            </>
        </Container>
    )
}

export default Projects