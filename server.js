const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
const io = require('socket.io')();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


myData = JSON.stringify({
  "object": "value",
  "document": {
    "object": "document",
    "data": null,
    "nodes": [
      {
        "object": "block",
        "type": "heading-one",
        "isVoid": false,
        "data": null,
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Hello, World!",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "isVoid": false,
        "data": null,
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "This is the main assignment Editor, usually called the Body editor.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "isVoid": false,
        "data": null,
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Students will mainly complete their assignment here. The content inputted here should be regularly saved to the server, and loaded back on every refresh. This content will eventually become a part of a final Submission.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "isVoid": false,
        "data": null,
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "While working, it might be useful to display a \"live\" word count in the top-right corner, so that the students have a better idea of how much they need to write.",
                "marks": []
              }
            ]
          }
        ]
      }
    ]
  }
})
serverport = 5050;

allData = {}

// console.log that your server is up and running
app.listen(serverport, () => console.log(`Listening on port ${serverport}`));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


io.on('connection', (client) => {
  let token = client.handshake.query.id;
  console.log(token)
  // here you can start emitting events to the client 
  client.on('senddata', (data, callback) => {
    allData[token] = data
    client.broadcast.emit('getdata', {token:token, data:allData[token]});
    callback(true);
  });
  if (!allData[token]){
    allData[token] = myData
  }
  client.emit('getdata', {token:token, data:allData[token]});
  
});

socketport = 5000;

io.listen(socketport);
console.log('listening on port ', socketport);