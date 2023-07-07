const http=require('http');
const data=require('./utils/data')

http.createServer((req,res)=>{

    console.log(req.url)

    res.setHeader('Access-Control-Allow-Origin','*')

    if(req.url.includes('rickandmorty/character')) {
        const charId=Number(req.url.slice(req.url.lastIndexOf('/')+1))
        const character = data.find(char => char.id===charId)
        if(!character) {
            res.writeHead(404, {'Content-Type':'text-plain'});
            return res.end('Character not found')
        }
        res.writeHead(200, {'Content-Type':'application/json'})
        return res.end(JSON.stringify(character))
    }

}).listen(3001,'localhost')