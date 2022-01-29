import React from "react";
import "./SecondLoadCss.css";
import gifLoader from "./Assets/gdsc-loader.gif";
// import "./Assets/gdsc";
function Secondload() {
	return (
		// <div class="artboard">
		//   <div class="domino">
		//     <div></div>
		//     <div></div>
		//     <div></div>
		//     <div></div>
		//   </div>
		// </div>
		<div class="newLoader">
			<img SRC={gifLoader} alt="Loader" class="loaderimg"/>
			{/* kuku */}
		</div>
	);
}

export default Secondload;
