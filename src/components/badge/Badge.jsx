import React from 'react';
import './Badge.scss';

const Badge = () => {
    const type= 'location';
  return (
    <div className={`badge ${type}`}>
      {type === 'vente' ? 'Vente' : 'Location'}
    </div>
  );
};

export default Badge;
