/* Заказной компонент Article v2.1 */

//Импорт основного компонента React.js
import React from 'react';
import Article from './Article'
import articles from '../articles'

function App() {
	return (
		<div>
			<h1>My App</h1>
			<Article article={articles[0]} demostring="demo string" demoflag />
		</div>
	)
}

export default App