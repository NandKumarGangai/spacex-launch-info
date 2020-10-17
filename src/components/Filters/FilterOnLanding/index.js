import React from 'react';

const LAUNCH_STATUS = [
  'True',
  'False'
]

const FilterOnLanding = ({ onChangeLandingStatus, landingStatus }) => {
  return (
    <>
      <div className='years-header'>
        <h4>Successful Landing</h4>
      </div>
      <div className='years-filter'>
        {LAUNCH_STATUS.map((status) => (
          <input
            key={status}
            type='button'
            value={status}
            className={ landingStatus === status ? 'filter-btn btn-active' : 'filter-btn'}
            onClick={(e) => onChangeLandingStatus(e)}
          />
        ))}
      </div>
    </>
  );
};

export default FilterOnLanding;
