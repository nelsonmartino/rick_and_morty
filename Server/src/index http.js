const http=require('http');
// const data=require('./utils/data')
const {getCharById}=require("./controllers/getCharById");

http.createServer((req,res)=>{

    // console.log(req.url)

    res.setHeader('Access-Control-Allow-Origin','*')

    // if(req.url.includes('rickandmorty/character')) {
    //     const charId=Number(req.url.slice(req.url.lastIndexOf('/')+1))
    //     const character = data.find(char => char.id===charId)
    //     if(!character) {
    //         res.writeHead(404, {'Content-Type':'text-plain'});
    //         return res.end('Character not found')
    //     }
    //     res.writeHead(200, {'Content-Type':'application/json'})
    //     return res.end(JSON.stringify(character))
    // }

    if(req.url.includes('rickandmorty/character')) {
        const charId=Number(req.url.slice(req.url.lastIndexOf('/')+1));
        // console.log(charId);
        getCharById(res,charId);
    }

}).listen(3001,'localhost')