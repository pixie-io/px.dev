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

import React from 'react';
import 'react-multi-carousel/lib/styles.css';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Button from '../components/shared/button';
import pixieLabsLogo from '../images/enterprise/pixie-labs-logo.svg';
import moon from '../images/enterprise/moon.svg';
import support from '../images/enterprise/support.svg';
import * as styles from '../scss/pages/enterprise.module.scss';

const Enterprise = () => (
  <Layout transparentMenu>
    <SEO
      title='Kubernetes Monitoring, Application Debug Platform | Pixie'
      description='A simple and robust monitoring and live-debug platform
           for distributed environments, designed for developers.'
    />
    <div className={styles.enterprise}>
      <section className={styles.heroSection}>
        <img src={moon} alt='planet' className={styles.planet} />
        <div className='container'>
          <div className={styles.title}>
            <h1>
              Hosted Pixie Offerings
            </h1>
            <div className={styles.subtitle}>
              Companies offering commercial support for Pixie.
            </div>
          </div>
          <div className='row flex-row-desktop'>
            <div className='col-1 ' />
            <div className='col-5'>
              <a href='https://pixielabs.ai/' target='_blank' rel='noopener noreferrer'>
                <div className={styles.heroButton}>
                  <img src={pixieLabsLogo} alt='pixie logo' />
                  <div>
                    <h5>Pixie</h5>
                    <p>
                      100% free hosted version of the open source project.
                      A community offering by New Relic.
                      ❤️
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className='col-5'>

              <div className={styles.heroButtonCenter}>
                <img src={support} alt='pixie logo' />
                <div>
                  <h5>Offering Pixie Support?</h5>
                  <p>
                    Add your company
                  </p>
                </div>
              </div>

            </div>
            <div className='col-1 ' />
          </div>
          <div className={styles.callout}>
            <div className='row'>
              <div className='col-12'>
                <p className={styles.subtitle}>
                  Offering Pixie support?
                </p>
                <a
                  href='https://github.com/pixie-io/px.dev/pulls'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button>
                    CREATE PULL REQUEST
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

Enterprise.propTypes = {};
export default Enterprise;
