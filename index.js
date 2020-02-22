const express = require("express"),
	app = express(),
	path = require("path"),
	bodyParser = require("body-parser"),
	fs = require("fs"),
	port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.get("/",(request,response)=>{
	response.render("index");
});

app.post("/lastColor",(request,response)=>{
	fs.readFile("last-color.txt","utf-8",function(error,data){
		response.json({
			lastColor: data
		})
	});
});

app.post("/new-color",(request,response)=>{
	fs.writeFile("last-color.txt",request.body.color,function(error,data){
		if(error){
			console.log(error);
		}
		response.json({
			result: true
		})
	});
});

app.listen(port,(error)=>{
	if(error){
		console.log(error);
		return
	}
	console.log("Server start");
});