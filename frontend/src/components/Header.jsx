import React from "react"; 

const SiteHeader = () => {

    const headerStyle = {
    	backgroundColor: "black", 	
    	display: "flex", 
    	justifyContent: "center"  	
    }

    const divStyle ={
    	padding: 20, 
    	color: "white",
    	letterSpacing: 1, 
    	textAlign: "center", 
    	fontSize: 10 
    }

	return (
		<header style={headerStyle}>
			<div style={divStyle}>QUESTIONS ABOUT US?</div>
			<div style={divStyle}> NEED SUPPORT OR RESOURCE INFO?</div>
			<div style={divStyle}>CALL OUR HELPLINE AT 1-800-465-4837</div>
		</header>
		)
}

export default SiteHeader; 




 