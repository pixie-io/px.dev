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
import { Link } from 'gatsby';

import BodyClassName from 'react-body-classname';
import Layout from '../components/layout';
import SEO from '../components/seo';
import * as styles from '../scss/pages/not-found.module.scss';
import img404 from '../images/404.svg';

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <BodyClassName className='black' />
    <section className={styles.notFound}>
      <img src={img404} alt='' />
      <p>
        Oops! Looks like you are lost in space.
        <br />
        Let&apos;s head back&nbsp;
        <Link to='/'>home.</Link>
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;
