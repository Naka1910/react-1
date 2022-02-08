export default function Task(props) {
  console.log(props.text);
  return (
    <div>
      <input type="checkbox" ></input>
      <span>{props.text}</span>
      <button className="App-button" onClick={() => {
        props.onDelete(props.id)
      }}>Delete</button>
    </div>
  )

} 