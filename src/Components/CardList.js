import React from 'react';
import Card from './Card';

const cardList=({robots})=>{
	return (
		<div>
		{
			//looping thru robots array to render a Card where we give it multiple props
			robots.map((user,i)=>{
			return (
				<Card 
				key={i} 
				name={robots[i].name} 
				email={robots[i].email} 
				id={robots[i].id}
				/>
			);
		})
	}
		</div>
	)
}

export default cardList;