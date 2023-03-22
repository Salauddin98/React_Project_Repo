import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = ['salaudidn', 'alauddin', 'bappaDa']

  return (
    <div className="App">
      {/* For count */}
      <DataLoad></DataLoad>
      <Counter></Counter>
      {name.map(names => <Salauddin name={names}></Salauddin>)}

      {/* <Salauddin name = "Salauddin" age="21" designation="student"></Salauddin>
      <Salauddin name = "Alauddin" age="21" designation="student"></Salauddin>
      <Salauddin name = "Jamaluddin" age="21" designation="student"></Salauddin> */}
    </div>
  )
}

//We can create component ... here we use capital letter because it's different html tags---->
function Salauddin(props) {
  return (
    <div className='about'>
      <h1> Name: {props.name}</h1>
      <h1> Age: {props.age}</h1>
      <h1>Designation: {props.designation}</h1>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  const incrementButton = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementButton}>Increment</button>
    </div>
  )
}

// for dynamic data load practice
function DataLoad() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Pratice useEffect</h1>
      {users.map(user =>  <ShowUserData name={user.name} email={user.email}></ShowUserData> )}
    </div>
  )
}

function ShowUserData(props) {
  return (
    <div style={{border:'1px solid #000',padding:'10px',backgroundColor:'purple',color:'white',margin:'10px'}}>
      <p>User Name: {props.name}</p>
      <p>User Email : {props.email}</p>
    </div>
  )
}
export default App
