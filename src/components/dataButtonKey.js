const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const dataButton = ['good', 'neurtal', 'bad'];
const dataButtonKey = () => {
  const capitDataButton = dataButton.map(item => {
    return capitalizeFirstLetter(item);
  });
  const dataButtonObj = {};
  capitDataButton.forEach(element => {
    dataButtonObj[element] = 0;
  });
  return dataButtonObj;
};
export default dataButtonKey;
