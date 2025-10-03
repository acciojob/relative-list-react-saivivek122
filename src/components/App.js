import React from 'react'

const App = () => {
  const relatives = [
    { key: 'relativeListItem1', name: 'Grandma' },
    { key: 'relativeListItem2', name: 'Grandpa' },
    { key: 'relativeListItem3', name: 'Uncle Ravi' },
    { key: 'relativeListItem4', name: 'Aunt Priya' },
    { key: 'relativeListItem5', name: 'Cousin Rahul' }
  ];

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key="relativeList">
        {relatives.map(relative => (
          <li key={relative.key}>{relative.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App
