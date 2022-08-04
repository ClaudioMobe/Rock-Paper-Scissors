import React, { useContext } from 'react';
import styled from 'styled-components';
import { RulesContext } from '../contexts/RulesContext';

const RulesButton = () => {
    const {openRules} = useContext(RulesContext);
    return (
        <ButtonContainer>
            <Button onClick={() => openRules()}>RULES</Button>
        </ButtonContainer>
    );
}

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    position: absolute;
    bottom: 0;
    z-index: 500;
    @media (max-width: 480px){
        justify-content: center;
    }
`;

const Button = styled.button`
    color: #eee;
    font-family: 'Barlow Semi Condensed';
    font-size: 19px;
    letter-spacing: 2.7px;
    padding: 10px 40px;
    margin: 40px;
    background: transparent;
    border: 2px solid hsl(217, 16%, 45%);
    border-radius: 10px;
    :hover{
        color: #fefefe;
        border: 2px solid hsl(217, 16%, 70%);
    }
`;
export default RulesButton;