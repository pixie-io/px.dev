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
import { docsRedirect, loginRedirect } from '../shared/tracking-utils';
import pixieLogo from '../../images/pixie-new-logo.svg';

import docs from '../../images/footer/docs-icon.svg';
import github from '../../images/footer/github-icon.svg';
import slack from '../../images/footer/slack-icon.svg';
import youtube from '../../images/footer/youtube-icon.svg';
import twitter from '../../images/footer/twitter-icon.svg';

const Footer = ({ whiteFooter }) => (
  <footer className={`${whiteFooter ? styles.whitefooter : ''} ${styles.footer}`} style={{ position: 'relative' }}>
    <Link to='/'><img src={pixieLogo} alt='Pixie logo' className={styles.logo} /></Link>
    <div className='container hide-not-desktop'>
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
      <ul className={styles.linksRow}>

        <li>
          <Link to='/beta'>WHAT&apos;S IN BETA?</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li>
          <a
            href='https://work.withpixie.ai/login'
            onClick={(e) => loginRedirect(e)}
          >
            SIGN IN
          </a>
        </li>
        <li>
          <Link to='/terms'>TERMS & PRIVACY</Link>
        </li>
        <li>
          <Link to='/community'>COMMUNITY</Link>
        </li>
        <li>
          <Link to='/careers'>CAREERS</Link>
        </li>
        <li>
          <a href='https://blog.pixielabs.ai/' target='_blank' rel='noreferrer'>
            BLOG
          </a>
        </li>
        <li>
          <Link to='/contact'>CONTACT</Link>
        </li>
      </ul>
    </div>
    <div className={styles.copyrightLink}>© 2020, Pixie Labs</div>
  </footer>
);
Footer.propTypes = {
  whiteFooter: PropTypes.bool,
};
Footer.defaultProps = {
  whiteFooter: false,
};
export default Footer;
