import useBrokenLinks from "@docusaurus/useBrokenLinks";
import {useLocation} from "@docusaurus/router";


export function Anchor({
  id, className=``, do_highlight=true, children=``, ...other_props
}) {
  /** Make sure Docusaurus sees this element as a valid element to link to,
   *    avoiding warnings about broken links.
   * 
   * It can also highlight text that is in this element when users navigate
   *    to this element.
   * 
   * @params {object} obj - Named arguments.
   * @params {string} obj.id - Required. Element id.
   * @params {string} [obj.className] - 0 or more additional class names.
   * @params {bool} [obj.do_highlight] - Default is `true`. Whether to give this
   *     element's children a CSS class.
   * @params {React | [React]} [obj.children] - 0 to any number of components.
   * @params {object} [obj.other_props] - All other component properties
   * 
   * @returns {React} - React component
   * */
  useBrokenLinks().collectAnchor(id);

  const { hash } = useLocation();

  // Note: Attempts to highlight the Anchor text with CSS :target failed. A
  // long-standing behavior with React/the browser:
  // https://github.com/vercel/next.js/issues/51346. The workarounds there are
  // for next.js, not plain React. It may have something to do with `pushState`
  let highlight_class = "";
  if ( do_highlight && hash === `#` + id ) {
    highlight_class = ` highlight`;
  }

  return (
    <span
      id={ id }
      style={{ scrollMarginTop: `calc(var(--ifm-navbar-height) + 0.7em)` }}
      className={ className + ` target` + highlight_class }
      { ...other_props }>{ children }</span>
  )
}
