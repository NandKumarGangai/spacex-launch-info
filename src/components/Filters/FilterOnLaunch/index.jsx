import React from 'react';

const LAUNCH_STATUS = [
  'True',
  'False'
]

const FilterOnLaunch = ({ onChangeLaunchStatus, launchStatus }) => {
  return (
    <>
      <div className='years-header'>
        <h4>Successful Launch</h4>
      </div>
      <div className='years-filter'>
        {LAUNCH_STATUS.map((status) => (
          <input
            key={status}
            type='button'
            value={status}
            className={ launchStatus === status ? 'filter-btn btn-active' : 'filter-btn'}
            onClick={(e) => onChangeLaunchStatus(e)}
          />
        ))}
      </div>
    </>
  );
};

export default FilterOnLaunch;
