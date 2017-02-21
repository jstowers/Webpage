/*
import React, { Component } from 'react';

class NavBar extends Component {

	constructor(props) {
	  super(props);

	  this.tabs = ['About', 'Coding', 'Passions'];

	}

	listTabs() {
	  return this.tabs.map((tab, index) => {
	  	return (
	  	  <button 
	  	  	key={index} 
	  	  	className='btn btn-primary'>{tab}
  	  	  </button>
  		)
	  });
	}

	render() {
	  return (
	  	<NavBarItem
	  		onButtonSelect = { props.onButtonSelect }
	  		key = { }
	  	<div> 
	  		<div className="navBar">
	  		 	{ this.listTabs() }
	  		</div>
	  		<img src="/img/JoeProfilePhoto.jpg" alt="JoeStowers" />
	  	</div>
	  )
	}
}

export default NavBar


// glyphicon glyphicon-briefcase

// 2/19/17 at 11:55 pm
/*
	render() {
		  return (
		  	<div> 
		  		<div className="navBar">
		  		 	{ this.listTabs() }
		  		</div>
		  		<img src="/img/JoeProfilePhoto.jpg" alt="JoeStowers" />
		  	</div>
		  )
	}
*/