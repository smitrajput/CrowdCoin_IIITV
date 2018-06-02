import React from 'react';
import { Menu,Icon } from 'semantic-ui-react';
import { Link } from '../routes';
export default() =>{
	return (
		<Menu style={{ marginTop: '10px'}}>
			<Link route="/">
				<a className="item" >
					<Icon color='teal' name='home' size='big' /> 
					CrowdCoin
				</a>
			</Link>
			<Menu.Menu position="right">
				<Link route="/">
				<a className="item"> 
					<p style={{color:'teal'}}>Campaigns</p>
				</a>
			</Link>
			
			<Link route="/campaigns/new">
				<a className="item"> 
					<p style={{color:'teal'}}>+</p>
				</a>
			</Link>
			</Menu.Menu>
		</Menu>
	);
};