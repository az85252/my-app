import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Customer } from './Customer';
import './App.css'


function CustomerDetails() {

  const { id } = useParams();
  const [customer, setUser] = useState<Partial<Customer>>({});

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
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      {customer.address && (
      <div>
        <h4>Address:</h4>
        <p>Street: {customer.address.street}</p>
        <p>Suite: {customer.address.suite}</p>
        <p>City: {customer.address.city}</p>
        <p>Zipcode: {customer.address.zipcode}</p>

      </div>)}
      <div>
          <h4>Geo:</h4>
          <p>Lat: {customer.address?.geo?.lat}</p>
          <p>Lng: {customer.address?.geo?.lng}</p>
      </div>
    </div>
    </div>
  );
}

export default CustomerDetails;


//I decided that I wanted to solve problem 2 the similar way I did for problem one which is to use a state and useeffect hook. I feteched the api in a similar way to problem 1.
//For the return I decided to list them out as divs or a list. I opted for using multiple div tags for each elemernt but if needed alternatively could use a loop internal for getting any key.
//I also thought about that using a different route aka URL for this would be beneficial to seperate for getting specific customer.