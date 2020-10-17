import React from 'react';
import './style.scss';

const YEARS = [
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
];
const FilterOnYears = ({ onChangeYear, changedYear }) => {
  return (
    <>
      <div className='years-header'>
        <h4>Launch Year</h4>
      </div>
      <div className='years-filter'>
        {YEARS.map((year) => (
          <input
            key={year}
            type='button'
            value={year}
            className={ changedYear === year ? 'filter-btn btn-active' : 'filter-btn'}
            onClick={(e) => onChangeYear(e)}
          />
        ))}
      </div>
    </>
  );
};

export default FilterOnYears;
