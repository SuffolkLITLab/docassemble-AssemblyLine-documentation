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
 
 import Image from '@theme/IdealImage';
 import Layout from '@theme/Layout';
 
 import clsx from 'clsx';
 
 import styles from './styles.module.css';

 import myImageUrl from './assets/undraw_around_the_world.svg';
 
 function Home() {
   const {
     siteConfig: {
       customFields: {description},
       tagline,
     },
   } = useDocusaurusContext();
    
   return (
     <Layout title={tagline} description={description as string}>
       <main>
         <div className={styles.hero}>
           <div className={styles.heroInner}>
             <h1 className={styles.heroProjectTagline}>
               <img
                 alt={translate({message: 'The Document Assembly Line'})}
                 className={styles.heroLogo}
                 src={useBaseUrl('/img/undraw_work_together_re_5yhn.svg')}
                 width="50%"
               />
               <span
                 className={styles.heroTitleTextHtml}
                 dangerouslySetInnerHTML={{
                   __html: translate({
                     id: 'homepage.hero.title',
                     message:
                       'Go from <b>paper court form</b> to <b>beautiful web app</b> with ease',
                     description:
                       'Turn PDF and DOCX templates into Docassemble interviews',
                   }),
                 }}
               />
             </h1>
             <div className={styles.indexCtas}>
               <Link className="button button--primary" to="/docs">
                 <Translate>Get Started</Translate>
               </Link>
               <Link className="button button--secondary" to="https://courtformsonline.org">
                 <Translate>View our work</Translate>
               </Link>
               <span className={styles.indexCtasGitHubButtonWrapper}>
                 <iframe
                   className={styles.indexCtasGitHubButton}
                   src="https://ghbtns.com/github-btn.html?user=suffolklitlab&amp;repo=docassemble-AssemblyLine&amp;type=star&amp;count=true&amp;size=large"
                   width={160}
                   height={30}
                   title="GitHub Stars"
                 />
               </span>
             </div>
           </div>
         </div>
         <div className={clsx(styles.announcement, styles.announcementDark)}>
           <div className={styles.announcementInner}>
             <Translate
               values={{
                 styleGuideLink: (
                   <Link to="docs/style_guide/question_overview">
                     <Translate>style guide</Translate>
                   </Link>
                 ),
               }}>
               {`Just want to write better guided interviews? Check out our {styleGuideLink}`}
             </Translate>
             .
           </div>
         </div>
         <div className={styles.section}>
           <div className="container text--center margin-bottom--xl">
             <div className="row">
             <div className="col col--4 col--offset-2">
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
         {/* <div className={clsx(styles.section, styles.sectionAlt)}>
           <div className="container">
             <div className="row">
               {QUOTES.map((quote) => (
                 <div className="col" key={quote.name}>
                   <div className="avatar avatar--vertical margin-bottom--sm">
                     <Image
                       alt={quote.name}
                       className="avatar__photo avatar__photo--xl"
                       img={quote.thumbnail}
                       style={{overflow: 'hidden'}}
                     />
                     <div className="avatar__intro padding-top--sm">
                       <div className="avatar__name">{quote.name}</div>
                       <small className="avatar__subtitle">{quote.title}</small>
                     </div>
                   </div>
                   <p className="text--center text--italic padding-horiz--md">
                     {quote.text}
                   </p>
                 </div>
               ))}
             </div>
           </div>
         </div> */}
       </main>
     </Layout>
   );
 }
 
 export default Home;
 