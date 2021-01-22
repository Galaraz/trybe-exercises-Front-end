import React, { useContext } from 'react';
import ISSContext from '../Context/ISSContext';

const ToggleMap = () => {
  const { showMap, toggleMap } = useContext(ISSContext);
  return (
    <button type="button" onClick={toggleMap}>
      {showMap ? 'Esconder Mapa' : 'Mostrar Mapa'}
    </button>
  );
}

export default ToggleMap