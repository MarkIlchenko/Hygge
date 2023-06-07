import React from 'react';
import './JobList.css';

const JobList = ({ jobs }) => {
    return (
         <div className='section-list'>
             {jobs.length > 0 ? (
                  jobs.map((job, index) => (
                       <div key={index} className='job-list'>
                           <h4 className='list-title'>{job.title}</h4>
                           <p className='list-name'>{`${job.department} - ${job.location} - ${job.salary}`}</p>
                           <button className='list-btn' type="button">
                               Apply
                           </button>
                       </div>
                  ))
             ) : (
                  <p>No jobs found.</p>
             )}
         </div>
    );
};

export default JobList;
