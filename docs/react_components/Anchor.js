import useBrokenLinks from '@docusaurus/useBrokenLinks';

export function Anchor(props) {
  useBrokenLinks().collectAnchor(props.id);
  return <span style={{scrollMarginTop: "var(--ifm-navbar-height)"}} {...props}/>;
}
