import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import AdminRoute from './components/AdminRoute/AdminRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AdminActiveIssue from './containers/ActiveIssue/AdminActiveIssue/AdminActiveIssue';
import UserActiveIssue from './containers/ActiveIssue/UserActiveIssue/UserActiveIssue';
import AddIssue from './containers/AddIssue/AddIssue';
import Analytics from './containers/Analytics/Analytics';
import Home from './containers/Home/Home';
import IssueDetails from './containers/IssueDetails/IssueDetails';
import Login from './containers/Login/Login';
import AdminOpenIssue from './containers/OpenIssue/AdminOpenIssue/AdminOpenIssue';
import UserOpenIssue from './containers/OpenIssue/UserOpenIssue/UserOpenIssue';
import Register from './containers/Register/Register';
import AdminResolvedIssue from './containers/ResolvedIssue/AdminResolvedIssue/AdminResolvedIssue';
import UserResolvedIssue from './containers/ResolvedIssue/UserResolvedIssue/UserResolvedIssue';

function App() {
  const admin = useSelector((state) => state.data.admin);
  console.log(admin);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/openissue" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/admin/analytics"
            element={
              <AdminRoute>
                <Analytics />
              </AdminRoute>
            }
          />
          <Route
            path="/user/addIssue"
            element={
              <PrivateRoute>
                <AddIssue />
              </PrivateRoute>
            }
          />
          <Route
            path="/openissue"
            element={
              admin ? (
                <AdminRoute>
                  <AdminOpenIssue />
                </AdminRoute>
              ) : (
                <PrivateRoute>
                  <UserOpenIssue />
                </PrivateRoute>
              )
            }
          />
          <Route
            path="/activeissue"
            element={
              admin ? (
                <AdminRoute>
                  <AdminActiveIssue />
                </AdminRoute>
              ) : (
                <PrivateRoute>
                  <UserActiveIssue />
                </PrivateRoute>
              )
            }
          />
          <Route
            path="/activeissue/:_id"
            element={
              admin ? (
                <AdminRoute>
                  <AdminActiveIssue />
                </AdminRoute>
              ) : (
                <PrivateRoute>
                  <UserActiveIssue />
                </PrivateRoute>
              )
            }
          />
          <Route
            path="/resolvedissue"
            element={
              admin ? (
                <AdminRoute>
                  <AdminResolvedIssue />
                </AdminRoute>
              ) : (
                <PrivateRoute>
                  <UserResolvedIssue />
                </PrivateRoute>
              )
            }
          />
          <Route
            path="/issueDetails/:_id"
            element={
              admin ? (
                <AdminRoute>
                  <AdminResolvedIssue />
                </AdminRoute>
              ) : (
                <PrivateRoute>
                  <IssueDetails></IssueDetails>
                </PrivateRoute>
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
