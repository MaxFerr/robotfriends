import React from 'react';

const searchBox=({searchField,searchChange})=>{
	return (
		<div className= 'pa2'>
			<input 
			className= 'pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='Search robots'
			onChange={searchChange}
			/>
			<button 
			className='bg-animate bg-lightest-blue hover-bg-gray items-center pa3' 
			type="submit">Enter</button>
		</div>
		);
}

export default searchBox;

