module.exports.homeVistas = (req, res) => {
    return res.render("formularios/homeVistas", {tituloPagina: "Formularios"})
}
module.exports.normal = (req, res) => {
    return res.render("formularios/normal", {tituloPagina: "Formularios Simple"})
}
