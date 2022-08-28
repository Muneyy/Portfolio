import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectItem from './SubComponents/Project';
import ProjectList from './ProjectList';


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

type ProjectObject = {
    title: string,
    desc: string,
    linkCode: string,
    linkLive: string,
    imgSrc: string,
}

const Projects = () => {

    return (
        <Container>
            <Header>Projects</Header>
            <>
            {/*
                // @ts-ignore */}
            {ProjectList.map((project: ProjectObject) => {
                return (
                        <ProjectItem
                            title = {project.title}
                            desc = {project.desc}
                            linkCode = {project.linkCode}
                            linkLive = {project.linkLive}
                            imgSrc = {project.imgSrc}
                        />
                )
            })}
            </>
        </Container>
    )
}

export default Projects