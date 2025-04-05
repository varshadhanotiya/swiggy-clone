import React from 'react'
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src="https://imgs.search.brave.com/wG0wX0fVuWOQC1dJ_VXwXmM4pP2PtbF-EUv4cILhQpg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby1uZXcv/Z3JlZW4tYW5kLWJl/aWdlLWZvb2QtdHJ1/Y2stODg0OWxkLnBu/Zz9ud209MSZud3M9/MSZpbmR1c3RyeT1m/b29kJnR4dF9rZXl3/b3JkPUFsbA" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
    const {cuisine, resName} = props
    // console.log("props aree----", props, resName)
    return (
        <div className='res-card' style={{backgroundColor : "#f0f0f0"}}>
            <img className="res-logo" src="https://imgs.search.brave.com/IOlz2aQiGVjOLJGY6jgOE0WHKcCUudgJHbAWBPltKEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/aXNvdHRvLXdpdGgt/YXNwYXJhZ3VzLWJl/YW5zLXp1Y2NoaW5p/LWdyZWVuLXBlYXNf/MjgyOS04Mjc2Lmpw/Zz9zZW10PWFpc19o/eWJyaWQ" alt="res-logo" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
}

const Body = () =>{
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard resName="First Outlet" cuisine="Biryani, North Indian"/>
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
            </div>
        </div>
    );
}

function AppLayout() {
  return (
    <div className="app">
        <Header />
        <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);