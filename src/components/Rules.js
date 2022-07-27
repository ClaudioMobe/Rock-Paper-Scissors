import React, { useContext } from 'react';
import styled from 'styled-components';
import {ReactComponent as RulesImg} from '../assets/image-rules.svg';
import {ReactComponent as CrossIcon} from '../assets/icon-close.svg';
import { RulesContext } from '../contexts/RulesContext';

const Rules = () => {
    const {showMod, closeRules} = useContext(RulesContext);
    console.log(showMod);
    return (
        showMod && 
            <ModContainer>
                <RulesContainer>
                    <TextContainer>
                        <Title>RULES</Title>
                        <IconButton onClick={() => closeRules()}>
                            <CrossIcon/>
                        </IconButton>
                    </TextContainer>
                    <ImgContainer>
                        <RulesImg/>
                    </ImgContainer>
                    <IconButtonMobile onClick={() => closeRules()}>
                        <CrossIcon/>
                    </IconButtonMobile>
                </RulesContainer>
            </ModContainer>
    );
}

const ModContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
    z-index: 200;
`;

const RulesContainer = styled.div`
    background: #fff;
    width: 420px;
    height: 444px;
    border-radius: 15px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px){
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        justify-content: space-around;
    }
`;

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 480px){
        justify-content: center;
    }
`;

const Title = styled.p`
    font-size: 40px;
    font-weight: 700;
    color: hsl(229, 25%, 31%);
`;

const ImgContainer = styled.div`
    display: flex;
    height: 270px;
    width: 304px;
`;

const IconButton = styled.div`
    :hover{
        & svg {
            & path{
                fill: #000;
            }
        }
    }
    :active{
        & svg {
            & path{
                fill: #000;
                opacity: 0.5;
            }
        }
    }

    @media (max-width: 480px){
        display: none;
    }
`;

const IconButtonMobile = styled.div`
    display: none;
    @media (max-width: 480px){
        display: block;
    }
`;

export default Rules;