import React, { Component} from "react";
import "./App.css";

function App() {
	const [count, setCount] = React.useState(0);

	return (
		<div className="App">
			<h1> Hello, World! </h1>
			<button onClick={() => setCount(count + 1)}>Click me {count}</button>
		</div>
	);
}
	
export default App;