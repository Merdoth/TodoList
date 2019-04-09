const deleteStyle = {
  marginLeft: 25,
  display: "block",
  marginBottom: "8px",
  borderRadius: 50,
  cursor: "pointer",
  fontSize: "12px",
  color: "pink"
}
const itemWrapper = {
  display: "flex"
}


const List = props => (
  <ul>
    {
      props.items.map((item, index) => 
      <li key={index} style={itemWrapper}>
      <div>{item}</div>
      <span style={deleteStyle} onClick={()=> props.deleteItem(index, item)}>X</span>
      </li>)
    }
  </ul>
);

export default List;