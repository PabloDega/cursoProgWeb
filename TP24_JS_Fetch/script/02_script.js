let renderIp = document.querySelector("#ipData");

fetch("https://api.ipify.org/?format=json")
.then((res) => res.json())
.then((res) => {
    console.log(res); 
    datosIp(res.ip);
})
.catch((e) => console.log(e));

function datosIp(ip){
    fetch(`https://ipinfo.io/${ip}?token=28599438d374b0`)
    .then((res) => res.json())
    .then((res) => {
        mostrarIpData(res)
    })
    .catch((e) => console.log(e));
}

function mostrarIpData(ipData){
    let texto = "<h2>Información sobre su IP</h2><table id='tablaIP'>";
    for(x in ipData){
        texto += `<tr><th>${x}</th><td>${ipData[x]}</td><tr>`;
    }
    texto += "</table>";
    renderIp.innerHTML = texto;
}