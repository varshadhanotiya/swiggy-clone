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
    const {resData} = props
    // console.log("props aree----", props, resName)
    return (
        <div className='res-card' style={{backgroundColor : "#f0f0f0"}}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId} alt="res-logo" />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
}

const resObj = {
    "info": {
      "id": "671928",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
      "locality": "7th Block",
      "areaName": "Koramangla",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.3,
      "parentId": "547",
      "avgRatingString": "4.3",
      "totalRatingsString": "4.3K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-04-06 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "bolt/bolt%206.png",
            "description": "bolt!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "bolt/bolt%206.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-f6e3890d-07cf-48e1-bd45-b6b2d72cf9e9"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
      "type": "WEBLINK"
    }
  };

const Body = () =>{
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard resData={resObj} />
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