import React, { useContext, useEffect } from 'react';
import ISSContext from '../Context/ISSContext';
import useTimer from '../Effects/useTimer';

const PeopleInSpace = () => {
  const { peopleInSpace, getPeopleInSpace } = useContext(ISSContext);

  useTimer(getPeopleInSpace, 5000);

  if(!peopleInSpace) return null;
  return (
    <div>
      <span>{`Number of people in space now: ${peopleInSpace.length}`}</span>
      <ul>
        {peopleInSpace.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleInSpace;