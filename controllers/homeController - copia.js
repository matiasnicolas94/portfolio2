module.exports.home = (req, res) =>{
    res.send("hola desde el controlador home");
}

module.exports.nosotros = (req, res) =>{
    res.json({mensaje:"hola desde nosotros"});
}

module.exports.parametros = (req, res) =>{
    //desestructuracion
    const {id, slug} = req.params;
    res.send("id= "+id+ " | slug= "+slug);
}

module.exports.query_string = (req, res) =>{
    //desestructuracion
    const {id, slug} = req.query;
    res.send("id= "+id+ " | slug= "+slug);
}