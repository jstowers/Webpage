// Component creates a navigation bar with buttons
// Rev. 2/21/17 4:41 pm

import React, { Component } from 'react';
import AboutMeDetail from './aboutmedetail';
import CodingDetail from './codingdetail';

class NavBar extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	  	tabValue: null,
	  	showComponent: false
	  }

	  this.tabs = ['About', 'Coding', 'Passions'];

	}

	// onClick() function toggles state for tab values and whether to show component
	// details for each tab in NavBar
	onClick(tab) {
		event.preventDefault;
		console.log('event =', event);
		console.log('tab = ', tab);
		if (tab !== this.state.tabValue && !this.state.showComponent){
			this.setState({showComponent: !this.state.showComponent});
		} else {
			this.setState({showComponent: true});
		}
		this.setState({tabValue:tab});
	}


	// listTabs() function displays the buttons
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

	showTabContent() {
		let tab = this.state.tabValue;
		let component = this.state.showComponent;

		if (component && tab === 'About') {
			return <AboutMeDetail />
		} else if (component && tab === 'Coding') {
			return <CodingDetail />
		}
		else return null;
	}

	render() {

	  console.log('state =', this.state);

	  if(!this.state.showComponent){
	  	return (
	  		<div>
	  			{this.listTabs()}
	  		</div>
	  	);
	  }

	  else if (this.state.tabValue) {
	  	return(
	  		<div>
		  		{this.listTabs()}
		  		{this.showTabContent()}
	  		</div>
  		);
	  }
	}
}

export default NavBar

/*
	</button>
    { tab === 'About' && this.state.showComponent ? 
	  	  	    		<AboutMeDetail /> : null
	 }



*/



/* TO DO

1.  Consider adding glypicons for buttons?
	glyphicon glyphicon-briefcase

2.	Image element for photo
		<div className="row">
			<div className="col-sm-8">
		  		<img src="/img/JoeProfilePhoto.jpg" alt="JoeStowers" />
		  	</div>
		</div>

3.	Need to see about passing the Tab props (About, Coding, Passions) into
	the proper component.
*/

