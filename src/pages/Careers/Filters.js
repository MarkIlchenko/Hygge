import React from 'react';
import './Filters.css';

const Filters = ({
                     selectedJobTitle,
                     selectedLocation,
                     selectedDepartment,
                     handleJobTitleChange,
                     handleLocationChange,
                     handleDepartmentChange,
                     handleApplyFilters,
                     handleClearAll
                 }) => {
    const jobTitles = ['Executive'];
    const locations = ['San Francisco, California', 'Los Angeles, California', 'Remote (US)', 'New York City, New York'];
    const departments = ['Sales & Marketing', 'Management'];
    
    return (
         <div className='section-filter'>
             <h3 className='title'>Filter By</h3>
             <div>
                 <h4 className='job-title'>Job Title</h4>
                 <select className='section-job' value={selectedJobTitle} onChange={handleJobTitleChange}>
                     {jobTitles.map((title) => (
                          <option key={title} value={title}>
                              {title}
                          </option>
                     ))}
                 </select>
             </div>
             <div>
                 <h4 className='job-location'>Location:</h4>
                 <select className='section-location' value={selectedLocation} onChange={handleLocationChange}>
                     <option value="">All</option>
                     {locations.map((location) => (
                          <option key={location} value={location}>
                              {location}
                          </option>
                     ))}
                 </select>
             </div>
             <div>
                 <h4 className='job-dept'>Department:</h4>
                 <select className='section-dept' value={selectedDepartment} onChange={handleDepartmentChange}>
                     <option value="">All</option>
                     {departments.map((department) => (
                          <option key={department} value={department}>
                              {department}
                          </option>
                     ))}
                 </select>
             </div>
             <div className='section-buttons'>
                 <button className='apply-btn' type="button" onClick={handleApplyFilters}>
                     Apply Filters
                 </button>
                 <button className='clear-btn' type="button" onClick={handleClearAll}>
                     Clear All
                 </button>
             </div>
         </div>
    );
};

export default Filters;
