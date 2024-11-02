import './Badge.scss';

const Badge = ({forLocation}) => {
  console.log(forLocation);
  
  return (
    <div className={`badge ${forLocation}`}>
      {forLocation === 'vente' ? 'Vente' : 'Location'}
    </div>
  );
};

export default Badge;
