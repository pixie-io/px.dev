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
import {
  JobPostsContext,
  JobPostsProvider,
} from '../components/shared/job-posts';
import styles from '../scss/pages/careers-old.module.scss';
import HeroImage from '../components/hero-image/hero-image';
import careersHeroImage from '../images/Career@2x.png';

const SecondPage = () => {
  const scrollToCareers = () => {
    document.getElementById('careers-section').scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };
  return (
    <Layout>
      <SEO
        title='Careers at Pixie | Join our Team of Builders '
        description='Learn more about what it means to work at Pixie and discover our open positions. Do you have what it takes to be a Pixie Builder?'
      />
      <BodyClassName className='black' />
      <JobPostsProvider>
        <section className={styles.careersHero}>
          <div className='container'>
            <div className={`row ${styles.heroContainer}`}>
              <div className={`col-5 ${styles.contentJobs}`}>
                <h1>We are builders.</h1>
                <h2>
                  Happiness for us is building great teams, products, companies,
                  ideas, relationships, and a better world around us.
                </h2>
                <button type='button' onClick={scrollToCareers}>
                  Open Positions
                </button>
              </div>
              <div className='col-7 hero-col'>
                <HeroImage img={careersHeroImage} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.careersContent} id='careers-section'>
          <div className={styles.ornamentTopRight} />
          <div className={`content ${styles.contentJobs}`}>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <h3>
                    We’re looking for builders who love&nbsp;
                    <br />
                    zero to one opportunities
                  </h3>
                </div>
              </div>
              <div className={`row ${styles.jobList}`}>
                <JobPostsProvider>
                  <JobPostsContext.Consumer>
                    {(context) => (context.loading ? (
                      <div>loading, please wait...</div>
                    ) : (
                      (context.list || []).map((job, i) => (
                        <div className='col-4' key={job.id}>
                          <div className={styles.jobItem}>
                            <h4>{job.title}</h4>
                            <span>
                              <i className='icon-pin' />
                              {job.location}
                            </span>
                            <a className={styles.jobItemLink} href={job.link}>
                              Apply Now
                            </a>
                          </div>
                        </div>
                      ))
                    ))}
                  </JobPostsContext.Consumer>
                </JobPostsProvider>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.careersGuideRails}>
          <div className={styles.ornamentTopRight} />
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h3>Our guide rails</h3>
              </div>
            </div>
            <div className='row'>
              <div className={`col-4 ${styles.guidetailsItem}`}>
                <div className={styles.guiderailsContent}>
                  <i className='icon-reports' />
                  <h4>Learn, Do, Grow</h4>
                  <p>
                    Be endlessly curious and invent your way out of problems with
                    first principles thinking.
                  </p>
                </div>
              </div>
              <div className={`col-4 ${styles.guidetailsItem}`}>
                <div className={styles.guiderailsContent}>
                  <i className='icon-circle-1' />
                  <h4>Be Nice</h4>
                  <p>
                    Strive to be humble, respectful & empathetic to our peers,
                    customers and world around us.
                  </p>
                </div>
              </div>
              <div className={`col-4 ${styles.guidetailsItem}`}>
                <div className={styles.guiderailsContent}>
                  <i className='icon-star' />
                  <h4>Pursue Consistent Excellence</h4>
                  <p>
                    Strive to earn expertise, trust & credibility by delivering
                    with consistency and focus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ornamentBottomLeft} />
        </section>
        <section className={styles.careersMessage}>
          <div
            className={styles.quoteOrnament1}
            data-sal='slide-up'
            data-sal-duration='600'
            data-sal-delay='300'
            data-sal-easing='ease'
          />
          <div
            data-sal='slide-down'
            data-sal-duration='900'
            data-sal-delay='300'
            data-sal-easing='ease'
            className={styles.quoteOrnament2}
          />
          <h4>We’re building</h4>
          <h3>Have questions or suggestions?</h3>
          <Link to='/contact' className='button'>
            Contact Us
          </Link>
        </section>
      </JobPostsProvider>
    </Layout>
  );
};

export default SecondPage;
