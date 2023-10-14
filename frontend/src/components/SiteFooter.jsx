import React from "react"; 
import NavLinks from "./NavLinks.jsx"; 

const  SiteFooter= () => {

	const linkItems1 = ["Privacy Policy", "RSS Feeds", "Careers" , "Tax Information" , "Media and Press Room"]; 
	const linkItems2 = ["Facebook", "Twitter", "Linkedin", "Youtube", "Instagram"]; 

	return(
	  <nav>
		<NavLinks linkItems={linkItems1}/>
		<div>This footer</div>
		<NavLinks linkItems={linkItems2}/>
	  </nav>
		)
}

export default SiteFooter; 