import React from 'react';

const Launch = ({launch}) => {

    const {flight_number, mission_name, launch_year} = launch;
    return (
        <div>
            <div>Flight Number: {flight_number}</div>
            <div>Mission Name: {mission_name}</div>
            <div>Launch Year: {launch_year}</div>

        </div>
    );
};

export default Launch;