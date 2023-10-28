const express = require("express"); 
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-a', '/usr']);

app.use(express.static(path.join(__dirname, ".")));
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));

function c(s){console.log(s)}

console.log("Server Initiated! Working Directory (for server js file):"+path.join(__dirname, "."));

const PORT = process.env.PORT || 5556;
app.listen(PORT, function(){
    console.log("Server started on port "+PORT);
});

app.get("/", function(req, res){
    res.sendFile(__dirname+"/waystation.html");        
});
app.post("/",(req, res)=>{
    console.log("Incomming Post from /, command: "+req.body.command);
    if(req.body.command == "engage"){
        c("Triggering a refresh! Yay!");
    }else{
        console.log("Post recieved with unrecognized command");
        res.status(204).send();
    }
});
