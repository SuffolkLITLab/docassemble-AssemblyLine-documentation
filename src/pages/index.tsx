/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
 
function Home() {
  const {
    siteConfig: {
      customFields: {description},
      tagline,
    },
  } = useDocusaurusContext();

  return (
    <Layout title={tagline} description={description as string}>
      <main className={styles.indexMain}>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <h1 dangerouslySetInnerHTML={{
                __html: translate({
                  id: 'homepage.hero.title',
                  description:
                    'Open-source tools for court forms, guided interviews, and e-filing',
                  message:
                    'Open-source tools for <strong>court forms</strong>, <strong>guided interviews</strong>, and <strong>e-filing</strong>',
                }),
              }}></h1>
              <div className={styles.heroCTAButtons}>
                <Link className="button button--primary" to="/docs/get_started">
                  <Translate>Get started</Translate>
                </Link>
              </div>
            </div>
            <img
              alt={translate({message: 'The Document Assembly Line'})}
              className={styles.heroImage}
              src={useBaseUrl('/img/undraw_sync-files_64mj.svg')}
              width="100%"
            />
          </div>
          <div className={styles.heroFooter}>
            <div className={clsx([
              'container',
              'row',
              'row--no-gutters',
              styles.heroFooter__Inner
            ])}>
              <div className={clsx([
                'col',
                styles.heroFooterIconCol
              ])}>
                <i className={clsx(['col', styles.icon, styles.iconUpArrow])}></i>
                <Translate>Increase access to justice</Translate>
              </div>
              <div className={clsx([
                'col',
                styles.heroFooterIconCol
              ])}>
                <i className={clsx(['col', styles.icon, styles.iconDownArrow])}></i>
                <Translate>Reduce errors in court forms</Translate>
              </div>
              <div className={clsx([
                'col',
                styles.heroFooterIconCol
              ])}>
                <i className={clsx(['col', styles.icon, styles.iconHourglass])}></i>
                <Translate>Save staff time</Translate>
              </div>
            </div>
          </div>
        </header>
        <section className={styles.indexSection}>
          <div className={clsx([
            'container',
            'row',
            'margin-bottom--xl',
            styles.dalBenefitsContainerRow
          ])}>
            <div className="col">
              <div className="row row--align-center flex-wrap--nowrap margin-bottom--md">
                <div className={clsx([
                  'col', 
                  'col--4',
                  'padding-horiz--sm',
                  styles.dalBenefitsImageCol
                ])}>
                  <img src={useBaseUrl('/img/undraw_portfolio-update_6bro.svg')}/>
                </div>
                <div className={clsx([
                  'col',
                  'padding-horiz--sm',
                  styles.dalBenefitsHeaderCol
                ])}>
                  <h2 className="margin-bottom--md">
                    <Translate>Guided interviews for court forms</Translate>
                  </h2>
                </div>
              </div>
              <div className={styles.dalBenefitsText}>  
                <p><Translate>
                  Build beautiful, responsive, accessible online guided interviews for court forms and other documents with Docassemble and the Assembly Line tools.
                </Translate></p>
                <ul>
                  <li><Translate>Code handles complex court forms better than drag-and-drop tools</Translate></li>
                  <li dangerouslySetInnerHTML={{
                    __html: translate({
                      id: 'homepage.benefits.visitCourtFormsOnline',
                      description:
                        'To see examples, visit Court Forms Online',
                      message:
                        'To see examples, visit <a href="https://courtformsonline.org" target="_blank">Court Forms Online</a>',
                    }),
                  }}></li>
                  <li dangerouslySetInnerHTML={{
                    __html: translate({
                      id: 'homepage.benefits.builtWithDocassemble',
                      description:
                        'Assembly Line tools are powered by Docassemble',
                      message:
                        'Assembly Line tools are powered by <a href="https://docassemble.org" target="_blank">Docassemble</a>',
                    }),
                  }}></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="row row--align-center flex-wrap--nowrap margin-bottom--md">
                <div className={clsx([
                  'col', 
                  'col--4',
                  'padding-horiz--sm',
                  styles.dalBenefitsImageCol
                ])}>
                  <img src={useBaseUrl('/img/undraw_judge_hyqv.svg')} />
                </div>
                <div className={clsx([
                  'col',
                  'padding-horiz--sm',
                  styles.dalBenefitsHeaderCol
                ])}>
                  <h2 className="margin-bottom--md">
                    <Translate>E-filing for guided interviews</Translate>
                  </h2>
                </div>
              </div>
              <div className={styles.dalBenefitsText}>  
                <p><Translate>
                  Suffolk's open-source e-filing service provider (EFSP) makes it easier for people to file documents directly from online guided interviews.
                </Translate></p>
                <ul>
                  <li><Translate>More user-friendly than </Translate></li>
                  <li><Translate>Lighten the burden on court clerks, self-help staff, and legal aid advocates</Translate></li>
                  <li><Translate>Certified with Tyler eFile & Serve</Translate></li>
                  <li><Translate>Customizable for other e-filing systems</Translate></li>
                  <li><strong>
                    <Translate>Coming soon: simplified e-filing for self-represented litigants (SRLs)</Translate>
                  </strong></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={clsx([
            'container',
            'row',
            styles.dalBenefitsContainerRow
          ])}>
            <div className="col">
              <div className="row row--align-center flex-wrap--nowrap margin-bottom--md">
                <div className={clsx([
                  'col', 
                  'col--4',
                  'padding-horiz--sm',
                  styles.dalBenefitsImageCol
                ])}>
                  <img src={useBaseUrl('/img/undraw_group-hangout_o22u.svg')}/>
                </div>
                <div className={clsx([
                  'col',
                  'padding-horiz--sm',
                  styles.dalBenefitsHeaderCol
                ])}>
                  <h2 className="margin-bottom--md">
                    <Translate>Community built and supported</Translate>
                  </h2>
                </div>
              </div>
              <div className={styles.dalBenefitsText}>  
                <p><Translate>
                  Get training and support from the Suffolk LIT Lab and an active community of courts, legal aid organizations, and volunteers.
                </Translate></p>
                <ul>
                  <li><Translate>Weekly meetings</Translate></li>
                  <li><a href="https://suffolklitlab.org/tag/first-wednesday-workshops/" target="_blank">
                    <Translate>Monthly workshops</Translate>
                  </a></li>
                  <li><Translate>Quarterly trainings for new interview builders</Translate></li>
                  <li><Translate>Online forum for coding help</Translate></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="row row--align-center flex-wrap--nowrap margin-bottom--md">
                <div className={clsx([
                  'col', 
                  'col--4',
                  'padding-horiz--sm',
                  styles.dalBenefitsImageCol
                ])}>
                  <img src={useBaseUrl('/img/undraw_code-review_ept3.svg')} />
                </div>
                <div className={clsx([
                  'col',
                  'padding-horiz--sm',
                  styles.dalBenefitsHeaderCol
                ])}>
                  <h2 className="margin-bottom--md">
                    <Translate>Free and open source software</Translate>
                  </h2>
                </div>
              </div>
              <div className={styles.dalBenefitsText}>  
                <p><Translate>
                  All Document Assembly Line code is free and open source, forever.
                </Translate></p>
                <ul>
                  <li><Translate>Reuse code written by other courts and orgs</Translate></li>
                  <li><Translate>No vendor lock-in</Translate></li>
                  <li><Translate>Customizable code</Translate></li>
                  <li><Translate>Benefit</Translate></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.indexSection}>
          <div className="container text--center margin-bottom--xl">
            <div className="row">
              <div className="col">
                <img
                  alt="Pre-built questions and components"
                  className={styles.featureImage}
                  // src={require('./assets/undraw_building_blocks_n0nc.png').default}
                  src={useBaseUrl('/img/undraw_building_blocks_n0nc.png')}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Pre-built questions and components</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Get started quickly by using expert-vetted, plain language
                    questions covering all of the basics needed for court and 
                    government forms.
                  </Translate>
                </p>
              </div>               
              <div className="col">                 
                <img
                  className={styles.featureImage}
                  alt="Docassemble"
                  src={useBaseUrl('/img/docassemble-white.png')}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Powered by Docassemble</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    The Document Assembly Line uses the free and open
                    source Docassemble as its engine. Build with confidence
                    knowing it will be free to use, forever.
                  </Translate>
                </p>
              </div>
              <div className="col">
                <img
                  alt="No spaghetti code here"
                  className={styles.featureImage}
                  src={useBaseUrl('/img/undraw_Code_review_re_woeb.png')}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>No spaghetti code here</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Our process quickly builds readable, maintainable
                    code that follows best practices. We focus on getting
                    a prototype up and running fast, without the mess of
                    standard no-code tools.
                  </Translate>
                </p>
              </div>
            </div>
          </div>
          <div className="container text--center">
            <div className="row">
            <div className="col">
                <img
                  alt="Ready for Translation"
                  className={styles.featureImage}
                  src={useBaseUrl('/img/undraw_Around_the_world_re_n353.png')}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Ready for Translation</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Ready to translate and localize all over the world.
                    Our library of vetted questions are already translated into 5
                    languages, including Spanish.
                  </Translate>
                </p>
              </div>
              <div className="col">
                <img
                  alt="Assembly-line process"
                  className={styles.featureImage}
                  src={useBaseUrl('/img/undraw_Collaborators_re_hont.png')}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Assembly-line process</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    We made automating a legacy court form easy
                    and step-by-step. Spread out the work
                    load and leverage volunteers to help
                    close the access to justice gap.
                  </Translate>
                </p>
              </div>
              <div className="col">
                <img
                  alt="Deliver straight to a court"
                  className={styles.featureImage}
                  src={useBaseUrl('/img/undraw_Message_sent_re_q2kl.png')}
                />
                <h2 className={clsx(styles.featureHeading)}>
                  <Translate>Deliver straight to a court</Translate>
                </h2>
                <p className="padding-horiz--md">
                  <Translate>
                    Integrate forms directly with Tyler Technologies EFMs
                    and courts in Louisiana, without paying an EFSP middleman.
                  </Translate>
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
 
export default Home;
 