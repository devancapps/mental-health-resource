// ResourceCard.js
import React from 'react';

function ResourceCard({ resource, onClick }) {
  return (
    <div className="resource-card" onClick={onClick}>
      <h2>{resource.category}</h2>
      <h3>{resource.name}</h3>
      <p>{resource.description}</p>
    </div>
  );
}

export default ResourceCard;
