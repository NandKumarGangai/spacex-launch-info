import axios from 'axios';
import React, { useState, useEffect } from 'react';
import LaunchPrograms from '../LaunchPrograms';
import Filters from '../Filters';
import './style.scss';

const BASE_URI = 'https://api.spaceXdata.com/v3/launches?limit=25';

const LandingPage = () => {
  const [launchPrograms, setLaunchPrograms] = useState([]);
  const [changedYear, setChangedYear] = useState('');
  const [launchStatus, setLaunchStatus] = useState('');
  const [landingStatus, setLandingStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchInitialData = async () =>
      await axios
        .get(BASE_URI)
        .then((res) => {
          setLaunchPrograms(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
          throw err;
        });

    fetchInitialData();
  }, []);

  useEffect(() => {
    let query = '';
    if (changedYear) {
      query = `&launch_year=${changedYear}`;
    }

    if (launchStatus !== '') {
      query = `${query}&launch_success=${launchStatus.toLocaleLowerCase()}`;
    }

    if (landingStatus) {
      query = `${query}&land_success=${landingStatus.toLocaleLowerCase()}`;
    }

    setLoading(true);
    const fetchFilteredData = async () =>
      await axios
        .get(`${BASE_URI}${query}`)
        .then((res) => {
          setLaunchPrograms(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
          throw err;
        });

    fetchFilteredData();
  }, [changedYear, launchStatus, landingStatus]);

  const onChangeYear = (e) => {
    setChangedYear(e.target.value);
  };

  const onChangeLaunchStatus = (e) => {
    setLaunchStatus(e.target.value);
  };

  const onChangeLandingStatus = (e) => {
    setLandingStatus(e.target.value);
  };

  return (
    <>
      <header>
        <h1>SpaceX Launch Programs</h1>
      </header>
      <div className='container'>
        <div className='filters'>
          <Filters
            onChangeYear={onChangeYear}
            onChangeLaunchStatus={onChangeLaunchStatus}
            onChangeLandingStatus={onChangeLandingStatus}
            changedYear={changedYear}
            launchStatus={launchStatus}
            landingStatus={landingStatus}
          />
        </div>
        <div className='content'>
          {!loading ? (
            <LaunchPrograms launchPrograms={launchPrograms} error={error} />
          ) : (<h3>Loading...</h3>)}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
