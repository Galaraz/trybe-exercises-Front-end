import React, { createContext, useState } from 'react';

const EnterpriseContext = createContext();

const EnterpriseProvider = ({ children }) => {

  // this.state = { energyGauge: 0 } 
  // this.setState({ energyGauge: 100 })

  const [energyGauge, setEnergyGauge] = useState(0);
  const [warpDrive, setWarpDrive] = useState(false);
  const [shieldsOnline, setShieldsOnline] = useState(false);
  const [weaponsEnabled, setWeaponsEnabled] = useState(true);
  const [weaponsLevel, setWeaponsLevel] = useState(0);

  const engageWarpSpeed = () => {
    if(warpDrive || energyGauge > 2 || shieldsOnline || weaponsEnabled) return undefined;
    setWarpDrive(true);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge + 2);
  }

  const disengageWarpSpeed = () => {
    if(!warpDrive) return undefined;
    setWarpDrive(false);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge - 2);
  }

  const raiseShields = () => {
    if(shieldsOnline || energyGauge > 2 || warpDrive) return undefined;
    setShieldsOnline(true);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge + 2);
  }

  const lowerShields = () => {
    if(energyGauge === 0 || !shieldsOnline) return undefined;
    setShieldsOnline(false);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge - 2);
  }

  const weaponsOnline = () => {
    if(warpDrive || weaponsEnabled) return undefined;
    setWeaponsEnabled(true);
  }

  const weaponsOffline = () => {
    if(warpDrive || !weaponsEnabled) return undefined;
    setWeaponsEnabled(false);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge - weaponsLevel);
    setWeaponsLevel(0);
  }

  const increaseFirePower = () => {
    if(!weaponsEnabled || warpDrive || energyGauge === 4 || weaponsLevel === 3) return undefined;
    setWeaponsLevel((currentWeaponLevel) => currentWeaponLevel + 1);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge + 1);
  }
  
  const decreaseFirePower = () => {
    if(warpDrive || !weaponsEnabled || weaponsLevel === 0 || energyGauge === 0) return undefined;
    setWeaponsLevel((currentWeaponLevel) => currentWeaponLevel - 1);
    setEnergyGauge((currentEnergyGauge) => currentEnergyGauge - 1);
  }

  const context = {
    energyGauge,
    warpDrive,
    shieldsOnline,
    weaponsEnabled,
    weaponsLevel,
    engageWarpSpeed,
    disengageWarpSpeed,
    raiseShields,
    lowerShields,
    weaponsOnline,
    weaponsOffline,
    increaseFirePower,
    decreaseFirePower,
  };
  return (
    <EnterpriseContext.Provider value={context}>
      {children}
    </EnterpriseContext.Provider>
  );
}

export { EnterpriseContext, EnterpriseProvider as Provider };