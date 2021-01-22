import React, { useContext } from 'react';
import { EnterpriseContext } from './EnterpriseContext';
import './Panel.css';

export default function WarpDrive() {
  const { warpDrive, engageWarpSpeed, disengageWarpSpeed } = useContext(EnterpriseContext);
  return (
    <div className="panel">
      <span>Motor de Dobra</span>
      <div className={`alert-light ${warpDrive ? 'green-light' : 'red-light'}`} />
        <button onClick={warpDrive ? disengageWarpSpeed : engageWarpSpeed}>
        {`${warpDrive ? 'Desengajar' : 'Engajar'}`} velocidade de dobra
      </button>
      <span>Armas e escudos devem estar desligados</span>
    </div>
  );
}