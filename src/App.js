import React, {useState} from "react"; 
import Tweet from "./Tweet";

function App(){

  const [isRed, setRed ] = useState(false);
  const [count, setCount] = useState(0);
//name,name that can change value function

const increment = () => {
  setCount(count +1 );
  setRed(!isRed);
};

const [users,setUser] = useState([
  {name: "Ed", message: "Hello there"},
  {name: "John", message: "I am john snow"},
  {name: "traversy", message: "I am awesome"}
]);



  return (
    <div className= "app">
      {users.map(user => (
        <Tweet name={user.name} message = {user.message} />
      ))}
    </div>
  );
}


export default App;