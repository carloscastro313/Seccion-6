const axios = require('axios');

const getLugarLatLog = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: 'http://api.weatherstack.com/current',
        params: {
            access_key: 'b04413d74633c8f4207ff0eb179130ed',
            query: encodedUrl
        }
    });

    const resp = await instance.get();

    if (resp.request == null) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const cityName = resp.data.location.name;
    const lat = resp.data.location.lat;
    const log = resp.data.location.lon;

    return {
        cityName,
        lat,
        log,
    }
}

module.exports = {
    getLugarLatLog,
}