// ResourceList.js
import React, { useState } from 'react';
import ResourceCard from './ResourceCard';
import ResourceDetails from './ResourceDetails';
import mentalHealthResources from './data';

function ResourceList() {
  const [selectedResource, setSelectedResource] = useState(null);

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
  };

  return (
    <div className="resource-list">
      {mentalHealthResources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          onClick={() => handleResourceClick(resource)}
        />
      ))}
      {selectedResource && <ResourceDetails resource={selectedResource} />}
    </div>
  );
}

export default ResourceList;
