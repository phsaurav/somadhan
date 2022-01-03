import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Chatting from './components/Chatting/Chatting';
import IssueCard from './components/IssueCard/IssueCard';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

function App() {
// <<<<<<< HEAD
  return (
    <div className='lg:flex'>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
		<Navbar></Navbar>
			<div className='container mx-auto'>
				<Chatting></Chatting>
				<IssueCard></IssueCard>
			</div>
      </Router>
    </div>
  );
// =======
// 	return (
// 		<div>
// 			<Router>
// 				<Routes>
// 					<Route
// 						path='/'
// 						element={
// 							<PrivateRoute>
// 								<Home />
// 							</PrivateRoute>
// 						}
// 					/>
// 					<Route path='/login' element={<Login />} />
// 					<Route path='/register' element={<Register />} />
// 					<Route
// 						path='/home'
// 						element={
// 							<PrivateRoute>
// 								<Home />
// 							</PrivateRoute>
// 						}
// 					/>
// 				</Routes>
// 			</Router>
// 		</div>
// 	);
// >>>>>>> 6d63b9f5d70ff43443a2d346f891950ac3de8add
}

export default App;
