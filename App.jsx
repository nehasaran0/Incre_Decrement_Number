
//-------------------------incremental mini project----------------------------------

import React, { useState } from 'react';
const App =()=>{
const state = useState();
//console.log(state)


const [count ,setCount]= useState(0);

const IncNUM =()=>{
  setCount(count + 1);
  //console.log("clicked "+ count++);
};
const DecNUM =()=>{
  setCount(count - 1);
  //console.log("clicked "+ count++);
};

  return(
  <div>
    <h2>Increment and Decrement</h2>
   <h1>{count}</h1>
   <button className="In" onClick={IncNUM}>Increment</button>
   <button className="De" onClick={DecNUM}>Decrement</button>
</div>
  );
};

export default App;








