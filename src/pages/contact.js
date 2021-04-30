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

import React, { useState } from 'react';
import BodyClassName from 'react-body-classname';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../scss/pages/contact.module.scss';
import contactImage from '../images/Contact-page-pixie-logo-gif.gif';
import pixieLogo from '../images/contact-p.png';
import envelope from '../images/envelope.svg';
import SupportForm from '../components/contact/support-form';
import SalesForm from '../components/contact/sales-form';
import PixienautForm from '../components/contact/pixienaut-form';
import { signupRedirect } from '../components/shared/tracking-utils';
import contactFormRecipients from '../components/shared/contact-form-recipients';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const ContactPage = () => {
  const initialFormState = {
    fullName: '',
    email: '',
    companyName: '',
    gitHubURL: '',
    jobTitle: '',
    message: '',
  };
  const [contactForm, setContactForm] = useState(initialFormState);
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [contactForms, setContactForms] = useState(
    // eslint-disable-next-line no-restricted-globals
    (typeof window !== 'undefined'
      // eslint-disable-next-line no-restricted-globals
      && location.hash
      // eslint-disable-next-line no-restricted-globals
      && contactFormRecipients[location.hash.substr(1).toUpperCase()])
      || contactFormRecipients.SALES,
  );
  const [errorResponse, setErrorResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...contactForm,
      }),
    })
      .then(() => {
        setErrorResponse(null);
        setContactFormSubmitted(true);
      })
      .catch(() => {
        setErrorResponse('There was an error');
      });
  };
  return (
    <Layout>
      <SEO
        title='Contact Pixie | Send us a Message'
        description='Hi there! Send the Pixie team a message with any questions or requests you have and we’ll get right back to you.'
      />
      <BodyClassName className='black' />

      <section className={styles.contactHero}>
        <div className={styles.ornamentMiddleLeft} />
        <div className='container'>
          <div className='row'>
            <div className={`col-12 ${styles.pageTitle}`}>
              <img className='hide-mobile hide-tablet' src={pixieLogo} alt='' />
              <h1>Hi, This is Pixie</h1>
              <h2>Get to know us more!</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-1' />
            <div className={`col-5 ${styles.interested}`}>
              <i className='icon-check' />
              <h4 className={styles.formTitle}>
                How can we help?
              </h4>
              <p>
                Send us a message with any questions or requests you have and
                we’ll get right back to you.
              </p>
            </div>
            <div className='col-1' />
            {contactFormSubmitted && (
              <div className='col-5'>
                <div className={styles.contactFormSubmitted}>
                  <img src={envelope} alt='' />
                  <h3>Thank you. We will be in touch soon</h3>
                  <p>
                    Our team has received your message and will reply as soon as
                    we have a chance to review.
                  </p>
                </div>
              </div>
            )}
            {!contactFormSubmitted && (
              <div>
                <div className={`col-5 ${styles.contactForm}`}>
                  <SalesForm
                    handleSubmit={handleSubmit}
                    setContactForm={setContactForm}
                    contactForm={contactForm}
                    hidden={contactForms !== contactFormRecipients.SALES}
                    contactForms={contactForms}
                    setContactForms={setContactForms}
                  />
                  <SupportForm
                    handleSubmit={handleSubmit}
                    setContactForm={setContactForm}
                    contactForm={contactForm}
                    hidden={contactForms !== contactFormRecipients.SUPPORT}
                    contactForms={contactForms}
                    setContactForms={setContactForms}
                  />
                  <PixienautForm
                    handleSubmit={handleSubmit}
                    setContactForm={setContactForm}
                    contactForm={contactForm}
                    hidden={contactForms !== contactFormRecipients.PIXIENAUT}
                    contactForms={contactForms}
                    setContactForms={setContactForms}
                  />
                  {errorResponse && (
                    <span className={styles.error}>{errorResponse}</span>
                  )}
                </div>
                <div className='col-1' />
              </div>
            )}
          </div>
        </div>
      </section>
      <section className={styles.contactMessage}>
        <div className={styles.ornamentBottomRight} />
        <div className='container'>
          <div className='row'>
            <div className='col-5'>
              <img data-sal='fade' src={contactImage} />
            </div>
            <div className='col-2' />
            <div className='col-5'>
              <h3>we are in beta</h3>
              <h4>
                Are you an&nbsp;
                <br className='hide-desktop hide-tablet' />
                early adopter?
              </h4>
              <a
                href='https://work.withpixie.ai/signup'
                className={`button ${styles.button}`}
                onClick={(e) => signupRedirect(e)}
              >
                Join Beta
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
