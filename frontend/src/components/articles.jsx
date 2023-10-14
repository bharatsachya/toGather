import React from "react"; 

const Article = (props) => {

	const articleStyle={
		flexBasis: props.flexBasis, 
		borderBottom: ".5px solid #d3d3d3", 
		padding: "30px 0px"
	}

	const headerStyle = {
		color: props.headerColor, 
		letterSpacing: props.letterSpacing, 
		textAlign: props.textAlign
	}

	const paraStyle ={
		// border: props.border,
		maxWidth: props.maxWidth,  
		textAlign: props.textAlign
	}


	return(
		<article style={articleStyle}>
			<h4 style={headerStyle}>{props.heading}</h4>
			<p style={paraStyle}>{props.content}</p>
		</article>

		)

}

export default Article; 

//declare prop types to be an object please. props must have
//heading = string value and content= string value 
//prop type is compulsory