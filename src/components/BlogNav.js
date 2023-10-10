// BlogNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const BlogNav = () => {
	return (
		<div>
			<Navbar style={{
				backgroundColor:"#A3C1D4"
			}}>
				<img
			src='https://cdn.angelone.in/sparkweb/images/angel-one-logo.png'
			height='30'
			alt=''
			loading='lazy'
			/>
				<Navbar.Brand href="#home" style={{color:"white", marginLeft:"10px"}}>Blogging Website</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
					<Nav>
						<Nav.Link href="#home" style={{color:"white"}}>
							Angel
						</Nav.Link>
						<Nav.Link href="#about" style={{color:"white"}}>
							TCS
						</Nav.Link>
						<Nav.Link href="#services" style={{color:"white"}}>
							Wipro
						</Nav.Link>
						<Nav.Link href="#contact" style={{color:"white"}}>
							Reliance
						</Nav.Link>
					</Nav>
					{/* <Form inline>
						<FormControl type="text" placeholder="Search" className="ml-auto" />
					</Form> */}
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default BlogNav;
