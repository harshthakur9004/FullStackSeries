const http = require('http');
const url = require('url');
const fs = require('fs');
const os = require('os');

const server = http.createServer(function(req, res) {

    const parsed = url.parse(req.url, true);
    const path = parsed.pathname;

    // 1. GET /updateuser → add visitor entry with timestamp
    if(path == '/updateuser' && req.method == 'GET'){
        res.writeHead(200, {'Content-Type':'application/json'});

        const entry = "Visitor at: " + new Date() + "\n";
        fs.appendFileSync("visitor.log", entry);

        res.end(JSON.stringify({msg: "visitor added"}));
    }

    // 2. GET /server-read → show full visitor.log content
    else if(path == '/server-read' && req.method == 'GET'){
        res.writeHead(200, {'Content-Type':'application/json'});

        let data = "";
        try {
            data = fs.readFileSync("visitor.log", "utf-8");
        } catch(err){
            data = "no data found";
        }

        res.end(JSON.stringify({content: data}));
    }

    // 3. GET /backup → copy visitor.log → server.log
    else if(path == '/backup' && req.method == 'GET'){
        res.writeHead(200, {'Content-Type':'application/json'});

        try {
            const data = fs.readFileSync("visitor.log");
            fs.writeFileSync("server.log", data);

            res.end(JSON.stringify({msg: "backup done"}));
        } catch(err){
            res.end(JSON.stringify({msg: "no file to backup"}));
        }
    }

    // 4. GET /server-info
    else if(path == '/server-info' && req.method == 'GET'){
        res.writeHead(200, {'Content-Type':'application/json'});

        const info = {
            platform: os.platform(),
            cpu: os.cpus().length,
            memory: os.totalmem()
        };

        res.end(JSON.stringify(info));
    }

    // default
    else{
        res.writeHead(404, {'Content-Type':'application/json'});
        res.end(JSON.stringify({msg: "route not found"}));
    }

});

// run server on port 3000
server.listen(3000, function(){
    console.log("server running on port 3000");
});