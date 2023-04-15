const http = require("http");
const { fork } = require("child_process");

const server = http.createServer((req , res) => {

    // if(req.url = '/'){
    //     console.log("Salom")
    // }

    const son = +req.url.slice(1)

    const childProcess = fork('./child-processes/server-fork.js')

    childProcess.send(son , (error) => {
        if(error) console.log("Child Process Error", error)
    })

    childProcess.on("message", (result) => {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(result))
    })

});

server.listen(3000, () => console.log('server-ishga tushdi'))