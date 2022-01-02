import React from 'react';
import FilterOnYears from './FilterOnYears';
import FilterOnLaunch from './FilterOnLaunch';
import FilterOnLanding from './FilterOnLanding';


const Filters = ({ onChangeYear, onChangeLaunchStatus, onChangeLandingStatus, changedYear, launchStatus, landingStatus }) => {
    return (
        <div>
            <FilterOnYears onChangeYear={onChangeYear} changedYear={changedYear} />
            <FilterOnLaunch onChangeLaunchStatus={onChangeLaunchStatus} launchStatus={launchStatus} />
            <FilterOnLanding onChangeLandingStatus={onChangeLandingStatus} landingStatus={landingStatus} />
        </div>
    )
}

export default Filters;
 