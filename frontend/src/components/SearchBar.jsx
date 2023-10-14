import React from "react"; 

const SearchBar = () => {

	const formStyle = {
		// border: "1px solid"
	}


	const inputStyle ={
	  marginTop: 10, 
	  color: "#885ead", 
	  borderWidth: "0px 0px 1.5px 0px", 
	  borderColor: "black", 
	  outline: 0, 
	  background:"none", 
	  width: "80%", 
	  fontSize: 12,    
	  padding: "0px 0px 5px 0px", 
	}

	// const searchIconStyle = {
	//   color: "grey",  
	//   border: 0,  
	//   background: "transparent", 
	//   margin: 0,  
	//   padding: 0, 
	//   outline: 0,
	// }


	return(
		<form className="search" style={formStyle} action="#" method="post">
		    <input style={inputStyle} autocomplete="off" type="search" id="search" placeholder="Search" autofocus/>  	    
		</form>
	)
}


export default SearchBar; 


// <i style={searchIconStyle} className="fa fa-search" aria-hidden="true"></i> 