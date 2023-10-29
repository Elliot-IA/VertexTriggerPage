const { exec } = require('child_process');
const express = require("express"); 
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

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
app.get("/gus", function(req, res){
    var yourscript = exec('sh ./bashScripts/gusRefresh.sh',
                          (error, stdout, stderr) => {
        console.log("stdou: "+stdout);
        console.log("stderr: "+stderr);
        /*if (error !== null) {
            console.log(`exec error: ${error}`);
            res.send({result:"Refresh Worked! (:"});
        }else{*/
            res.send({result:"Refresh Complete! (:"});//Failed /:"});
        //} 
    });
});
app.get("/jonah", function(req, res){
    var yourscript = exec('sh ./bashScripts/jonahRefresh.sh',
                          (error, stdout, stderr) => {
        console.log("stdou: "+stdout);
        console.log("stderr: "+stderr);
        /*if (error !== null) {
            console.log(`exec error: ${error}`);
            res.send({result:"Refresh Worked! (:"});
        }else{*/
            res.send({result:"Refresh Complete! (:"});//Failed /:"});
        //}
    });
});
app.get("/kendell", function(req, res){
    var yourscript = exec('sh ./bashScripts/kendellRefresh.sh',
                          (error, stdout, stderr) => {
        console.log("stdou: "+stdout);
        console.log("stderr: "+stderr);
        /*if (error !== null) {
            console.log(`exec error: ${error}`);
            res.send({result:"Refresh Worked! (:"});
        }else{*/
            res.send({result:"Refresh Complete! (:"});//Failed /:"});
        //}
    });
});
app.get("/logan", function(req, res){
    var yourscript = exec('sh ./bashScripts/loganRefresh.sh',
                          (error, stdout, stderr) => {
        console.log("stdou: "+stdout);
        console.log("stderr: "+stderr);
        /*if (error !== null) {
            console.log(`exec error: ${error}`);
            res.send({result:"Refresh Worked! (:"});
        }else{*/
            res.send({result:"Refresh Complete! (:"});//Failed /:"});
        //}
    });
});


