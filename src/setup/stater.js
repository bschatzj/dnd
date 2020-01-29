import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { setStats } from '../redux/actions';
const Stater = props => {
    const character = props.character

    const [statsRemain, setStatsRemain] = useState(15);
    // const [health, setHealth] = useState(1);
    // const [strength, setStrength] = useState(1);
    // const [charisma, setCharisma] = useState(1);
    const [statss, setStatss] = useState({
        strength: 1,
        inteligence: 1,
        health: 1,
        dex: 1,
        charisma: 1,
    });


    const handleChange = e => {
        setStatss({ ...statss, [e.target.name]: parseInt(e.target.value) });
        setStatsRemain(19 - statss.health - statss.charisma - statss.dex - statss.inteligence - statss.strength)
        if (statsRemain < 1) {
            alert("Make sure you don't overspend!")
            setStatsRemain(15)
            setStatss({
                strength: 1,
                inteligence: 1,
                health: 1,
                dex: 1,
                charisma: 1
            })
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.setStats(statss)
        if(statsRemain == 0) {
        console.log(statsRemain)
        props.history.push("/items")
        }
        else{
            alert("Please use all the stat points you will need them")
        }
    }

    return (
        <div className="statHolder">
            <h1> {statsRemain} Points Remaining</h1>
            <form onSubmit={handleSubmit}>
                <label>health</label>
                <input name="health" type="number" max={10} min={1} placeholder={1} value={statss.health} onChange={handleChange} />
                <label>strength</label>
                <input name="strength" type="number" max={10} min={1} placeholder={1} value={statss.strength} onChange={handleChange} />
                <label>charisma</label>
                <input name="charisma" type="number" max={10} min={1} placeholder={1} value={statss.charisma} onChange={handleChange} />
                <label>Dexterity</label>
                <input name="dex" type="number" max={10} min={1} placeholder={1} value={statss.dex} onChange={handleChange} />
                <label>inteligence</label>
                <input name="inteligence" type="number" max={10} min={1} placeholder={1} value={statss.inteligence} onChange={handleChange} />
                <button type="submit" > CONFIRM</button>
            </form>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        character: state
    };
};

export default connect(mapStateToProps, { setStats })(Stater);