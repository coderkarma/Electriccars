import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Saluton Mondo!</h1>
        <p>Find this file in <code>src/pages/index.js</code>.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/about/">Go to the about page</Link>
    </Layout>
);

export default IndexPage;
