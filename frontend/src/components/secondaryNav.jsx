import React from "react"; 
import NavLinks from "./NavLinks.jsx"; 

const SecondaryNav = () => {

	const linkItems= ["YOUR LIFE", "PATIENTS & FAMILIES", "EDUCATION RESOURCES", "SUPPORT SERVICES", "HEALTHCARE PROFESSIONALS", "GLOSSARY"]; 

	return (
		<NavLinks 
		   linkItems={linkItems}
		   backGroundColor="#9fbfdf"
		   height="60px"
		   border="1px solid white"
		   fontSize="12px"	   
		/>
		)
}

export default SecondaryNav; 