import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import AppIcon from 'components/AppIcon';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Gatsby Starter" />
      <div className="py-24">
        <div className="logo mx-auto">
          <AppIcon />
        </div>
        <h1 className="text-center">Hello World!</h1>
      </div>
    </Layout>
  );
};

export default IndexPage;
