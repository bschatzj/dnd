import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { setStats } from '../redux/actions';
import Stats from './stats'

const Items = props => {
    console.log(props)

    return (
        <>
        <Stats />
        <div>
            <h1> Sword </h1>
        </div>
        </>
    )

}

const mapStateToProps = state => {
    return {
        character: state
    };
};

export default connect(mapStateToProps, { setStats })(Items);