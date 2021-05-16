const {name} =require('./package.json')

module.exports = {
    webpack: function override(config, env) {
       
        // config.output.publicPath: `//localhost`,
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.jsonpFunction = `webpackJsonp_${name}`;
        return config;
      },
    devServer:(configFunction)=>{
        return function (proxy, allowedHost) {
            const config = configFunction(proxy,allowedHost);
         
            config.open = false;
            config.hot = false;
            config.headers = {
              'Access-Control-Allow-Origin': '*',
            };
            return config;
        };
    }

}