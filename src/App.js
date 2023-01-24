import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'src/assets/scss/App.scss';
import { Provider } from 'react-redux';

import PrivateRoute from 'src/PrivateRoute';
import store from 'src/redux/configureStore';
import Login from 'src/pages/login';
import Home from 'src/pages/home';

const App = () => {
	return (
		<Provider store={store}>
			<HashRouter>
				<Routes>
					{/* <Route
						path='/'
						exact
						element={
							<PrivateRoute>
								<Home />
							</PrivateRoute>
						}
					></Route> */}
					<Route path='/' exact element={<Home />}></Route>
					<Route path='/login' element={<Login />} />
					{/* <Route path='/:somestring' exact element={<Error />} /> */}
				</Routes>
			</HashRouter>
		</Provider>
	);
};

export default App;
