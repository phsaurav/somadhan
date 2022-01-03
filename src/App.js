import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Chatting from './components/Chatting/Chatting';
import IssueCard from './components/IssueCard/IssueCard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

function App() {
  return (
    <div>
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
        <Chatting></Chatting>
        <IssueCard></IssueCard>
      </Router>
    </div>
  );
}

export default App;
