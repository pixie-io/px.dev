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
import { docsRedirect } from '../shared/tracking-utils';
import pixieLogo from '../../images/pixie-oss.svg';

import githubShare from '../../images/footer/github-share-button.svg';

import docs from '../../images/footer/docs-icon.svg';
import github from '../../images/footer/github-icon.svg';
import slack from '../../images/footer/slack-icon.svg';
import youtube from '../../images/footer/youtube-icon.svg';
import twitter from '../../images/footer/twitter-icon.svg';

const Footer = ({ whiteFooter }) => (
  <footer className={`${whiteFooter ? styles.whitefooter : ''} ${styles.footer}`} style={{ position: 'relative' }}>
    <img src={pixieLogo} alt='Pixie logo' className={styles.logo} />
    <div className='container hide-not-desktop'>
      <p align='center'>
        Pixie was originally created and contributed by
        {' '}
        <a href='https://newrelic.com/' target='_blank' rel='noreferrer'>New Relic</a>
      </p>
      <div className={styles.divider} />
      <div className={styles.socialIcons}>
        <a
          href='https://work.withpixie.ai/docs'
          onClick={(e) => docsRedirect(e)}
        >
          <img src={docs} className={styles.socialIcon} alt='pixie docs' />
        </a>
        <a href='https://github.com/pixie-labs/pixie'>
          <img src={github} className={styles.socialIcon} alt='github' />
        </a>
        <a href='https://slackin.withpixie.ai'>
          <img src={slack} className={styles.socialIcon} alt='slack' />
        </a>
        <a href='https://www.youtube.com/channel/UCOMCDRvBVNIS0lCyOmst7eg/featured'>
          <img src={youtube} className={styles.socialIcon} alt='youtube' />
        </a>
        <a href='https://twitter.com/pixie_run'>
          <img src={twitter} className={styles.socialIcon} alt='twitter' />
        </a>
      </div>
      <div className={styles.divider} />
    </div>
    <div className={styles.copyrightBar}>
      <span> Copyright 2021 Pixie Authors. All rights reserved.</span>
      <Link to='/terms'>Terms and Privacy</Link>
    </div>

    <a className={styles.editOnGithub} href='https://github.com/pixie-labs/px.dev' target='_blank' rel='noreferrer'>
      <div>
        <img src={githubShare} alt='github' />
      </div>
      <p>
        Edit on github
      </p>
    </a>
  </footer>
);
Footer.propTypes = {
  whiteFooter: PropTypes.bool,
};
Footer.defaultProps = {
  whiteFooter: false,
};
export default Footer;
