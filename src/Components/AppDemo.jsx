import React, { useState } from 'react';

const ListItem = ({ id, text, onItemClick }) => {
  return <li onClick={() => onItemClick(text)}>{text}</li>;
};

const List = ({ items, onItemClick }) => {
  return (
    <ul>
      {items.map((item) => (
        // <li key={item.id} onClick={() => onItemClick(item.text)}>{item.text}</li>
        <ListItem key={item.id} id={item.id} text={item.text} onItemClick={onItemClick} />
      ))}
    </ul>
  );
};

const AppDemo = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (text) => {
    // Handle the click event for the list item
    alert(text)
    setSelectedItemId(text);
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
      <p>Selected Item ID: {selectedItemId}</p>
    </div>
  );
};

export default AppDemo;