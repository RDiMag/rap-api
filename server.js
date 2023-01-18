const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
  '21 Savage':{
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
  },
  'Chance the Rapper': {
    'age': 29,
    'birthName': 'Chancellor Bennett',
    'birthLocation': 'Chicago, Illinois'
  },
  'dylan': {
    'age': 29,
    'birthName': 'Dylan',
    'birthLocation': 'Dylan'
  },
}

 

app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
  const rappersName = request.params.rapperName
  if(rappers[rappersName]){
    response.json(rappers[rappersName])
  } else {
    response.json(rappers['dylan'])
  }
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is running on ${PORT}! You better go catch it!`)
})