const express = require('express');

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

//PROGRAMACION
// aqui é a rota 'localhost:1000/cursos/programacion'
routerProgramacion.get('/', (req,res) => {
    res.send(JSON.stringify(programacion));
});

// LINGUAGEM programacion
//aqui o ":lenguaje" é um PARAMETRO URL porque poderia haver centenas de linguagens cadastradas no curso de programaçao e isso faria com que eu precisasse cadastrar centenas de rotas 
// aqui é a rota 'localhost:1000/cursos/programacion/:lemguaje'
routerProgramacion.get('/:lenguaje', (req,res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);
        if (resultados.length === 0){
        return res.status(404).send(`No se encontraram cursos de ${lenguaje}`)
        }
    //PARAMETROS QUERY
        if (req.query.ordenar === 'vistas') {
            return res.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas)));
        } else {
            res.send(JSON.stringify(resultados));
        }
    res.send(JSON.stringify(resultados))
});

// NIVEL programacion
// aqui é a rota 'localhost:1000/cursos/programacion/:lemguaje/:nivel'
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraram cursos de ${lenguaje} de nivel ${nivel}`)
        }
    res.send(JSON.stringify(resultados))
});

module.exports = routerProgramacion;