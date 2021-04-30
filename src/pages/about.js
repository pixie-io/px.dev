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

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../scss/pages/about.module.scss';
import zain from '../images/about/zain.png';
import ishan from '../images/about/ishan.png';
import a1 from '../images/about/avatars/a1.png';
import a2 from '../images/about/avatars/a2.png';
import a3 from '../images/about/avatars/a3.png';
import a4 from '../images/about/avatars/a4.png';
import a5 from '../images/about/avatars/a5.png';
import a6 from '../images/about/avatars/a6.png';
import a7 from '../images/about/avatars/a7.png';
import a8 from '../images/about/avatars/a8.png';
import a9 from '../images/about/avatars/a9.png';
import a10 from '../images/about/avatars/a10.png';
import a11 from '../images/about/avatars/Pete Stevenson@2x.png';
import a12 from '../images/about/avatars/Vishal Jain@2x.png';
import a13 from '../images/about/avatars/Ryan Cheng@2x.png';
import you from '../images/about/avatars/you-avatar.png';
import vectorLine from '../images/about/vector-line.svg';
import bottomSpaceStars from '../images/homepage/bottom-stars.png';
import spaceGuys from '../images/homepage/space-illustration.svg';
import Button from '../components/shared/button';

const Founder = ({ img, name, position }) => (
  <div className={styles.founder}>
    <img src={img} alt={name} />
    <p>{name}</p>
    <p className={styles.founderPosition}>{position}</p>
  </div>
);

const AboutPage = () => (
  <Layout transparentMenu>
    <SEO
      title='About Pixie | Join our Team of Builders '
      description=''
    />
    <section className={styles.aboutHero}>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h1>
              Help developers
              <br />
              engineer the future
            </h1>
            <p>
              Pixie helps developers explore, monitor, secure and manage their
              applications without the need to change code, manually set up
              dashboards or compromise on how much data they can observe.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.foundingTeam}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2>
              <div className={styles.marker} style={{ margin: '20px auto' }} />
              Our Founding Team
            </h2>
            <Founder img={zain} name='Zain Asgar' position='Co-Founder/CEO' />
            <Founder img={ishan} name='Ishan Mukherjee' position='Co-Founder/CPO' />
            <Founder img={a1} name='Michelle Nguyen' position='Founding Engineer' />
            <Founder img={a2} name='Phillip Kuznetsov' position='Founding Engineer' />
            <Founder img={a3} name='Yaxiong Zhao' position='Founding Engineer' />
            <Founder img={a4} name='Omid Azizi' position='Founding Engineer' />
            <Founder img={a5} name='Natalie Serrino' position='Founding Engineer' />
            <Founder img={a6} name='James Bartlett' position='Founding Engineer' />
            <Founder img={a7} name='Hannah Troisi' position='Founding Engineer' />
            <Founder img={a8} name='Nick Lanam' position='Founding Engineer' />
            <Founder img={a9} name='Vihang Mehta' position='Founding Engineer' />
            <Founder img={a11} name='Pete Stevenson' position='Founding Engineer' />
            <Founder img={a12} name='Vishal Jain' position='Founding Engineer' />
            <Founder img={a13} name='Ryan Cheng' position='Founding Engineer' />
            <Founder img={a10} name='James Thomas' position='Research Intern' />

            <div className={styles.youLine}>
              <Founder img={you} name='You!' position='' />
              <img src={vectorLine} alt='' className={styles.vectorLine} />
              <div>
                <h5>
                  This is could be you, come join our team at Pixie
                </h5>
                <Link to='/careers'>
                  <button type='button'>View Openings</button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>

    <section className={styles.stats}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className={styles.statsTitle}>
              <div className={styles.marker} />
              Pixie is based in San Francisco, California
            </h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <h2>Aug 2018</h2>
            <h4>Pixie Founded</h4>
          </div>
          <div className='col-3'>
            <h2>Oct 2020</h2>
            <h4>Pixie Launched</h4>
          </div>
          <div className='col-6'>
            <h2>1K+</h2>
            <h4>Boba Teas Consumed</h4>
          </div>
        </div>
      </div>
    </section>
    <div
      style={{ backgroundImage: `url(${bottomSpaceStars})` }}
      className={styles.bottomStars}
    >
      <section className={styles.communitySection}>
        <img className={styles.spaceGuys} loading='lazy' src={spaceGuys} alt='' />
        <div className='container'>
          <div className={styles.communitySectionTitle}>
            <h2>
              <div className={styles.marker} />
              Interested in helping shape
              {' '}
              <br className='hide-mobile hide-tablet' />
              {' '}
              our product & community?
            </h2>
            <div>
              <Button className={styles.button} to='/community'>
                BE A PIXIENAUT
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className='clear-both' />
    </div>
  </Layout>
);

export default AboutPage;
