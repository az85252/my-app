import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css'

interface Customer {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: {
      street?: string;
      suite?: string;
      city?: string;
      zipcode?: string;
      geo?: {
        lat?: string;
        lng?: string;
      };
    };
    phone?: string;
    website?: string;
    company?: {
      name?: string;
      catchPhrase?: string;
      bs?: string;
    };
  }

function Customers() {

  const [users, setUsers] = useState<Customer[]>([
  ]);

  useEffect(() => {
    console.log("try");
    const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data + " Fetched ")
    setUsers(data);
  } 
  getData();
},[] )

return(
  users.map(x => (
    <div key={x.id}>
    <Link to={`/${x.id}`}>
      <p>{x.name}, {x.email}</p>
    </Link>
  </div>
  ) 
  
))
}

export default Customers