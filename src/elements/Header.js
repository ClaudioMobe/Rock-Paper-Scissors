import React, { useState } from 'react';
import styled from 'styled-components';
import LogoImg from '../assets/logo.svg';

const Header = () => {
    const [score, setScore] = useState(0);

    return (
        <HeaderContainer>
            <Logo/>
            <Counter>
                <CounterTitle>SCORE</CounterTitle>
                <CounterNumber>{score}</CounterNumber>
            </Counter>
        </HeaderContainer>
    );
}
 
const HeaderContainer = styled.div`
    width: 50vw;
    max-width: 600px;
    height: 15vh;
    min-height: 100px;
    outline: 3px solid grey;
    border-radius: 15px;
    position: relative;
    top: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 15px 20px;

    @media (max-width: 820px){
        width: 90vw;
        height: 13vh;
        top: 3vh;
    }
`;
const Logo = styled.div`
    background-image: url(${LogoImg});
    background-size: auto 100%;
    background-repeat: no-repeat;
    height: 100%;
    width: 50%;
    min-width: max-content;
`;

const Counter = styled.div`
    background: #fff;
    height: 100%;
    width: 22%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CounterTitle = styled.p`
    color: hsl(229, 64%, 46%);
    letter-spacing: 2px;
    font-size: 15px;
    height: min-content;

    @media (max-width: 480px){  
        font-size: 12px;
    }
`;

const CounterNumber= styled.p`
    color: hsl(229, 25%, 31%);
    font-weight: 700;
    font-size: 60px;
    line-height: 0.8;

    @media (max-width: 480px){
        font-size: 50px;
    }
`;
export default Header;