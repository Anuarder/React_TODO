import "./styles/root_styles.scss"
import React from 'react'
import Todos from "./components/Todos/Todos"


const App = () => {
	return (
		<div className="App">
			<Todos />
		</div>
	)
}

export default App;