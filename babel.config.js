module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //plugins : [ 'module:reat-native-dotenv']
  };
};
