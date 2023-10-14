import React from "react"; 
import SearchBar from "./SearchBar.jsx"; 

const PrimaryNav = () => {

	const primaryNavStyle = {
		display: "flex", 
		justifyContent: 'space-evenly', 
		alignItems: "center", 
		// padding: "0px 20px"
	}


	const linkStyle ={
		textDecoration: "none", 
		fontSize: 12, 
		letterSpacing: 1, 
		color: "black", 
		fontWeight: "bold"
	}



	const linkItems= ["ABOUT US", "EVENTS", "FORMS", "WAYS TO GIVE", "CONTACT"]; 

	return (
		<nav style={primaryNavStyle}>
			<div className="link"><a style={linkStyle} href="#">ABOUT US</a></div>
			<div className="link"><a style={linkStyle} href="#">EVENTS</a></div>
			<div className="link"><a style={linkStyle} href="#">FORMS</a></div>
			<div className="link"><a style={linkStyle} href="#">WAYS TO GIVE</a></div>
			<div className="link"><a style={linkStyle} href="#">CONTACT</a></div>
			<SearchBar/>
		</nav>
		)

}

export default PrimaryNav; 