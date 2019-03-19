const deleteStyle = {
  marginLeft: 55,
  display: "block",
  borderRadius: 50,
  marginTop: -15,
  fontSize: "12px",
  color: "gray"
}
const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}<span style={deleteStyle} onClick={()=> props.deleteItem(index, item)}>X</span></li>)
    }
  </ul>
);

export default List;