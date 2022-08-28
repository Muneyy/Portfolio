import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconContext } from "react-icons";
import { SiTypescript, SiCss3, SiJavascript, SiReact, SiGithub, SiWebpack, SiHtml5, SiStyledcomponents, SiMongodb, SiPython, SiLinux } from "react-icons/si";

const HeaderContainer = styled.div`
   background-color: #483838;
   color: white;
   display: flex;
   flex-flow: column nowrap;
   gap: 66px;
   /* height: 100vh; */
   padding-bottom: 8em;
   
`

const HeaderName = styled.h2`
    font-size: 5rem;
    font-weight: 300;
    padding-left: 5px;
    transform: translate(0, 20%);
`

const HeaderText = styled.h1`
    font-size: 8rem;
    font-weight: 900;
`

const HeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`

const HeaderTechnologies = styled.div`
    border: 5px solid #90B77D;
    margin: 0 auto;
    padding: 40px 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    max-width: 1000px;
`

const HeaderTechnologiesTitle = styled.h1`
    font-size: 3rem;
    font-weight: 500;
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
        top: -30%;
        opacity: 0;
        transition: 0.3s;
    }

    li:hover > span {
        opacity: 1;
        transform: translate(0, -10%);
    }
`


const Intro = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                <motion.div
                    initial = { { opacity: 0, y: -20 } }
                    animate = { { opacity: 1, y: 0 } }
                    transition = {{ duration: 0.5 }}
                >
                    <HeaderName>
                        ivan martinez
                    </HeaderName>
                    <HeaderText>
                        FRONT END<br></br>DEVELOPER
                    </HeaderText>
                </motion.div>
            </HeaderTitle>
            <IconContext.Provider value={ {size: "4.5rem", color: "#D2D79F"} }>
                <motion.div
                    initial = { { opacity: 0 } }
                    animate = { { opacity: 1 } }
                    transition = {{ duration: 0.5 }}
                >
                <HeaderTechnologies>
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
                </HeaderTechnologies>
                </motion.div>
            </IconContext.Provider>
        </HeaderContainer>
    )
}

export default Intro