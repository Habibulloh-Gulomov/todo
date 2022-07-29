

const ListItem = ({text,isComplated,id}) =>{
 

  function deleted(evt){
    // let evtID = evt.detail + 1
    // console.log(evtID);
    if(id == id){
     
      let newItem = evt.target.closest("li");
      newItem.innerHTML =  [] ;
    }
    
  }
  return <li className="d-flex my-3 justify-content-center">
    {isComplated ? <input defaultChecked='true' type="checkbox" className="form-check-input"/>:<input type="checkbox" className="form-check-input"/>}
    <p className="mx-3">{text}</p>
    <button className="btn btn-warning mx-3">Edit</button>
    <button onClick={deleted}  className="btn btn-danger">Delete</button>
  </li>
}

export default ListItem