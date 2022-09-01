import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconContext } from "react-icons";
import HeaderTechnologies from './SubComponents/HeaderTechnologies';

const HeaderContainer = styled.div`
   background-color: #313132;
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

    @media screen and (max-width: 800px) {
        font-size:calc(2rem + 1.5vw);
    }

    @media screen and (max-width: 400px) {
        font-size: 1.5rem;
    }
`

const HeaderText = styled.h1`
    font-size: 8rem;
    font-weight: 900;

    @media screen and (max-width: 800px) {
        font-size:calc(3rem + 1.5vw);
    }

    @media screen and (max-width: 400px) {
        font-size: 2.5rem;
    }

`
const HeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;

    @media screen and (max-width: 800px) {
        padding-top: 3rem;
    }
    
`

const Intro = () => {
    return (
        <HeaderContainer id='home'>
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
            <IconContext.Provider value={ {size: "3.5rem", color: "#D2D79F"} }>
                <motion.div
                    initial = { { opacity: 0 } }
                    animate = { { opacity: 1 } }
                    transition = {{ duration: 0.5 }}
                >
                <HeaderTechnologies />
                </motion.div>
            </IconContext.Provider>
        </HeaderContainer>
    )
}

export default Intro