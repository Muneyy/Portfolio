import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconContext } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTypescript, SiCss3, SiJavascript, SiReact, SiGithub, SiWebpack, SiHtml5, SiStyledcomponents, SiMongodb } from "react-icons/si";

const HeaderContainer = styled.div`
   height: 100vh;
   background-color: #483838;
   color: white;
   display: flex;
   flex-flow: column wrap;
   gap: 66px;
   
`

const HeaderName = styled.h2`
    font-size: 5rem;
    font-weight: 300;
    padding-left: 5px;
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
    margin: 0 25rem;
    padding: 40px 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 25px;
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
                        Technologies:
                    </HeaderTechnologiesTitle>
                    <HeaderTechnologiesList>
                            <SiHtml5 />
                            <SiCss3 />
                            <SiGithub />
                            <SiWebpack />
                            <SiJavascript />
                            <SiTypescript />
                            <SiReact />
                            <SiStyledcomponents />
                    </HeaderTechnologiesList>
                </HeaderTechnologies>
                </motion.div>
            </IconContext.Provider>
        </HeaderContainer>
    )
}

export default Intro