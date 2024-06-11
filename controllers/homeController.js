module.exports.home = (req, res) =>{
    let nombre = "Matias Gonzalez";
    const paises = [{
        nombre: "chile",
        nic: "cl"
    },
    {
        nombre: "Peru",
        nic: "pe"
    },
    {
        nombre: "Bolivia",
        nic: "bo"
    },
    {
        nombre: "Argentina",
        nic: "ar"
    },
    {
        nombre: "Venezuela",
        nic: "ve"
    }
];
    return res.render("home/home", {tituloPagina: "Inico", nombre: nombre, paises: paises});
}
