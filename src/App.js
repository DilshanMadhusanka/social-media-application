import { useState } from "react";
import "./App.css";

// const User123 = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };

//create a componet for Person

// const Person = (props) => {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h1>{props.positon}</h1>
//       <h1>{props.company}</h1>
//     </div>
//   );
// };

//number should insert inside the {}

// function App() {
//   const names = ["kasun ", "dilshan ", "sachin"]
//   return (
//     <div>
//      {names.map((name,key)=>{
//       return (
//        <h1 key ={key}>{name}</h1>
//       )
//      })}
//     </div>
//   );
// }

// function App(){
//   const name = ["kamal", "suni", "sachin"]
//   return (
//     <div>
//       {name.map((value, key)=>{
//         return (
//           <h1 key ={key}>{value}</h1>
//         );
//       })}
//     </div>
//   )
// }
/*
function App(){
  const cars = ["a","g","c "]
  return (
    <div>
      {cars.map((valus, key)=>{
        return <h1 key ={key}>
          {valus}
        </h1>
      })}
    </div>
  )
}
*/

//return object elements

// function App() {
//   const Users = [
//     { name: "kamal", age: 21 },
//     { name: "sadun", age: 23 },
//     { name: "dilshan", age: 34 },
//   ];
//   return (
//     <div>
//       {Users.map((User, key) => {
//         return
//         <User name={Users.name} age={Users.age} />;
//       })}
//     </div>
//   );
// }

//componets for the User

// const User = (props) => {
//   return (
//     <div>
//       {props.name} {props.age}
//     </div>
//   );
// };

// only increase the value in console

/*
function App() {
 let age =0;
  const increseAge = ()=>
  {
    age = age +1;
    console.log(age);
  };
  return (
    <div>
    {age}
    <button onClick={increseAge}>Increase age</button>
  </div>
  )
}
*/

// useState fuction

/*
function App (){
 const [age , setAge]= useState(0);
 const increaseAge =()=>{
  setAge(age+1);
 }
  return(
    <div>
      {age}
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
*/

// useStete for input values

/*
function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      {inputValue}
    </div>
  );
}

*/

// display the alert

/*
function App(){
  return (
    <div>
      <button onClick={()=>{
        alert("hi");
      }}>
        hello world
      </button>
    </div>
  )
}
*/

// Create show hide button

/*
function App() {
  const [showText, setShowText] = useState(true);

  return(
    <div>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show / Hide
      </button>
      {showText && <h1> Hi my name is dilshan </h1>}
    </div>
  );
}

*/

// change the color when click the button
/*
function App() {
  const [textColor, setTextColor] = useState("red");
  return (
    <div>
      <button
        onClick={() => {
          setTextColor(textColor == "black" ? "red" : "black");
        }}
      >
        Show / Hide
      </button>
      <h1 style={{ color: textColor }}>Hello ! My name is dilshan</h1>
    </div>
  );
}
*/

// increase , decrese and set to zero

/*
function App (){
 const [count , setCount] = useState(0);
 const increaseCount=()=>{
   setCount(count+1);
 }

 const decreseCount = ()=>{
  setCount(count -1);
 }

 const setToZero =()=>{
  setCount(0);
 }

  return (
    <div>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreseCount}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>
     {count}
    </div>
  )
}


*/

// desplay the output with input

/*
function App() {
  const [name, setName] = useState("");
  const setEnterName = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={setEnterName} />
      {name}
    </div>
  );
}

*/

// function to add data to the array

/*
const addTask = ()=>{
  let arr =[]
  const name = "dilshan "
  arr.push(name)
};

*/

// CRUD operation

/*
function App() {
  const [toDoList, setToDoList] = useState([]); // this is a list. initial state is empty array
  const [newTask, setNewTask] = useState("");  //create  a new task

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newToDoList = [...toDoList, newTask];
    setToDoList(newToDoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
        {toDoList.map((task)=>{
          return <h1>{task}</h1>
        })}

      </div>
    </div>
  );
}
*/

// useState HOOK

/*
function App (){
  const [count , setCount ] = useState(0)

  const incraseCount =()=>{
    setCount(count+1);
  }

  const decreaseCount =()=>{
    setCount(count -1);
  }
  
  const setCurrentState =()=>{
    setCount(0)
  }
  return (
    <div>
<button onClick={decreaseCount}>-</button>
<button>{count}</button>
<button onClick={incraseCount}>+</button>
<button onClick={setCurrentState}>setState</button>
    </div>
  )
}
*/



// useEFFECT hook

//we have ti import useEffect


/*

import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    //the code that we want to run
    console.log("the count is :", count);

    // optional return function (clean up function )

    return () => {
      console.log("i am being clean up!");
    };
  }, [count]); //dependacy array

  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <button>{count}</button>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}


*/

function App(){

  Axios.get().then ((res)=>{
    console.log(res.data);
  })
  return (
    <div>

    </div>
  )
}
export default App;
