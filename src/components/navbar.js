// Component creates a navigation bar with buttons
// Rev. 2/23/17 11:30 pm

import React, { Component } from 'react';

import TabContent from './tabcontent';

class NavBar extends Component {

	constructor(props) {

	  super(props);

	  this.state = {
	  	tabValue: null,
	  }

	  this.tabs = ['About', 'Coding', 'Passions'];

	}

	// Sets state based on the tab button clicked
	onClick(tab) {

	  event.preventDefault;
	  console.log('tab = ', tab);
	  this.setState({tabValue:tab});
		
	}

	// Displays the nav bar buttons
	listTabs() {

	  return this.tabs.map((tab, index) => {

  		return (
  			<button 
	  	  		key={index}
	  	  		value={tab}
	  	  		className='btn btn-primary'
	  	  		onClick={ () => this.onClick(tab) } > {tab}
  	  	    </button>   
		);
	  });
	}

	render() {

	  return (
	  	<div>
	  		<h1> Joe Stowers </h1>
	  		{ this.listTabs() }
	  		<TabContent
	  			tab = {this.state.tabValue} />
	  	</div>
	  );
	}
}

export default NavBar



/* TO DO

1.  Consider adding glypicons for buttons?
	glyphicon glyphicon-briefcase

*/

