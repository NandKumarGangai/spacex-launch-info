import React from 'react';
import './style.scss';

const LaunchProgram = ({ program = {} }) => {
  const {
    mission_name,
    flight_number,
    links: { mission_patch_small },
    mission_id = [],
    launch_year,
    launch_success,
    rocket: { first_stage: { cores = [] } = {} } = {},
  } = program;

  return (
    <div className='p-container'>
      <div className='image'>
        <img src={mission_patch_small} alt={mission_name} />
      </div>
      <h3 className='title'>{`${mission_name} #${flight_number}`}</h3>
      <h4>Mission Ids:</h4>
      {mission_id.length > 0 && (
        <ul variant='flush'>
          {mission_id.map((id) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      )}
      <table>
        <tbody>
          <tr>
            <th className='row'>Launch Year:</th>
            <td className='row'>{`${launch_year}`}</td>
          </tr>
          <tr>
            <th className='row'>Successful Launch:</th>
            <td className='row'>{`${launch_success ? 'Yes' : 'No'}`}</td>
          </tr>
          <tr>
            <th className='row'>Successful Landing:</th>
            <td className='row'>{`${cores[0].land_success ? 'Yes' : 'No'}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LaunchProgram;
