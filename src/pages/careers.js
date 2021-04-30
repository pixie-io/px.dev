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
import { JobPostsContext, JobPostsProvider } from '../components/shared/job-posts';
import styles from '../scss/pages/careers.module.scss';
import heroImage from '../images/careers/careers-hero.svg';
import pixieLogo from '../images/icon-logo-p.svg';
import pin from '../images/location.svg';
import learn from '../images/careers/learn-icon.svg';
import nice from '../images/careers/nice-icon.svg';
import consistent from '../images/careers/consistent-icon.svg';
import footerBackground from '../images/careers/footer-main.svg';
import tile1 from '../images/careers/tiles/tile-1.jpg';
import tile2 from '../images/careers/tiles/tile-2.jpg';
import tile3 from '../images/careers/tiles/tile-3.jpg';
import tile4 from '../images/careers/tiles/tile-4.jpg';
import tile5 from '../images/careers/tiles/tile-5.jpg';
import tile6 from '../images/careers/tiles/tile-6.jpg';
import tile7 from '../images/careers/tiles/tile-7.jpg';
import tile8 from '../images/careers/tiles/tile-8.jpg';

const SecondPage = () => {
  const scrollToCareers = () => {
    document.getElementById('careers-section').scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };
  return (
    <Layout transparentMenu>
      <SEO
        title='Careers at Pixie | Join our Team of Builders '
        description='Learn more about what it means to work at Pixie and discover our open positions. Do you have what it takes to be a Pixie Builder?'
      />
      <div className={styles.mainBackground}>
        <section className={styles.careersHero}>
          <img src={heroImage} alt='' className={styles.heroImage} />
          <div className='container'>
            <div className='row'>
              <div className='col-6 vertical-center'>
                <h1>Join Us at Pixie.</h1>
                <button type='button' onClick={scrollToCareers} className={styles.positionsButton}>
                  SEE OPEN POSITIONS
                </button>
              </div>
              <div className='col-6' />
            </div>
          </div>
        </section>
        <section className={styles.builders}>
          <div className='container'>
            <div className='row'>
              <img src={pixieLogo} alt='' />
              <h2>We are builders</h2>
              <div className='col-2' />
              <div className='col-8'>
                <p>
                  At Pixie Labs, we build machine intelligence systems which
                  empower developers to engineer the future. Our first product,
                  Pixie, helps developers explore, monitor, secure and manage
                  their applications without the need to change code, manually
                  set up ad hoc dashboards or compromise on how much performance
                  data they can observe.
                </p>
                <p>
                  We are a team of builders and we’ve spent the last decade
                  building scaled out data and machine learning systems working
                  in teams like Google, Apple, Nvidia, Amazon, Intel, Stanford,
                  MIT and UC Berkeley.
                </p>
                <p>
                  Happiness for us is building great teams, products, companies,
                  ideas, relationships, and a better future from the ground up.
                  If you are interested in working at Pixie, check out our
                  openings below and reach out to us. We’ll love to hear from you!
                </p>
              </div>
              <div className='col-2' />

            </div>
          </div>
        </section>
        <section className={styles.jobs} id='careers-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className={styles.overText}>WE&apos;RE HIRING</div>
                <h2>
                  We’re looking for builders who love
                  <br />
                  zero to one opportunities
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className={styles.jobContainer}>
                <JobPostsProvider>
                  <JobPostsContext.Consumer>
                    {(context) => (context.loading ? (
                      <div>loading, please wait...</div>
                    ) : (
                      (context.list || []).map((job) => (
                        <a href={job.link} className={styles.jobItem} key={job.id}>
                          <div>
                            <h4>{job.title}</h4>
                            <span>
                              <img src={pin} alt='' className={styles.locationPin} />
                              {job.location}
                            </span>
                            <span className={styles.jobItemLink}>
                              APPLY NOW
                            </span>
                          </div>
                        </a>
                      ))
                    ))}
                  </JobPostsContext.Consumer>
                </JobPostsProvider>
              </div>
            </div>

          </div>
        </section>
        <section className={styles.guardrails}>
          <div className='container'>
            <div className={`row ${styles.guardrailsTitle}`}>
              <div className='col-12'>
                <h2>Our Guiderails</h2>
                <p>Values and principles that guide us</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <img src={learn} alt='' />
                <h6>LEARN, DO, GROW</h6>
                <p>
                  Be endlessly curious and invent your way out of problems
                  with first principles thinking.
                </p>
              </div>
              <div className='col-4'>
                <img src={nice} alt='' />
                <h6>BE NICE</h6>
                <p>
                  Strive to be humble, respectful & empathetic to our peers,
                  customers and world around us.
                </p>
              </div>
              <div className='col-4'>
                <img src={consistent} alt='' />
                <h6>PURSUE CONSISTENT EXCELLENCE</h6>
                <p>
                  Strive to earn expertise, trust & credibility by delivering
                  with consistency and focus.
                </p>
              </div>
            </div>
          </div>

        </section>
        <section className={styles.gallery}>
          <div className={styles.column} style={{ width: '60%' }}>
            <div style={{ width: '40%', height: '560px' }}>
              <img src={tile6} alt='' className={styles.tile} />
            </div>
            <div style={{ width: '30%', height: '186px' }}>
              <img src={tile8} alt='' className={styles.tile} />
            </div>
            <div style={{ width: '30%', height: '186px' }}>
              <img src={tile7} alt='' className={styles.tile} />
            </div>
            <div
              style={{
                width: '60%', height: '372px', marginLeft: '40%', top: '-372px',
              }}
            >
              <img src={tile1} alt='' className={styles.tile} />
            </div>
          </div>
          <div className={styles.column} style={{ width: '40%' }}>
            <div style={{ width: '70%', height: '256px' }}>
              <img src={tile3} alt='' className={styles.tile} />
            </div>
            <div style={{ width: '30%', height: '256px' }}>
              <img src={tile2} alt='' className={styles.tile} />
            </div>

            <div style={{ width: '45%', height: '304px' }}>
              <img src={tile5} alt='' className={styles.tile} />
            </div>
            <div style={{ width: '55%', height: '304px' }}>
              <img src={tile4} alt='' className={styles.tile} />
            </div>
          </div>
        </section>
        <section className={styles.contactUs}>
          <div className='container'>
            <div className='row'>
              <div className='col-6' />
              <div className='col-6'>
                <h2>
                  Have questions or
                  <br className=' hide-mobile hide-tablet ' />
                  {' '}
                  suggestions
                </h2>

                <Link to='/contact' className='button'>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <img src={footerBackground} alt='' className={styles.footerImage} />
        </section>
      </div>
    </Layout>
  );
};

export default SecondPage;
