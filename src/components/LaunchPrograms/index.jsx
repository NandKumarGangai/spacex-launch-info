import React from 'react';
import LaunchProgram from './Program';
import './style.scss';

const LaunchPrograms = ({ launchPrograms = [], error }) => {
  return (
    <>
      {!error ? (
        <div>
          {launchPrograms.length > 0 ? (
            <div className='lp-container'>
              {launchPrograms.map((program) => (
                <LaunchProgram program={program} key={program.mission_name} />
              ))}
            </div>
          ) : (
            <h2 className='lp-container'>Oops.... Data not found!</h2>
          )}
        </div>
      ) : (
        <h2 className='lp-container'>Something went wrong....!</h2>
      )}
    </>
  );
};

export default LaunchPrograms;
