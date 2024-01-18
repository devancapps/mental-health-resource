// ResourceDetails.js
import React from 'react';

function ResourceDetails({ resource }) {
  return (
    <div className="resource-details">
      <h2>{resource.name}</h2>
      <p>{resource.description}</p>
      <a href={resource.website} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
      {resource.offersOnlineCounseling && (
        <p>Offers Online Counseling</p>
      )}
    </div>
  );
}

export default ResourceDetails;
