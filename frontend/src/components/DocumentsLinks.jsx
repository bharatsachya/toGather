import React from "react"; 
import WaysToGive from "./Data/WaysToGive.js"; 
import Article from "./articles.jsx"; 

const DocumentLinks = () => {

	const sectionStyle ={
		display: "flex", 
		flexWrap: "wrap", 
		justifyContent: "space-evenly", 
		padding: "70px 0px", 
	}


	return(
		<section className="documentlinks-section" style={sectionStyle}>
		  {WaysToGive.map((elm, index) => 
		  	<Article 
		  	   key={index} 
		  	   heading={elm.heading} 
		  	   content={elm.description} 
		  	   headerColor="#fa3635"
		  	   border="2px solid" 
		  	   textAlign= "left"
		  	   flexBasis="40%"
		  	   maxWidth="500px"
		  	   letterSpacing="1px"
		  	/>
		   )}
		</section>
		)
}

export default DocumentLinks; 