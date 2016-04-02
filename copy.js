module.exports = function (config) {
  console.log('copy')  
  console.log(__dirname + "./layouts/" + config.theme);

  require('shelljs/global');
  
  cp('-R', __dirname + "/layouts/" + config.theme, config.theme);
}