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

/* eslint-disable react/jsx-indent */
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BodyClassName from 'react-body-classname';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import styles from './header.module.scss';

import docs from '../../images/footer/docs-icon.svg';
import github from '../../images/footer/github-icon.svg';
import slack from '../../images/footer/slack-icon.svg';
import youtube from '../../images/footer/youtube-icon.svg';
import twitter from '../../images/footer/twitter-icon.svg';
import pixieLogo from '../../images/pixie-oss.svg';

const Header = ({ whiteHeader, transparentMenu }) => {
  const [open, setOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [showNewsBar, setShowNewsBar] = useState(true);

  const closeMenu = () => {
    setOpen(false);
  };
  const processShadowVisibility = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 1) {
      setShowShadow(true);
    } else {
      setShowShadow(false);
    }
  };

  const addScrollToRef = () => {
    if (window.location.hash && document.getElementById(window.location.hash.substring(1))) {
      document.getElementById(window.location.hash.substring(1))
        .scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
    }
  };

  useEffect(() => {
    processShadowVisibility();
    addScrollToRef();

    window.addEventListener('scroll', processShadowVisibility, false);
    return () => {
      window.removeEventListener('scroll', processShadowVisibility, false);
    };
  }, []);
  const closeTopBanner = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowNewsBar(false);
  };
  return (
    <>
      {showNewsBar && (

        <div className={styles.newsBar}>

          <span className='hide-not-desktop'>
            Export Pixie data in the OpenTelemetry format.
            {' '}
            <a href='http://blog.px.dev/plugin-system/'>
              Learn more
            </a>
            {' '}
             🚀
          </span>
          <span className='hide-desktop'>
            <a href='http://blog.px.dev/plugin-system/'>Pixie has an OpenTelemetry plugin!</a>
          </span>
          <div
            className={`${styles.newsBarClose} hide-desktop`}
            onClick={(e) => closeTopBanner(e)}
          >
            {' '}
            &#10005;
          </div>
        </div>

      )}
      <header
        className={`
      ${transparentMenu ? styles.transparentMenu : ''}
      ${showNewsBar ? styles.showNewsBar : ''}
      ${whiteHeader ? styles.whiteHeader : ''}
      ${showShadow ? styles.showShadow : ''}
      `}
      >
        <BodyClassName className={`${open ? 'menu-open' : ''}`} />
        <div className={styles.logos}>
          <Link to='/' className={styles.logo}>
            <img src={pixieLogo} alt='pixie logo' />
          </Link>
          <div className={styles.socialIcons}>
            <a href='https://slackin.px.dev'>
              <img src={slack} alt='slack' />
            </a>
            <a href='https://github.com/pixie-io/pixie'>
              <img src={github} alt='github' />
            </a>
            <a href='https://twitter.com/pixie_run'>
              <img src={twitter} alt='twitter' />
            </a>
            <a href='https://www.youtube.com/channel/UCOMCDRvBVNIS0lCyOmst7eg/featured'>
              <img src={youtube} alt='youtube' />
            </a>
          </div>
        </div>
        <div className={`hide-mobile hide-tablet ${styles.menu}`}>
          <ul>

            <li>
              <a href='https://docs.px.dev/' target='_blank' rel='noreferrer'>
                Docs
              </a>
            </li>
            <li>
              <a href='https://blog.px.dev/' target='_blank' rel='noreferrer'>
                Blog
              </a>
            </li>
            <li>
              <Link to='/community'>
                Community
              </Link>
            </li>
            <li>
              <Link to='/enterprise'>
                Enterprise
              </Link>
            </li>
            <li className={styles.colored}>
              <a href='https://docs.px.dev/installing-pixie/install-guides/' target='_blank' rel='noreferrer'>
                GET STARTED
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`hide-desktop ${styles.menuResponsive} ${
            open ? styles.menuOpen : ''
          }`}
          onClick={() => closeMenu()}
        >
          <div className={styles.headerResponsive}>
            <Link to='/' className={styles.icon}>
              <img src={pixieLogo} alt='pixie logo' />
            </Link>
            <IconButton onClick={() => setOpen(false)} className={styles.close}>
              <CloseIcon style={{ color: 'white' }} />
            </IconButton>
          </div>
          <div className={styles.mobileNavMenu}>
            <div>
              <ul>
                <li>
                  <a href='https://docs.px.dev/' target='_blank' rel='noreferrer'>
                    Docs
                  </a>
                </li>
                <li>
                  <a href='https://blog.px.dev/' target='_blank' rel='noreferrer'>
                    Blog
                  </a>
                </li>
                  <li>
                    <Link to='/community'>Community</Link>
                  </li>
                <li>
                  <Link to='/enterprise'>Enterprise</Link>
                </li>
              </ul>
            </div>

          </div>
          <div className={styles.links}>

            <ul className={styles.socialIcons}>

              <li>
                <a href='https://docs.px.dev/' target='_blank' rel='noreferrer'>
                  <img src={docs} className={styles.socialIcon} />
                </a>
              </li>
              <li>
                <a href='https://github.com/pixie-io/pixie'>
                  <img src={github} className={styles.socialIcon} />
                </a>
              </li>
              <li>
                <a href='https://slackin.px.dev'>
                  <img src={slack} className={styles.socialIcon} />
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/channel/UCOMCDRvBVNIS0lCyOmst7eg/featured'>
                  <img src={youtube} className={styles.socialIcon} />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/pixie_run'>
                  <img src={twitter} className={styles.socialIcon} />
                </a>
              </li>
            </ul>

            <Link to='https://www.linuxfoundation.org/terms'>Terms of Service</Link>
            <br />
            <Link to='https://www.linuxfoundation.org/privacy'>Privacy Policy</Link>
          </div>
        </div>
        <IconButton onClick={() => setOpen(true)} className='hide-desktop'>
          <MenuIcon style={{ color: 'white' }} />
        </IconButton>
      </header>
    </>
  );
};

Header.propTypes = {
  whiteHeader: PropTypes.bool,
  transparentMenu: PropTypes.bool,
};
Header.defaultProps = {
  whiteHeader: false,
  transparentMenu: false,
};
export default Header;
