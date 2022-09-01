import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconContext } from "react-icons";
import { SiTypescript, SiCss3, SiJavascript, SiReact, SiGithub, SiWebpack, SiHtml5, SiStyledcomponents, SiMongodb, SiPython, SiLinux } from "react-icons/si";

const HeaderTechnologiesContainer = styled.div`
    /* border: 3px solid #90B77D; */
    border-radius: 10px;
    background-color: #1D1D1F;
    margin: 0 auto;
    padding: 50px 80px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 800px;

    @media screen and (max-width: 800px) {
        padding: 2rem 0;
        width: 100vw;
        box-sizing: border-box;
        padding: 2rem 2rem;
    }
`

const HeaderTechnologiesTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;

    @media screen and (max-width: 800px) {
        font-size: 1.5rem;
    }
`

const HeaderTechnologiesList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    li > span {
        position: absolute;
        top: -40%;
        opacity: 0;
        transition: 0.3s;
        font-size: 0.8rem;
    }

    li:hover > span {
        opacity: 1;
        transform: translate(0, -10%);
    }

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 50% 1fr;
        gap: 8px;

        li {
            align-items: flex-start;
        }

        li > span {
        position: absolute;
        top: 10%;
        left: 50%;
        opacity: 1;
        transition: 0.3s;
        font-size: 0.8rem;
        font-weight: 500;
        }
    }

    @media screen and (max-width: 400px) {
        grid-template-columns: 1fr 1fr;

        li > span {
            font-size: 0.8rem;
        }
    }

    @media screen and (max-width: 300px) {
        grid-template-columns: 1fr 1fr;
        gap: 30px;

        li {
            align-items: center;
        }

        li > span {
            left: 15%;
            top: -30%;
        }
    }

`

const HeaderTechnologies = () => {
    return (
        <HeaderTechnologiesContainer>
            <HeaderTechnologiesTitle>
                Technologies
            </HeaderTechnologiesTitle>
            <HeaderTechnologiesList>
                    <li>
                        <span>HTML 5</span>
                        <SiHtml5 />
                    </li>
                    <li>
                        <span>CSS 3</span>
                        <SiCss3 />
                    </li>
                    <li>
                        <span>Linux</span>
                        <SiLinux />
                    </li>
                    <li>
                        <span>GitHub</span>
                        <SiGithub />
                    </li>
                    <li>
                        <span>Webpack</span>
                        <SiWebpack />
                    </li>
                    <li>
                        <span>JavaScript</span>
                        <SiJavascript />
                    </li>
                    <li>
                        <span>TypeScript</span>
                        <SiTypescript />
                    </li>
                    <li>
                        <span>React</span>
                        <SiReact />
                    </li>
                    <li>
                        <span>Styled Components</span>
                        <SiStyledcomponents />
                    </li>
                    <li>
                        <span>Python</span>
                        <SiPython />
                    </li>
            </HeaderTechnologiesList>
        </HeaderTechnologiesContainer>
    )
}

export default HeaderTechnologies;