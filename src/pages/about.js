import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
	<Layout>
		<SEO title='About' />
		<section className='section'>
			<div className='container content'>
				<h1 className='title is-1'>About</h1>
			</div>
		</section>
	</Layout>
);

export default SecondPage;
