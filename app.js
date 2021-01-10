const { getLugarLatLog } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*getLugarLatLog(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err.message));

getClima(-34.588, -58.678)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));*/

const getInfo = async(direccion) => {

    return await getLugarLatLog(argv.direccion)
        .then(resp => getClima(resp.lat, resp.log))
        .catch(err => {

            throw new Error(`No se pudo determinar el clima de ${direccion}`);

        });
}

getInfo(argv.direccion)
    .then(resp => console.log(`El clima de ${argv.direccion} es de ${resp}`))
    .catch(err => console.log(err.message));