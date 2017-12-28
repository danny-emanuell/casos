const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);


app.use( express.static( path.join( __dirname, 'dist' ) ) );

app.get( '*', (req,res) => {
    res.sendFile( path.join( __dirname, 'dist/index.html' ) );
} );




app.listen( port , ()=> {
    console.log(`On port ${port}`);
})

