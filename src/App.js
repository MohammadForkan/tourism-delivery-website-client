import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import PlaceOrder from './Pages/Booking/Booking/PlaceOrder/PlaceOrder';
import ShowOrder from './Pages/ShowOrders/ShowOrder';
import AddEvents from './Pages/AddEvents/AddEvents';
import ManageOrders from './Pages/MagageOrders/ManageOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </Route>

            <Route path="/showOrder">
              <ShowOrder></ShowOrder>
            </Route>

            <PrivateRoute path="/addEvents">
              <AddEvents></AddEvents>
            </PrivateRoute>

            <PrivateRoute path="/manageOrder">
              <ManageOrders></ManageOrders>
            </PrivateRoute>


            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
