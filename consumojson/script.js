
async function obtenerData(){
    const response = await fetch("http://127.0.0.1:5500/consumojson/data.json");
    const json = await response.json();
    console.log(json);
}

obtenerData();