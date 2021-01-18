import React from "react";
import './App.css';
import Route from "react-router-dom/es/Route";
import {Redirect} from "react-router";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AccountCarrier from "./Components/Account/AccountCarrier/AccountCarrier";
import MyDumps from "./Components/MyDumps/MyDumps";
import AccountCustomer from "./Components/Account/AccountCustomer/AccountCustomer";
import Logistics from "./Components/Logistics/Logistics";
import ConfirmOrder from "./Components/ConfirmOrder/ConfirmOrder";
import History from "./Components/History/History";
import OrderPage from "./Components/OrderPage/OrderPage";

function Main() {
    return (
        <div>
            <Route exact path='/' render={() => <Redirect to={'/home'}/>}/>
            <Route path='/home' render={() => <HomePage/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/register-carrier' render={() => <Register user={'Перевозчика'} type={'register'}/>}/>
            <Route path='/register-customer' render={() => <Register user={'Заказчика'} type={'register'}/>}/>
            <Route path='/account-carrier' render={() => <AccountCarrier/>}/>
            <Route path='/account-customer' render={() => <AccountCustomer/>}/>
            <Route path='/my-dumps' render={() => <MyDumps/>}/>
            <Route path='/my-logistics' render={() => <Logistics/>}/>
            <Route path='/confirm-order' render={() => <ConfirmOrder/>}/>
            <Route path='/history-transportations' render={() => <History person={'carrier'}/>}/>
            <Route path='/history-orders' render={() => <History person={'customer'}/>}/>
            <Route path='/order-info' render={() => <OrderPage/>}/>
            <Route path='/new-object' render={() => <Register type={'object'}/>}/>
            <Route path='/new-dump' render={() => <Register type={'dump'}/>}/>
        </div>
    );
}

export default Main;
