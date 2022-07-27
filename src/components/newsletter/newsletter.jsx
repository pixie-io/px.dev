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
import Cookies from 'js-cookie';
import * as styles from './newsletter.module.scss';

const Newsletter = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const portalId = '8260834';
  const formId = '14213b96-fb69-41c8-b28e-6787b29f095a';
  const submitForm = (e) => {
    if (e) e.preventDefault();
    const isBrowser = typeof window !== 'undefined';
    const hutk = isBrowser ? Cookies.get('hubspotutk') : null;
    const pageUri = isBrowser ? window.location.href : null;
    const pageName = isBrowser ? document.title : null;
    const postUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    setLoading(true);

    const body = {
      submittedAt: Date.now(),
      fields: [
        {
          name: 'email',
          value: email,
        },
      ],
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
        setEmail('');
      })
      .catch((err) => {
        setSuccess(false);
        setError(err);
        setLoading(false);
      });
  };

  return (
    <div className={styles.main}>
      <h2>Subscribe to our newsletter</h2>
      <div>
        We’re in beta — enter your email to join our mailing list or email us directly at
        <a href="mailto:community@pixielabs.ai"> community@pixielabs.ai</a>

        <form
          className={styles.form}
          data-form-id={formId}
          data-portal-id={portalId}
          disabled={loading}
          onSubmit={submitForm}
        >
          {success && (
          <div>
            <p>Thank you</p>
          </div>
          )}
          {!success && (
          <>
            <input
              type="text"
              name="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email here"
              required
            />
            {error && (
            <div>
              <p>there was an error</p>
            </div>
            )}
            <button type="submit"> SUBSCRIBE</button>
          </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
