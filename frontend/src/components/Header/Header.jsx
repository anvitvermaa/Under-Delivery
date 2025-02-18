import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
        Under Belly is our university café, offering a diverse menu of veg, non-veg, 
        Chinese, and Indian cuisine. Crafted with the finest ingredients and culinary 
        expertise, every dish is made to satisfy your cravings. Whether you're in the 
        mood for a comforting Indian curry, flavorful Chinese stir-fry, or a quick snack,
         we’ve got something for everyone. Our mission is to create a welcoming space where 
         great food meets great company, elevating your dining experience one delicious meal 
         at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
