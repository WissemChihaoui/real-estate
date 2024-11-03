import './Badge.scss';

const Badge = ({ forLocation }) => {
  const badges = [
    { value: 'vente', label: 'Vente' },
    { value: 'location_sais', label: 'Location Saisionniere' },
    { value: 'location_annu', label: 'Location Annuelle' }
  ];

  // Find the badge with the matching value
  const badge = badges.find((b) => b.value === forLocation);

  return (
    <div className={`badge ${forLocation}`}>
      {/* Display the label if found, or a default if not */}
      {badge ? badge.label : 'Unknown'}
    </div>
  );
};

export default Badge;

