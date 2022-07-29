// function temp(evt) {
//   window.localStorage.setItem('child' , evt.children)
//   let Got = window.localStorage.getItem('child')
// }

const List = ( {children}) =>{
  return <ul>
    {children}
  </ul>
}

export default List