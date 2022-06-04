const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors')

const players = {

    'lebron james':{
        "Height":"6'9",
        "Weight": "250 lbs",
        "age": "37"
    },

    'stephen curry':{
        "Height":"6'2",
        "Weight": "185 lbs",
        "age": "34"
    }

}
app.use(cors())

app.get('/',(request, response)=>{
    response.sendFile(__dirname +'/index.html')
})
app.get('/api/:name' , (request, response)=>{
     const playerNames = request.params.name.toLowerCase()  
     if(players[playerNames]){
         response.json(players[playerNames])
     }else{
        response.json(players['unknown'])
     }
})



app.listen(PORT,()=>{
    console.log(`the server is now running on port ${PORT}`)

})