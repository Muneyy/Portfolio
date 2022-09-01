import styled from 'styled-components';

const Project = styled.div`
    display: flex;
    flex-flow: row wrap;
    position: relative;
    margin: auto;

    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`

const ProjectText = styled.div`
    align-self: center;
    justify-self: baseline;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 40%;
    /* border: 3px solid #D2D79F; */
    border-radius: 10px;
    padding: 40px;
    background-color: #1D1D1F;
    left: 10%;
    position: absolute;
    z-index: 2;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    @media screen and (max-width: 800px) {
        position: inherit;
        max-width: 60%;
        left: 0;
    }
`


const ProjectTitle = styled.h1`
    font-size: 2rem;
`

const ProjectDescription = styled.p`
    font-size: 1rem;
    margin-bottom: 16px;
    opacity: 0.8;
    font-weight: 350;
`
const ProjectLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }

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
  height: 30px;
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
  font-size: 0.9rem;

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
        width: 1200px;
        height: auto;
        background-size: contain;
        opacity: 0.6;
        padding: auto;

        @media screen and (max-width: 1250px) {
            width: 768px;
        }

        @media screen and (max-width: 800px) {
            display: none;
        }

    }
`

const ProjectItem = ({title, desc, linkCode, linkLive, imgSrc} : {
    title: string,
    desc: string,
    linkCode: string,
    linkLive: string,
    imgSrc: string,
}) => {

    return(
        <Project>
            <ProjectText>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{desc}</ProjectDescription>
                <ProjectLinks>
                    <ProjectLink href={linkCode} target="_blank">
                        <ProjectButton>View Code</ProjectButton>
                    </ProjectLink>
                    <ProjectLink href={linkLive} target="_blank">
                        <ProjectButton>Live Preview</ProjectButton>
                    </ProjectLink>
                </ProjectLinks>
            </ProjectText>
            <ProjectImage>
                <img src={require(`../../Images/${imgSrc}`)} alt="project"/>
            </ProjectImage>
        </Project>
    )
}

export default ProjectItem