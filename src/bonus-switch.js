const measureRainSwitch = (inchesOfRain) => {
  switch (true) {
    case (inchesOfRain === 0):
      console.log('drought');
      break;
    case (inchesOfRain < 2):
      console.log('dry');
      break;
    case (inchesOfRain < 4):
      console.log('average');
      break;
    case (inchesOfRain < 6):
      console.log('rainy');
      break;
    case (inchesOfRain >= 6):
      console.log('flood');
      break;
    default:
      console.log('invalid');
      break;
  }
};

const rounderSwitch = (float, roundSetting) => {
  switch (roundSetting) {
    case 'up':
      return Math.ceil(float);
    case 'honest':
      return Math.round(float);
    case 'down':
      return Math.floor(float);
    default:
      return null;
  }
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
