import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Customer } from './Customer';
import './App.css'

function CustomerDetails() {

  const { id } = useParams(); //we need this to get the id for bwloe 
  const [customer, setUser] = useState<Partial<Customer>>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <div>
    <h3>{customer.name}</h3>
    <div>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <div>
        <h4>Address:</h4>
        <p>Street: {customer.address?.street}</p>
        <p>Suite: {customer.address?.suite} </p> {/* Would Suite be optional?*/}
        <p>City: {customer.address?.city}</p>
        <p>Zipcode: {customer.address?.zipcode}</p>
        <div>
          <h5>Geo:</h5> {/*Would Geo also be optional or not?*/}
          <p>Lat: {customer.address?.geo?.lat}</p>
          <p>Lng: {customer.address?.geo?.lng}</p>
        </div>
      </div>
      <div>
        <h4>Company:</h4>
        <p>Name: {customer.company?.name}</p>
        <p>Catch Phrase: {customer.company?.catchPhrase}</p>
        <p>BS: {customer.company?.bs}</p>
      </div>
    </div>
    </div>
  );
}

export default CustomerDetails;

//I decided that I wanted to solve problem 2 the similar way I did for problem one which is to use a state and useeffect hook. I feteched the api in a similar way to problem 1.
//For the return I decided to list them out as divs or a list. I opted for using multiple div tags for each elemernt but if needed alternatively could use a loop internal for getting any key.
//I also thought about that using a different route aka URL for this would be beneficial to seperate for getting specific customer.

// If we wanted some parameters to be optional then it would look something like this:
//  {customer.address && (
//    <div>
//    <h4>Address:</h4>
//    <p>Street: {customer.address.street}</p>
//    {customer.address.suite && 
//      <p>Suite: {customer.address.suite}</p> } {/* Suite is optional */}
//    <p>City: {customer.address.city}</p>