const express = require('express');
const app = express();



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


// route to get all flights, Endpoint is => localhost:3000/flights
app.get('/flights', (req,res) => {

       res.send(flights);
    
   });


const port = process.env.port || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
