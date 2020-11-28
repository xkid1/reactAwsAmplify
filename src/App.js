import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddItems from './Components/AddItems';
import BuyItemList from './Components/BuyItemList';
import CartItemList from './Components/CartItemList';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route path="/add-item" component={AddItems} />
					<Route path="/buy-item" component={BuyItemList} />
					<Route path="/cat-item" component={CartItemList} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
