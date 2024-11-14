import React from 'react';
import Link from '@docusaurus/Link';

export const ScenarioDir = () => {
  // <!-- random input test screen pics -->
  return (
    <ul>
      <li>
        An individual <Link to="/docs/components/ALKiln/alkiln_writing_tests#report">report.txt</Link>
      </li>
      <li>
        Another copy of <Link to="/docs/components/ALKiln/alkiln_writing_tests#error-pics">error screenshots and html files</Link>
      </li>
      <li>
        <Link to="/docs/components/ALKiln/alkiln_writing_tests#pic">Pictures you took of screens along with their associated HTML files</Link>
      </li>
      <li>
        <Link to="/docs/components/ALKiln/alkiln_writing_tests#download">Files you downloaded</Link>
      </li>
      <li>
        <Link to="/docs/components/ALKiln/alkiln_writing_tests#compare-json">JSON variables you compared</Link>
      </li>
      <li>
        <Link to="/docs/components/ALKiln/alkiln_writing_tests#a11y-all">Accessibility failures</Link>
      </li>
    </ul>
  );
}







