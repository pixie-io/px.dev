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
import PropTypes from 'prop-types';
import styles from './footer.module.scss';
import pixieLogo from '../../images/pixie-oss.svg';
import github from '../../images/footer/github-icon.svg';

const Footer = ({ whiteFooter }) => (
  <footer className={`${whiteFooter ? styles.whitefooter : ''} ${styles.footer}`} style={{ position: 'relative' }}>
    <img src={pixieLogo} alt='Pixie logo' className={styles.logo} />
    <div className='container hide-not-desktop'>
      <p align='center'>
        Pixie was originally created and contributed by
        {' '}
        <a href='https://newrelic.com/' target='_blank' rel='noreferrer'>New Relic, Inc.</a>
      </p>
    </div>
    <div className={styles.copyrightBar}>
      <Link to='/terms' className={styles.mutedLink}>Terms and Privacy</Link>
      <span> Copyright 2021 Pixie Authors. All rights reserved.</span>
      <a href='https://github.com/pixie-labs/px.dev' target='_blank' rel='noreferrer'>
        <img src={github} alt='github' />
        Edit on GitHub
      </a>
    </div>
  </footer>
);
Footer.propTypes = {
  whiteFooter: PropTypes.bool,
};
Footer.defaultProps = {
  whiteFooter: false,
};
export default Footer;
