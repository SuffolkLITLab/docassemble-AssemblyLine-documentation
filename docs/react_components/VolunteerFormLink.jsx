import { useLocation } from '@docusaurus/router';


export function VolunteerFormLink( props ) {
  /**
   * Send the current url args when the user presses the link to the volunteer
   * form to help us track how people found the program.
   * */

  const { search } = useLocation();
  const urlParams = new URLSearchParams( search );
  const source = urlParams.get(`source`);

  let sign_up_text = `Sign up to express your interest`
  if ( source ) {
    sign_up_text = `Sign up to volunteer`
  }

  return (<a
    className={`button button--primary ${ props.className }`}
    target="_blank"
    disabled={ source == null }
    style={{
      "--ifm-button-size-multiplier": "1.25",
      fontWeight: "normal",
      textDecoration: "none"
    }}
    href={
      `https://apps.suffolklitlab.org/interview?i=docassemble.DALVolunteerSignup:main.yml&source=${ source || 'docs' }`
    }>
      { sign_up_text }
    <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
    </a>)

};
