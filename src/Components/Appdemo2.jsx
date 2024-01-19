import React, { useState, useEffect } from 'react';

// Higher Order Component (HOC)
const withLoader = (WrappedComponent, fetchData) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchDataFromApi = async () => {
        try {
          const response = await fetchData();
          setData(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchDataFromApi();
    }, []);

    return isLoading ? <Loader /> : <WrappedComponent data={data} {...props} />;
  };
};

const Loader = () => <div>Loading...</div>;

// Your functional component that will use the loader HOC
const DataComponent = ({ data }) => {
  // Render your component using the fetched data
  return (
    <div>
      <h2>Data Component</h2>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Fetch function example (replace with your API call logic)
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};

// Apply the HOC to your functional component
const DataWithLoader = withLoader(DataComponent, fetchData);

// Your main App component
const Appdemo2 = () => {
  return (
    <div>
      <h1>Loader HOC Example</h1>
      <DataWithLoader />
    </div>
  );
};

export default Appdemo2;