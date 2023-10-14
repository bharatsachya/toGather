import React from "react"; 

const NavLinks = (props) => {

	const unorderedStyle = {
		paddingLeft: 0, 
		margin: 0, 
		listStyle: "none",
		backgroundColor: props.backGroundColor,
		display: "flex", 
		// border: "2px solid"
	}

	const listStyle = {
		display: "flex", 
		justifyContent: "center", 
		alignItems: "center",  
		flex: 1
	}

	const linkStyle ={
		textDecoration: "none",
		color: "black", 
		fontSize: props.fontSize,
		padding: 20, 
		textAlign: "center", 
		letterSpacing: 1
	}

	return (		
			<ul className="navlink" style={unorderedStyle}>
			 {props.linkItems.map((elm) => 
			 	<li
			 		className="secondary-nav"
			 		style={listStyle} 
			 		key={elm}>
				 		<a
				 			className="secondary-nav-link"
				 			style={linkStyle} 
				 			href="#">
				 			{elm}
				 		</a>
			 	</li>
			 	)}
			</ul>	
	)

}

export default NavLinks; 

//props is an array of link items(this is what it must be called) 
//to be rendered in the navigation bar. props type is compulsory. 