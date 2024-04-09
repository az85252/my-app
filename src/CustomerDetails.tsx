import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import './App.css'
function CustomerDetails() {

  const { id } = useParams();
  const [customer, setUser] = useState({"id": 0,
  "name": "",
  "username": "",
  "email": "",
  "address": {
    "street": "",
    "suite": "",
    "city": "",
    "zipcode": "",
    "geo": {
      "lat": "",
      "lng": ""
    }
  },
  "phone": "",
  "website": "",
  "company": {
    "name": "",
    "catchPhrase": "",
    "bs": ""
  }
    
  });

  useEffect(() => {
    console.log("TRY")
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setUser(data);
      console.log(data)
    };
    fetchData();
  }, []);


  return (
    <div>
    <h3>{customer.name}</h3>
    <div>
    <div>Email: {customer.email}</div>
    <div>Phone: {customer.phone}</div>
    <div>City: {customer.address.city}</div>
    <div>Etc Etc ...</div>
    </div>
    </div>
  );
}

export default CustomerDetails;


//I decided that I wanted to solve problem 2 the similar way I did for problem one which is to use a state and useeffect hook. I feteched the api in a similar way to problem 1.
//For the return I decided to list them out as divs or a list. I opted for using multiple div tags for each elemernt but if needed alternatively could use a loop internal for getting any key.
//I also thought about that using a different route aka URL for this would be beneficial to seperate for getting specific customer.