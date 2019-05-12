import React from 'react'
import NextHead from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Head = ({ title, description }) => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{title || ''}</title>
		<meta name="description" content={description || ''} />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<meta name="theme-color" content="#000000" />
	</NextHead>
);

export default Head;