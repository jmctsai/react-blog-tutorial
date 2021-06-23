import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'

export default function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='content'>
					{/* <Switch> only ONE page at once. Surround all routes with Switch */}
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/create'>
							<Create />
						</Route>
						<Route path='/blogs/:id'>
							<BlogDetails />
						</Route>
						{/* Catch all 404 routes */}
						<Route path='*'>
							<NotFound />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}
