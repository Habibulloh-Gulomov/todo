import { useState } from 'react'; 
import './App.css';
import List from './List/List';
import ListItem from './Listitem/Listitem';

function App() {

  const[value,setValue] = useState("")

  const [todos,setTodos] = useState([
    {
      id:1,
      text:'coding',
      isComplated:false,
    },
     {
      id:2,
      text:'writing',
      isComplated:true,
    },
    {
      id:3,
      text:'relax',
      isComplated:true,
    },
  ])

  function func(evt){
    setValue(evt.target.value)
  }

  function handleSubmit(evt){
    window.localStorage.setItem('item' , value )
    let inner = window.localStorage.getItem('item')
    evt.preventDefault()
    setValue(evt.target[0].value)
    setTodos([...todos,{
      id:evt.target.index,
      
      text:inner,
      isComplated:false,
    }])
    // console.log(id);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={func} type="text" placeholder='text'/>
        <button type='submit'>Submit</button>
      </form>
      <List>
        {
        todos.map(el => (
          <ListItem text={el.text} isComplated={el.isComplated} id={el.id}/>
        ))
        }
      </List>
    </div>
  ); 
  }

export default App;
