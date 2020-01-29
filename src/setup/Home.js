import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { setStats } from '../redux/actions';
import styled from 'styled-components';
import '../App.css';


const Background = styled.div`
width: 100vw;
height: 100vh;
background-color: rgb(72,72,72);
display:flex;
align-items: center;
justify-content:center;
`
const Start = styled.h1`
font-family: 'Press Start 2P', cursive;
color: red;
position: absolute;
text-align: center;
font-size: 10rem;
margin: 0;

`
const Title = styled.h1`
color: green;
position: absolute;
text-align: center;
font-family: 'Devonshire', cursive;
font-size: 5rem;
width: 100%;
margin:0;
`

const Starts = styled.div`
position: absolute;
width: 100%;
height: 100vh;
display:flex;
align-items: flex-end;
justify-content: center;
`

const Home = props => {
    console.log(props)
    const [flashOn, setFlashOn] = useState(true);

    setTimeout(function () { setFlashOn(!flashOn) }, 300);
    console.log(flashOn)

    return (
        <>
            <Title>DUNGEON OF DEATH</Title>
            <Background>
                <img src={require("../pics/pixel.jpg")} />
                <Starts onClick={() => {props.history.push("/stats")}}>
                <Start  className={flashOn ? "on" : "off"}>START</Start>
                </Starts>
            </Background>
        </>
    )

}

const mapStateToProps = state => {
    return {
        character: state
    };
};

export default connect(mapStateToProps, { setStats })(Home);