import React, { useState } from 'react';
import Filters from './Filters';
import JobList from './JobList';
import './ExploreCareers.css';

const ExploreCareers = () => {
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleJobTitleChange = (event) => {
    setSelectedJobTitle(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleApplyFilters = () => {
    const jobData = [
      {
        status: 'Executive',
        title: 'Sr. Sales Manager',
        department: 'Sales & Marketing',
        location: 'San Francisco, California',
        salary: '$125k+'
      },
      {
        status: 'Executive',
        title: 'Junior Marketing Designer',
        department: 'Sales & Marketing',
        location: 'Los Angeles, California',
        salary: '$55k+'
      },
      {
        status: 'Executive',
        title: 'Digital Marketing Consultant',
        department: 'Sales & Marketing',
        location: 'Remote (US)',
        salary: '$85k+'
      },
      {
        status: 'Executive',
        title: 'Marketing Manager (Sales)',
        department: 'Sales & Marketing',
        location: 'New York City, New York',
        salary: '$75k+'
      },
      {
        status: 'Executive',
        title: 'Sr. Marketing Designer',
        department: 'Sales & Marketing',
        location: 'San Francisco, California',
        salary: '$150k+'
      }
    ];

    // Filter the jobData based on selected filters
    const filteredJobs = jobData.filter((job) => {
      if (
        (selectedJobTitle && job.status !== selectedJobTitle) ||
        (selectedLocation && job.location !== selectedLocation) ||
        (selectedDepartment && job.department !== selectedDepartment)
      ) {
        return false;
      }
      return true;
    });

    setFilteredJobs(filteredJobs);
  };

  const handleClearAll = () => {
    setSelectedJobTitle('');
    setSelectedLocation('');
    setSelectedDepartment('');
    setFilteredJobs([]);
  };

  return (
    <div className="section-careers">
      <div className='main-careers'>
        <div className='careers-top'>
          <a href='#' className='top-link'>- Join our Team</a>
          <h1 className='title'>Explore Careers</h1>
        </div>
        <div className='careers-body'>
          <div className="Filters">
            <Filters
              selectedJobTitle={selectedJobTitle}
              selectedLocation={selectedLocation}
              selectedDepartment={selectedDepartment}
              handleJobTitleChange={handleJobTitleChange}
              handleLocationChange={handleLocationChange}
              handleDepartmentChange={handleDepartmentChange}
              handleApplyFilters={handleApplyFilters}
              handleClearAll={handleClearAll}
            />
          </div>
          <div className="JobList">
            <JobList jobs={filteredJobs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCareers;
