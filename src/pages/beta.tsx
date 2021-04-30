/*
 * Copyright 2018- The Pixie Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Modal } from '@material-ui/core';
import Cookies from 'js-cookie';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../scss/pages/beta.module.scss';
import betaPreview from '../images/beta/beta-preview.png';
import videoCli from '../videos/pixie-cli.webm';
import videoCli4 from '../videos/pixie-cli.mp4';
import { isInViewport } from '../components/utils';
import Button from '../components/shared/button';
import serviceHealth from '../images/homepage/side-icons/service-health.svg';
import dl from '../images/homepage/side-icons/dynamic-logging.svg';
import requestTracing from '../images/homepage/side-icons/request-tracing.svg';
import db from '../images/homepage/side-icons/db-profiling.svg';
import k8 from '../images/homepage/side-icons/k8s-health.svg';
import canary from '../images/homepage/side-icons/canary-analysis.svg';
import check from '../images/beta/check.svg';
import helmet from '../images/beta/helmet.svg';
import helmets from '../images/beta/helmets.svg';
import rocket from '../images/beta/rocket.svg';
import announcement from '../images/beta/announcement-icon.svg';

export enum FeaturesCategories {
  Usage = 'Usage',
  Features = 'Features',
  Security = 'Security',
  Support = 'Support',
}

const FeatureButtons = () => (
  <ul className={styles.featureButtons}>
    <li>
      <a
        href='https://docs.pixielabs.ai/using-pixie/service-health'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={serviceHealth} alt='Service Health' />
        Service Health
      </a>
    </li>
    <li>
      <a href='https://docs.pixielabs.ai/using-pixie/code-tracing/' target='_blank' rel='noopener noreferrer'>
        <img src={dl} alt='Dynamic Logging' />
        Golang Logging
      </a>
    </li>
    <li>
      <a
        href='https://docs.pixielabs.ai/using-pixie/request-tracing'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={requestTracing} alt='Request Tracing' />
        Request Tracing
      </a>
    </li>

    <li>
      <a
        href='https://docs.pixielabs.ai/using-pixie/db-health'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={db} alt='DB Query Profiling' />
        DB Query Profiling
      </a>
    </li>
    <li>
      <a
        href='https://docs.pixielabs.ai/using-pixie/infra-health'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={k8} alt='K8s Infra Health' />
        K8s Infra Health
      </a>
    </li>
    <li>
      <a
        href='https://docs.pixielabs.ai/using-pixie/canary-analysis'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={canary} alt='Canary Analysis' />
        Canary Analysis
      </a>
    </li>
  </ul>
);
const HeaderPixieCommunity = () => (
  <div className={styles.columnHeader}>
    <img src={helmet} alt='' />
    <div className={styles.columnHeaderTitle}>PIXIE COMMUNITY</div>
    <div className={styles.columnHeaderPrice}>
      <span>$</span>
      0
    </div>
    <div className={styles.columnHeaderSubTitle}>
      Free Forever
    </div>

  </div>
);
const HeaderPixieTeam = () => (
  <div className={styles.columnHeader}>
    <img src={helmets} alt='' />
    <div className={styles.columnHeaderTitle}>PIXIE TEAM</div>
    <div className={styles.columnHeaderPrice}>
      <em>
        🚧
      </em>
    </div>
    <div className={styles.columnHeaderSubTitle}>
      Coming soon
    </div>
  </div>
);
const HeaderEnterprise = () => (
  <div className={styles.columnHeader}>
    <img src={rocket} alt='' />
    <div className={styles.columnHeaderTitle}>ENTERPRISE</div>
    <div className={styles.columnHeaderContactSales}>
      Custom
    </div>
    <div className={styles.columnHeaderSubTitle}>
      In Beta
    </div>
  </div>
);
const PriceCard = ({ priceCard }) => {
  const priceRow = (row, columns = [0, 1, 2]) => (
    <div className={styles.priceRow} key={row.title}>
      <div className={styles.priceRowHeader}>
        {row.title}
      </div>
      {columns.map((c) => (
        <div key={c} className={styles.priceCell}>
          {row.prices[c] === true ? <img src={check} /> : row.prices[c]}
        </div>
      ))}
    </div>
  );
  return (
    <div className={styles.priceCardContainer}>
      <div className={styles.priceCard}>
        <div className={styles.columnHeaders}>
          <div />
          <HeaderPixieCommunity />
          <HeaderPixieTeam />
          <HeaderEnterprise />
        </div>
        {Object.values(FeaturesCategories).map((category) => (
          <div key={category}>
            <div className={styles.priceCategory}>{category}</div>
            {priceCard.filter((c) => c.category === category).map((row) => priceRow(row))}
          </div>
        ))}
      </div>
      {[<HeaderPixieCommunity />, <HeaderPixieTeam />, <HeaderEnterprise />].map((h, i) => (
        <div className={styles.priceMobileColumn}>
          <div className={styles.columnHeaders}>
            {h}
          </div>
          {Object.values(FeaturesCategories).map((category) => (
            <div key={category}>
              <div className={styles.priceCategory}>
                {category}
              </div>
              {priceCard.filter((c) => c.category === category).map((row) => priceRow(row, [i]))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const BetaPage = () => {
  const video1 = useRef(null);

  const processVideosVisibility = () => {
    if (isInViewport(video1.current)) {
      video1.current.play();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', processVideosVisibility, false);
    return () => {
      window.removeEventListener('scroll', processVideosVisibility, false);
    };
  }, []);

  const [openModal, setOpenModal] = React.useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const [message, setMessage] = useState(false);
  const [formId, setFormId] = useState(null);

  const joinWaitlist = (open) => {
    setFormId('9ca75df1-3876-4d70-bf7d-c4846434c546');
    setModalTitle('Join or waitlist');
    setMessage(false);
    setOpenModal(open);
  };
  const contactSales = (open) => {
    setFormId('23a87bad-8106-46a3-8e70-137d6dfc1c70');
    setModalTitle('Contact Sales');
    setMessage(true);
    setOpenModal(open);
  };
  const priceCard = [{
    category: FeaturesCategories.Usage,
    title: 'Script Creators',
    prices: ['Just You', 'Your Team', 'Unlimited'],
  }, {
    category: FeaturesCategories.Usage,
    title: 'Script Users & Viewers',
    prices: ['Unlimited', 'Unlimited', 'Unlimited'],
  }, {
    category: FeaturesCategories.Usage,
    title: 'Script Repository',
    prices: ['Community Git repo', 'Hosted Team Git repo', 'Corporate Git Integration'],
  }, {
    category: FeaturesCategories.Features,
    title: 'Community Scripts',
    prices: [true, true, true],
  }, {
    category: FeaturesCategories.Features,
    title: 'Team Specific Scripts',
    prices: [null, true, true],
  }, {
    category: FeaturesCategories.Features,
    title: 'Multi-Cloud',
    prices: [null, null, true],
  }, {
    category: FeaturesCategories.Features,
    title: 'PII Scrubbing',
    prices: [null, null, true],
  }, {
    category: FeaturesCategories.Security,
    title: 'K8S Native RBAC',
    prices: [true, true, true],
  }, {
    category: FeaturesCategories.Security,
    title: 'Enterprise RBAC',
    prices: [null, null, true],
  }, {
    category: FeaturesCategories.Security,
    title: 'Enterprise SSO',
    prices: [null, null, true],
  }, {
    category: FeaturesCategories.Security,
    title: 'On Prem Data Isolation',
    prices: [null, null, true],
  }, {
    category: FeaturesCategories.Support,
    title: 'Support',
    prices: ['Community', 'Email', 'Dedicated Contact'],
  }, {
    category: FeaturesCategories.Support,
    title: 'Enterprise SLA & Infosec',
    prices: [null, null, true],
  }, {
    category: FeaturesCategories.Support,
    title: '',
    prices: [<Button link='https://work.withpixie.ai/auth/signup' outline>TRY NOW</Button>,
      <Button onClick={() => joinWaitlist(true)}>JOIN WAITLIST</Button>,
      <Button onClick={() => contactSales(true)} outline>CONTACT SALES</Button>],
  },
  ];

  const initialFormState = {
    firstname: '',
    lastname: '',
    company: '',
    email: '',
    tell_us_more: '',
  };
  const [contactForm, setContactForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const portalId = '8260834';
  const submitForm = (e) => {
    if (e) e.preventDefault();

    const isBrowser = typeof window !== 'undefined';
    const hutk = isBrowser ? Cookies.get('hubspotutk') : null;
    const pageUri = isBrowser ? window.location.href : null;
    const pageName = isBrowser ? document.title : null;
    const postUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    setLoading(true);
    setSuccess(false);
    const body = {
      submittedAt: Date.now(),
      fields: Object.keys(contactForm).filter((f) => (message ? true : f !== 'tell_us_more')).map((k) => ({
        name: k,
        value: contactForm[k],
      })),
      context: {
        hutk,
        pageUri,
        pageName,
      },
    };

    // These specific headers are required for whatever reason,
    // so don't forget to include them.

    fetch(postUrl, {
      method: 'post',
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setSuccess(true);
        setError(false);
        setLoading(false);
        setContactForm(initialFormState);
        setOpenModal(false);
      })
      .catch((err) => {
        setSuccess(false);
        setError(err);
        setLoading(false);
      });
  };
  return (
    <Layout transparentMenu>
      <SEO
        title='Pixie Beta | What’s Live and In the works'
        description='Pixie Community Beta is now open to all developers. We’re constantly shipping exciting new features and here’s a look at all the fun new stuff you can do with Pixie.'
      />
      <section className={styles.hero}>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <span>WHAT&apos;S IN BETA?</span>
              <h1>Pixie Beta: What’s Live and In the works</h1>
              <p>
                Pixie Community Beta is now open to all developers. We’re constantly
                shipping exciting new features and here’s a look at all the fun new
                stuff you can do with Pixie.
              </p>
            </div>
            <div className='col-6'>
              <img src={betaPreview} alt='' className={styles.betaPreview} />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.middleOrnament}>
        <section className={styles.live}>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <img src={announcement} alt='' className={styles.announcement} />
                <h2 className={styles.title}>What&apos;s live right now</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-5 pb-40'>

                <h2>One command Install</h2>
                <p>
                  Pixie installs in any Kuberentes environment with a single
                  CLI command. It automatically collects baseline data
                  and visualizes them in pre-configured live views.
                </p>
                <Button outline link='https://docs.pixielabs.ai/installing-pixie/quick-start/'>LEARN MORE</Button>
              </div>
              <div className='col-7'>
                <video controls={false} muted width='100%' ref={video1} playsInline>
                  <source
                    src={videoCli}
                    type='video/webm'
                  />
                  <source
                    src={videoCli4}
                    type='video/mp4'
                  />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features}>

          <div className='container'>
            <div className='row'>
              <div className='col-6 hide-not-desktop'>
                <FeatureButtons />
              </div>
              <div className='col-6'>
                <h2>
                  Automatic Live Views
                </h2>
                <p className='pb-40'>
                  Pixie Community comes with a ton of community contributed
                  live views which allow you to start debugging and analyzing
                  instantly. These Live Views are backed by community Pixie
                  scripts which is an ever expanding catalogue of codified
                  workflows maintained by the community.
                </p>
                <Button link='https://github.com/pixie-labs/pixie' outline className='hide-not-desktop'>CHECKOUT OUR REPO</Button>
              </div>
              <div className='col-6 hide-desktop'>
                <FeatureButtons />
                <Button link='https://github.com/pixie-labs/pixie' outline className={styles.repoButton}>CHECKOUT OUR REPO</Button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.videos}>
          <div className='container'>
            <div className='row horizontal-center-desktop'>
              <div className='col-6 pb-40'>
                <h2>Collect Go logs on the fly</h2>
                <p className='pb-40'>
                  Pixie allows you to add dynamic structured logs into Go
                  binaries deployed in production environments
                  without the need to instrument the source code with
                  additional log statements, recompile, and redeploy.
                </p>
                <Button outline link='https://docs.pixielabs.ai/tutorials/simple-go-tracing/'>LEARN MORE</Button>

              </div>
              <div className='col-6'>
                <iframe
                  src='https://www.youtube.com/embed/aH7PHSsiIPM'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                />
              </div>
            </div>
            <div className='row horizontal-center-desktop'>
              <div className='col-6 hide-mobile hide-tablet '>
                <iframe
                  src='https://www.youtube.com/embed/xT7OYAgIV28'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                />
              </div>
              <div className='col-6 pb-40'>
                <h2>Deploy custom eBPF probes</h2>
                <p className='pb-40'>
                  You can leverage Pixie to write cusotmer eBPF probes
                  or deploy open-source tools such as
                  {' '}
                  <a href='https://github.com/iovisor/bpftrace'>bpftrace </a>
                  programs to your cluster, collect the resulting data, and visualize it.
                </p>
                <Button outline link='https://docs.pixielabs.ai/tutorials/distributed-bpftrace-deployment/'>LEARN MORE</Button>
              </div>
              <div className='col-6 hide-desktop'>
                <iframe
                  src='https://www.youtube.com/embed/xT7OYAgIV28'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                />
              </div>
            </div>
            <div className='row horizontal-center-desktop'>
              <div className='col-6 pb-40'>
                <h2>Contribute open source scripts</h2>
                <p className='pb-40'>
                  Pxl Community Scripts are open-source scripts.
                  These community scripts enable the developer community
                  with a broad repository of use-case specific scripts
                  out of the box. Over time, we hope this grows into a
                  community driven knowledge base of data-driven workflows.
                </p>
                <Button outline link='https://docs.pixielabs.ai/tutorials/contributing-pxl-scripts/'>LEARN MORE</Button>

              </div>
              <div className='col-6'>
                <iframe
                  src='https://www.youtube.com/embed/So4ep2mMcSI'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                />
              </div>
            </div>
          </div>

        </section>

        <section className={styles.roadmap}>
          <div className='container'>
            <h2>What&apos;s coming next?</h2>
            <p>
              Checkout our public roadmap to see Pixie’s upcoming
              features and capabilities
            </p>
            <Button link='https://docs.pixielabs.ai/about-pixie/roadmap/'>PRODUCT ROADMAP</Button>
          </div>

        </section>

      </div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby='Contact'
        aria-describedby=''
        className={styles.modalForm}
      >
        <div>
          <h2>{modalTitle}</h2>
          <span
            className={styles.modalFormClose}
            onClick={() => setOpenModal(false)}
          >
            &#10005;
          </span>
          <form
            data-form-id={formId}
            data-portal-id={portalId}
            disabled={loading}
            onSubmit={submitForm}
          >
            <label>
              <input
                type='text'
                name='firstname'
                placeholder='First Name'
                value={contactForm.firstname}
                onChange={(event) => setContactForm({ ...contactForm, firstname: event.target.value })}
              />
            </label>
            <label>
              <input
                type='text'
                name='lastname'
                placeholder='Last Name'
                value={contactForm.lastname}
                onChange={(event) => setContactForm({ ...contactForm, lastname: event.target.value })}
              />
            </label>
            <label>
              <input
                type='text'
                name='company'
                placeholder='Company'
                value={contactForm.company}
                onChange={(event) => setContactForm({ ...contactForm, company: event.target.value })}
              />
            </label>
            <label>
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={contactForm.email}
                onChange={(event) => setContactForm({ ...contactForm, email: event.target.value })}
              />
            </label>
            {message && (
              <label>
                <textarea
                  name='tell_us_more'
                  value={contactForm.tell_us_more}
                  placeholder='How can we help you?'
                  rows={4}
                  onChange={(event) => setContactForm({ ...contactForm, tell_us_more: event.target.value })}
                />
              </label>
            )}
            {error && (
              <div>
                <p>there was an error</p>
              </div>
            )}
            <div className={styles.modalFormFooter}>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </Modal>

    </Layout>
  );
};

export default BetaPage;
