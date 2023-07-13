const axios = require('axios');

function getCharById (res,id) {
    // console.log(id)
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response=>{
        const character = {
            id:id,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin.name,
            image: response.data.image,
            status: response.data.status
        }
        // console.log(character);
        res.writeHead(200, {'Content-Type':'application/json'})
        return res.end(JSON.stringify(character))
    })
    .catch(err=>{
        res.writeHead(500, {'Content-Type':'text-plain'});
        return res.end(err.response.data.error)
    })
    // .catch(err=>console.log(err.response.data.error))
}

module.exports = {
    getCharById:getCharById,
};

// getCharById(null,1262)