import React from 'react';
//scroll component which contain the cardlist component (children)
const scroll=(props)=>{
return (
	<div style={{overflowY:'scroll', border: '1px solid black', height:'800px'}} >
		{props.children}
	</div>
	)
};

export default scroll;