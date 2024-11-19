import React from 'react';
import Link from '@docusaurus/Link';

export const ScenarioDir = () => {
  // <!-- random input test screen pics -->
  return (
    <ul>
      <li>
        An individual <Link to="writing_tests.mdx#report">report.txt</Link>
      </li>
      <li>
        Another copy of <Link to="writing_tests.mdx#error-pics">error screenshots and html files</Link>
      </li>
      <li>
        <Link to="writing_tests.mdx#pic">Pictures you took of screens along with their associated HTML files</Link>
      </li>
      <li>
        <Link to="writing_tests.mdx#download">Files you downloaded</Link>
      </li>
      <li>
        <Link to="writing_tests.mdx#compare-json">JSON variables you compared</Link>
      </li>
      <li>
        <Link to="writing_tests.mdx#a11y-all">Accessibility failures</Link>
      </li>
    </ul>
  );
}







