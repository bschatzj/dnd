import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

const Stats = props => {
    const characterStats = props.character.stats
    console.log(characterStats)
    let hp = characterStats.health;
    let strength = characterStats.strength;
    let charisma = characterStats.charisma;
    let intelegence = characterStats.intelegence;
    let dex = characterStats.dex;
    let exp = characterStats.experience;

    const HealthBar = styled.div`
    width: ${hp *2}%;
    background-color: red;
    `

    const StatHolder = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: flex-start; 
    margin: none;
    `

    const Attributes = styled.p`
    margin: 0;
    `

    return(
        <StatHolder>
            <HealthBar><Attributes>Health: {characterStats.health}</Attributes> </HealthBar>
            <Attributes className="strength"> Strength: {characterStats.strength} </Attributes>
            <Attributes className="charisma"> Charisma: {characterStats.charisma} </Attributes>
            <Attributes className="experience"> Experience: {characterStats.experience} </Attributes>
            <Attributes className="dex"> Dexterity: {characterStats.dex} </Attributes>
            <Attributes className="intelegence"> Intelegence: {characterStats.dex} </Attributes>

        </StatHolder>
    )

}

const mapStateToProps = state => {
    return {
        character: state
    };
  };
  
  export default connect(mapStateToProps)(Stats);