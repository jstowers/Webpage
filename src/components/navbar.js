// Component creates a navigation bar with buttons
// Rev. 2/21/17 4:41 pm

import React, { Component } from 'react';
import AboutMeDetail from './aboutmedetail';

class NavBar extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	  	tabValue: null,
	  	showComponent: false
	  }

	  this.tabs = ['About', 'Coding', 'Passions'];

	}

	onClick(tab) {
		event.preventDefault;
		console.log('event =', event);
		console.log('tab = ', tab);
		this.setState({showComponent: !this.state.showComponent});
		this.setState({tabValue:tab});
	}

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

	test() {
		if (this.state.showComponent && this.state.tabValue === 'About') {
			return <AboutMeDetail />
		}
	}

	render() {

	  console.log('state =', this.state);

	  return (
	  	<div>
	  		{this.listTabs()}
	  		{this.test()}
	  	</div>
	  );
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
*/

