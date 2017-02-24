// Renders specified content based on nav button clicked by user.
// Rev. 2/23/17 11:40pm

import React, { Component } from 'react';

import AboutDetail from './aboutdetail';
import CodingDetail from './codingdetail';
import PassionsDetail from './passionsdetail';

class TabContent extends Component {

	constructor(props) {
		super(props);
	}

	showTabContent(tab) {
		if (tab === 'About') {
			return <AboutDetail />
		} else if (tab === 'Coding') {
			return <CodingDetail />
		} else if (tab === 'Passions'){
			return <PassionsDetail />
		}
	}

	render() {
		return (
			<div>
				<div className = "row">
					<div className = "col-sm-4">
						{this.showTabContent(this.props.tab)}
					</div>
					<div className = "col-sm-8 main-photo">
						<img src="/img/JoeProfilePhoto.jpg" alt="JoeStowers" />
					</div>
				</div>
			</div>
		);
	}
}

export default TabContent
