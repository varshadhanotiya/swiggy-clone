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



function AppLayout() {
  return (
    <div className="app">
        <Header />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);