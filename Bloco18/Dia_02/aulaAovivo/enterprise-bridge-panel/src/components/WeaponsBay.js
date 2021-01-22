import React, { useContext } from 'react';
import { EnterpriseContext } from './EnterpriseContext';
import './Panel.css';

export default function WeaponsBay() {
  const { weaponsEnabled,
          weaponsLevel, 
          weaponsOnline, 
          weaponsOffline,
          increaseFirePower,
          decreaseFirePower,
        } = useContext(EnterpriseContext);
  return (
    <div className="panel">
      <span>Armas</span>
      <div className={`alert-light ${weaponsEnabled ? 'green-light' : 'red-light'}`} />
      <button onClick={weaponsEnabled ? weaponsOffline : weaponsOnline}>
        {`${weaponsEnabled ? 'Desabilitar' : 'Habilitar'}`} armas
      </button>
      <span>Nível das armas: {weaponsLevel}</span>
        <button onClick={increaseFirePower}>Aumentar poder de fogo</button>
      <button onClick={decreaseFirePower}>Diminuir poder de fogo</button>
      <span>Nível máximo: 3</span>
    </div>
  );
}