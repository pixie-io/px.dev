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
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import styles from '../scss/pages/enterprise.module.scss';
import CodeRenderer from '../components/codeRenderer.tsx';

import 'react-multi-carousel/lib/styles.css';

const Enterprise = () => {
  return (
    <Layout transparentMenu>
      <SEO
        title='Kubernetes Monitoring, Application Debug Platform | Pixie'
        description='A simple and robust monitoring and live-debug platform
           for distributed environments, designed for developers.'
      />
      <div className={styles.enterprise}>
        <section className={styles.heroSection}>
          <div className='container'>
            <h1>
              Companies offering commercial
              {' '}
              <br />
              support for Pixie
            </h1>
            <p className={styles.subtitle}>
              Auto-instrumented. Scriptable. Kubernetes native.
            </p>

          </div>
        </section>
      </div>
    </Layout>
  );
};
Enterprise.propTypes = {};
export default Enterprise;
