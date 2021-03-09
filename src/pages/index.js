import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Redirect} from '@docusaurus/router';

function Home() {
  const context = useDocusaurusContext();
  let docs = context.siteConfig.baseUrl + "docs/"
  return <Redirect to={{ pathname: docs }}/>;
}

export default Home;
