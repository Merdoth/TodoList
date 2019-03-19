const deleteStyle = {
  marginLeft: 15,
  display: "block",
  borderRadius: 50
}
const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}<span style={deleteStyle} onClick={()=> props.deleteItem(index, item)}>X</span></li>)
    }
  </ul>
);

export default List;