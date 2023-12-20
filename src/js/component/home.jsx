import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div>
			<div className="row box">
				<div className="col counter"> 
				<i className="far fa-clock"></i>
				</div>

				<div className="col counter">
					{props.digit6}
				</div>
				<div className="col counter">
					{props.digit5}
				</div>
				<div className="col counter">
					{props.digit4}
				</div>
				<div className="col counter">
					{props.digit3}
				</div>
				<div className="col counter">
					{props.digit2}
				</div>
				<div className="col counter">
					{props.digit1}
			</div>
		</div>
		</div>
	);
};

export default Home;
