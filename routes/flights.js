const express = require('express');
const router = express.Router();


// Hard coded Flights Object just for the
//purpose of demonstration 

const flights = [

    { id: 1, name: "Luftahanza", flightNumber: "185B"  },
    { id: 2, name: "RyanAir", flightNumber: "163CB"  },
    { id: 3, name: "WizzAir", flightNumber: "205NR"  },
    { id: 4, name: "Qatar AirWays", flightNumber: "60CD"  },
    { id: 5, name: "Egyptian Air", flightNumber: "376B"  },
    { id: 6, name: "SAS", flightNumber: "453WD"  }
   
   ];

   //NOTE: /flights is ommited from the URL because it's been set
   // in index.js [app.use('/flights', flights)]
   
   // route to get all flights, Endpoint is => localhost:3000/flights

   router.get('/', (req,res) => {

       res.send(flights);
   });
   
   // route to create a flight, Endpoint is => localhost:3000/flights/:n/:f

   router.post('/:name/:flightNumber', (req,res) => {
   
   
       const flight = {id: flights.length+1, name: req.params.name,
       flightNumber: req.params.flightNumber}
       flights.push(flight);  

       res.send(flight);
   });
   
   // route to remove a flight, Endpoint is => localhost:3000/flights/:id

   router.delete('/:id', (req,res) => {
   
   
      const flight = flights.find(f  => f.id === parseInt(req.params.id));
      let index = flights.indexOf(flight);
      flights.splice(index, 1);

       res.send(flight);

   });
   
   // route to get a specific flight, Endpoint is => localhost:3000/flights/:id

   router.get('/:id', (req,res) => {
   
   
         const flight = flights.find(f  => f.id === parseInt(req.params.id));

         if(!flight) {return res.status(404).send('There is no flight with this ID...')}

        res.send(flight);

 });

 // export the module to be later required anywhere in the app
 
 module.exports = router;
 
