import React from 'react'
import Head from './Head'
import Header from "./Header";
import Footer from "./Footer";
import './layout.scss';

export default ({children, settings = {}}) => (
	<div className="app-container">
		<Head title="Hello Next" description="Hello next description" />
		<Header />
		{children}
		<Footer />
	</div>
);