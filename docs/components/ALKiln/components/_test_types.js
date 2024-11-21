import React from 'react';
import Link from '@docusaurus/Link';

// GitHub-Triggered on Your Server
export const GTOYS = (props) => {
  if ( props.plain === true ) {
    return <span>GitHub+You™</span>
  } else {
    return <Link to="setup#githubNyou-details">GitHub+You™</Link>
  }
}

// Manually-Triggered on Your Server
export const AutoDIY = (props) => {
  if ( props.plain === true ) {
    return <span>ALKilnInThePlayground™</span>
  } else {
    return <Link to="setup#diy-details">ALKilnInThePlayground™</Link>
  }
}

// GitHub Sandbox
export const KittyLitter = (props) => {
  if ( props.plain === true ) {
    return <span>GitHub Sandbox™</span>
  } else {
    return <Link to="setup#sandbox-details">GitHub Sandbox™</Link>
  }
}
