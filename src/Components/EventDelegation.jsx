

import React, { useEffect } from 'react';



const List = ({ items, onItemClick }) => {
  const handleListClick = (event) => {
    const targetId = event.target.getAttribute('data-id');
    const targetText = event.target.textContent;
    if (targetId) {
      onItemClick(targetId, targetText);
    }
  };

  return (
    <ul onClick={handleListClick}>
      {items.map((item) => (
        <li key={item.id} data-id={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

const EventDelegation = () => {

    useEffect( () => {

        console.log("Welcome to Programiz!");
    
        const data = async () => {
           const response =  await fetch('https://fakestoreapi.com/products')
           
           const responsedata = await response.json();
        //    console.log(responsedata)
           return responsedata;
        }
        
        // console.log(data().then( (respomse) => {
        //     console.log(respomse)
        // }))

        const daata = data();
        console.log(daata)

        console.log("Welcome to Programiz! test2");
    },[])

  const handleItemClick = (itemId, itemText) => {
    // Handle the click event for the list item
    alert(`Clicked Item: ${itemText}`);
    // Additional logic if needed
  };

  const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    // Add more items as needed
  ];

  return (
    <div>
      <h1>Event Delegation in React</h1>
      <List items={items} onItemClick={handleItemClick} />
    </div>
  );
};

export default EventDelegation;