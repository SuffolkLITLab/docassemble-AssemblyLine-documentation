import React from 'react';
import Link from '@docusaurus/Link';

// GitHub-Triggered on Your Server
export const GTOYS = (props) => {
  if ( props.plain === true ) {
    return <span>GitHub+You™</span>
  } else {
    return <Link to="/docs/alkiln/setup#githubNyou-details">GitHub+You™</Link>
  }
}

// Manually-Triggered on Your Server
export const AutoDIY = (props) => {
  if ( props.plain === true ) {
    return <span>AutoDIY™</span>
  } else {
    return <Link to="/docs/alkiln/setup#diy-details">ALKilnInThePlayground™</Link>
  }
}

// GitHub Sandbox
export const KittyLitter = (props) => {
  if ( props.plain === true ) {
    return <span>GitHub Sandbox™</span>
  } else {
    return <Link to="/docs/alkiln/setup#sandbox-details">GitHub Sandbox™</Link>
  }
}
