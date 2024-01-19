import React from 'react'

function Debouncing() {




  
    function debounce(func, timeout = 300){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }
      function saveInput(){
        console.log('Saving data');
      }
      const processChange = debounce(() => saveInput());
  return (
    <div>Debouncing
<button onClick={processChange}>Click me</button>


    </div>
  )
}

export default Debouncing