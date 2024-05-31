
async function obtenerData(){
    await fetch("http://127.0.0.1:5500/consumojson/data.json")
    .then(response=>response.json())
    .then(json=>console.log(json))
    .catch(error=>console.log('Solicitud Fallido', error))
}

obtenerData();