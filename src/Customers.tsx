import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Customer } from './Customer';
import './App.css'

function Customers() {
  const [users, setUsers] = useState<Customer[]>([]);

  useEffect(() => {
    const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  } 
  getData();
},[] )

return(
  users.map(x => (
    <div>
    <Link to={`/${x.id}`}>
      <p>{x.name}, {x.email}</p>
    </Link>
  </div>
  ) 
  
))
}

export default Customers

//As a Software engineer you are given a task to implement a simple UI that lists your company’s users, their details and posts.

//Create a UI that lists all our customers A simple UI to show a list of customers retrieved by this endpoint: https://jsonplaceholder.typicode.com/users The user card should show information like name and email address.

//Bonus point for a grid view but list view is fine also
//Create a UI that shows the details of a customer Upon clicking a user card, show all details of a customer and list all their questions to Tesla. You can retrieve customer’s questions by passing “userId” to this endpoint: https://jsonplaceholder.typicode.com/posts/?userId={userId}

//Bonus point: Show the UI on a different url