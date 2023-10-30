const StatisticItem = ({ itemKey, itemValue = 0 }) => {
  return (
    <p>
      {itemKey}: {itemValue} {itemKey === 'Positive feedback' && '%'}
    </p>
  );
};
export default StatisticItem;
