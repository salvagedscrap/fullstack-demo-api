const express = require('express')
const app = express()
const PORT= 8000
const rappers = {
    '21 savage': {
        'birthName': 'sheeya bin abraham joseph',
        'birthLocation': 'london, england',
        'age':29
    },
    'chance the rapper':{
        'birthName': 'Chancelor Benett',
        'birthLocation': 'Chicago, Illinois',
        'age':29,
    },
    'unknown':{
        'birthName': 'unknown',
        'birthLocation': 'unknown, Illinois',
        'age':0,
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname +'/index.html')
})

app.get('/api/:name', (request,response)=>{
    const rapperName= request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is on fire yo at ${PORT}! `);
} )