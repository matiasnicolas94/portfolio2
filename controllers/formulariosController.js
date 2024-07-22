module.exports.homeVistas = (req, res) => {
    return res.render("formularios/homeVistas", {tituloPagina: "Formularios"})
}
module.exports.normal = (req, res) => {
    return res.render("formularios/normal", {tituloPagina: "Formularios Simple"})
}
module.exports.normal_post = (req, res) => {

    const {nombre, correo, telefono} = req.body; //form-data
    res.send("nombre= " + nombre + " | correo= " + correo + " | fono= " +telefono);
}