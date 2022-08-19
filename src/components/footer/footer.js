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
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as styles from './footer.module.scss';
import cncfLogo from '../../images/footer/cncf-white.svg';
import github from '../../images/footer/github-icon.svg';

const Footer = ({ whiteFooter }) => (
  <footer className={`${whiteFooter ? styles.whitefooter : ''} ${styles.footer}`} style={{ position: 'relative' }}>
    <p align='center'>
      We are a
      {' '}
      <a href='https://cncf.io/' target='_blank' rel='noreferrer'>Cloud Native Computing Foundation</a>
      {' '}
      sandbox project.
    </p>
    <img src={cncfLogo} alt='CNCF logo' className={styles.logo} />
    <div className={styles.copyrightBar}>
      <div className={styles.verticalCenter}>
        <Link to='https://www.linuxfoundation.org/terms' target='_blank' rel='noreferrer' className={styles.mutedLink}>Terms of Service</Link>
        <span>
          |
        </span>
        <Link to='https://www.linuxfoundation.org/privacy' target='_blank' rel='noreferrer' className={styles.mutedLink}>Privacy Policy</Link>
      </div>
      <div className={styles.centerContent}>
        Copyright © 2018- The Pixie Authors. All Rights Reserved.
        <br />
        The Linux Foundation has registered trademarks and uses trademarks.
        For a list of trademarks of The Linux Foundation, please see our
        {' '}
        <a href='https://www.linuxfoundation.org/trademark-usage'>Trademark Usage Page</a>
        .
        <br />
        Pixie was originally created and contributed by
        {' '}
        <a href='https://newrelic.com/' target='_blank' rel='noreferrer'>New Relic, Inc.</a>
      </div>
      <div className={`${styles.githubLink} ${styles.verticalCenter}`}>
        <a href='https://github.com/pixie-io/px.dev' target='_blank' rel='noreferrer'>
          <img src={github} alt='github' />
          Edit on GitHub
        </a>
      </div>
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
