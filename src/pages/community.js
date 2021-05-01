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
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from '../scss/pages/community.module.scss';
import pin from '../images/community/pin.svg';
import attachment from '../images/community/attachment.svg';
import hostEvent from '../images/community/host-an-event.svg';
import Button from '../components/shared/button';
import Illustration from '../components/illustration';
import SpaceStation from '../images/community/community-hero.inline.svg';

import github from '../images/community/icons/github.svg';
import slack from '../images/community/icons/slack.svg';
import meetup from '../images/community/icons/meetup.svg';
import twitter from '../images/community/icons/twitter.svg';
import governance from '../images/community/icons/governance.svg';

const CommunityPage = () => {
  const events = [
    {
      title: 'Pixienaut Monthly - April',
      date: 'April  22, 2021',
      location: 'Online (Zoom)',
      link: 'https://calendar.google.com/event?action=TEMPLATE&tmeid=YTVnZ2EybXBxOWZ1bW4zYjNjcnRnampicmpfMjAyMTA0MjJUMTczMDAwWiBwaXhpZWxhYnMuYWlfMW84N3ZqdDc4bXI2cWFtOGdhM3BodjFkZTRAZw&tmsrc=pixielabs.ai_1o87vjt78mr6qam8ga3phv1de4%40group.calendar.google.com',
    }, {
      title: 'Pixienaut Monthly - May',
      date: 'May  27, 2021',
      location: 'Online (Zoom)',
      link: 'https://calendar.google.com/event?action=TEMPLATE&tmeid=YTVnZ2EybXBxOWZ1bW4zYjNjcnRnampicmpfMjAyMTA1MjdUMTczMDAwWiBwaXhpZWxhYnMuYWlfMW84N3ZqdDc4bXI2cWFtOGdhM3BodjFkZTRAZw&tmsrc=pixielabs.ai_1o87vjt78mr6qam8ga3phv1de4%40group.calendar.google.com&scp=ALL',
    }, {
      title: 'Pixienaut Monthly - June',
      date: 'June 24, 2021',
      location: 'Online (Zoom)',
      link: 'https://calendar.google.com/event?action=TEMPLATE&tmeid=YTVnZ2EybXBxOWZ1bW4zYjNjcnRnampicmpfMjAyMTA2MjRUMTczMDAwWiBwaXhpZWxhYnMuYWlfMW84N3ZqdDc4bXI2cWFtOGdhM3BodjFkZTRAZw&tmsrc=pixielabs.ai_1o87vjt78mr6qam8ga3phv1de4%40group.calendar.google.com&scp=ALL',
    },
  ];
  const scrollToSectionId = (section) => {
    const topOfElement = document.getElementById(section).offsetTop - 75;
    if (typeof window !== 'undefined') {
      window.scroll({
        top: topOfElement,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Layout transparentMenu>
      <SEO
        title='Pixie Community | Connect with Pixie Enthusiasts'
        description='Become a Pixienaut to share domain expertise &
         debugging knowledge with our developer community.'
      />
      <div className={styles.communityPage}>
        <div className={styles.starField}>
          <Illustration
            loading='eager'
            filename='star-field.png'
            alt='star field'
            className={styles.starsBackground}
          />
          <Illustration
            loading='eager'
            filename='space-dust.png'
            alt='space dust'
            className={styles.starsBackground}
            style={{ position: 'absolute' }}
          />
        </div>
        <section className={styles.communityHero}>
          <div className={` ${styles.heroContainer}`}>
            <div className='container'>
              <div className='row'>
                <div className='col-2' />
                <div className='col-8'>
                  <h1>Be a Pixienaut</h1>
                  <p className={styles.heroSubtitle}>
                    We are lucky to have a diverse and enthusiastic community of
                    early adopters who are helping shape our product and
                    community. If you are interested in becoming a Pixienaut
                    you’ve come to the right place!
                  </p>
                </div>
                <div className='col-2' />
                <div className='row'>
                  <div className='col-12'>
                    <ul className={styles.inlineNav}>
                      <li onClick={() => scrollToSectionId('get-involved')}>
                        Get Involved
                      </li>
                      <li onClick={() => scrollToSectionId('events-section')}>
                        Events
                      </li>
                      <li onClick={() => scrollToSectionId('contributors')}>
                        Contributors
                      </li>
                      <li onClick={() => scrollToSectionId('governance')}>
                        Governance
                      </li>
                      <li onClick={() => scrollToSectionId('gear-section')}>
                        Gear
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SpaceStation className={styles.spaceStation} />
        </section>
        <section className={styles.getInvolved} id='get-involved'>
          <div className='container'>
            <div className='row'>
              <div className='col-2' />
              <div className='col-8'>
                <div className={styles.marker} style={{ margin: '20px auto' }} />
                <h2>Get Involved</h2>
                <p className={styles.heroSubtitle}>
                  Pixie isn’t just a platform, it’s the community and the shared
                  expertise around observability and debugging.
                </p>
              </div>
              <div className='col-2' />
            </div>

            <div className='row'>
              <div className='col-12 '>
                <ul>
                  <li>
                    <div>
                      <img src={slack} alt='' />
                    </div>
                    <p>
                      Join
                      <a href='https://slackin.withpixie.ai'>
                        Pixie’s Slack
                      </a>
                      workspace for live conversations and quick questions.
                    </p>
                  </li>
                  <li>
                    <div>
                      <img src={meetup} alt='' />
                    </div>
                    <p>
                      Attend a monthly
                      <a href='#'>
                        Pixienaut meetup??
                      </a>
                      to hear updates on the Pixie project and ask questions of the maintainers.
                    </p>
                  </li>
                  <li>
                    <div>
                      <img src={twitter} alt='' />
                    </div>
                    <p>
                      Follow Pixie on
                      <a href='https://twitter.com/pixie_run'>
                        Twitter
                      </a>
                      for the latest news and announcements.
                    </p>
                  </li>
                  <li>
                    <div>
                      <img src={github} alt='' />
                    </div>
                    <p>
                      Check out the
                      <a href='https://github.com/pixie-labs/pixie'>
                        GitHub
                      </a>
                      repo to see the source code.
                    </p>
                  </li>
                  <li>
                    <div>
                      <img src={governance} alt='' />
                    </div>
                    <p>
                      Read our
                      <a href='#'>
                        Governance??
                      </a>
                      doc to learn more about how the Pixie project is managed.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id='events' className={styles.events}>
          <div className='container'>
            <div className='row' id='events-section'>
              <div className='col-2' />
              <div className='col-8'>
                <div className={styles.marker} style={{ margin: '20px auto' }} />

                <h2>Attend Pixienaut Meetups</h2>
                <p className={styles.heroSubtitle}>
                  Every month, Pixienauts around the world organize meetups,
                  lunch and learns, and meetups to share what they’re building
                  with Pixie
                </p>
              </div>
              <div className='col-2' />
            </div>
            {events.map((event) => (
              <div className='row' key={event.title}>
                <div className='col-2' />
                <div className='col-8'>
                  <div className={styles.eventItem}>
                    <div className='row '>
                      <div className={`col-8 ${styles.eventItemTitle}`}>
                        <p>
                          {event.title}
                          <span>{event.date}</span>
                        </p>

                        <span>
                          <img src={pin} alt='pin' />
                          {event.location}
                        </span>
                      </div>
                      <div className={`col-4 ${styles.eventItemDetails}`}>
                        <a href={event.link}>
                          <Button type='button'>Register</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-2' />
              </div>
            ))}
          </div>
        </section>
        <section className={`${styles.people} container`}>
          <Illustration filename='Person1.png' alt='person 1' />
          <Illustration filename='Person2.png' alt='person 1' />
          <Illustration filename='Person3.png' alt='person 1' />
          <Illustration filename='Person4.png' alt='person 1' />
          <Illustration filename='Person5.png' alt='person 1' />
          <Illustration filename='Person6.png' alt='person 1' />
          <Illustration filename='Person7.png' alt='person 1' />
          <Illustration filename='Person9.png' alt='person 1' />
          <Illustration filename='Person16.png' alt='person 1' />
          <Illustration filename='Person8.png' alt='person 1' />
          <Illustration filename='Person11.png' alt='person 1' />
          <Illustration filename='Person12.png' alt='person 1' />
          <Illustration filename='Person13.png' alt='person 1' />
          <Illustration filename='Person14.png' alt='person 1' />
          <Illustration filename='Person10.png' alt='person 1' />
          <Illustration filename='Person15.png' alt='person 1' />
          <Illustration filename='Person17.png' alt='person 1' />
          <Illustration filename='Person18.png' alt='person 1' />
        </section>
        <section className={styles.goodies} id='gear-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h2>Learn who Pixienauts are and download gear</h2>
                <p className={styles.heroSubtitle}>
                  Wondering what’s the story behind all the space tech
                  analogies?
                  <br />
                  You have come to the right place!
                </p>

                <Illustration
                  critical
                  filename='inline-stars.png'
                  alt='star field'
                  className={styles.inlineStars}
                  style={{ position: 'absolute' }}
                />

                <Illustration
                  filename='space-guys.png'
                  alt='spaceship drive'
                  className={styles.spaceshipDrive}
                />
              </div>
            </div>
          </div>
          <div className='container' style={{ zIndex: 1 }}>
            <div className='row'>
              <div className='col-4'>
                <h3>Badges & Stickers</h3>
                <div className={styles.file}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/open?id=154F3NrblcUBl8L1f-07e25rNmuimsbtU'
                  >
                    <img src={attachment} alt='attachment icon' />
                    <div>
                      <p>Pixie PEM Module</p>
                      <span>4 Color Variations</span>
                    </div>
                  </a>
                </div>
                <div className={styles.file}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/open?id=13Hv9pb6lI5ieRD3uZGDZFJ6XofunUn13'
                  >
                    <img src={attachment} alt='attachment icon' />
                    <div>
                      <p>Pixie Brand Badges </p>
                      <span>4 Design Styles</span>
                    </div>
                  </a>
                </div>
                <div className={styles.file}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/open?id=14eroq1_Z4Uutzncn0Fob0625H4MvHem3'
                  >
                    <img src={attachment} alt='attachment icon' />
                    <div>
                      <p>PX Run Badge </p>
                      <span>1 Design </span>
                    </div>
                  </a>
                </div>
                <div className={styles.file}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/open?id=1MoFaFcMrkts7jG6l20XSBYgG3rmwx434'
                  >
                    <img src={attachment} alt='attachment icon' />
                    <div>
                      <p>Pixienaut Badge</p>
                      <span>3 Design Styles </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-4'>
                <h3>Wallpapers</h3>
                <div className={styles.file}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/open?id=10NXjaQnHnIqlvqwyXfCo2dkXqjc0oEbQ'
                  >
                    <img src={attachment} alt='attachment icon' />
                    <div>
                      <p>Pixie Cockpit</p>
                      <span>21 Sizes </span>
                    </div>
                  </a>
                </div>
                <div className={styles.file}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href=' https://drive.google.com/open?id=1QISBaJ0cl-Xk3IRItr7EQMEvR_LUllk-'
                  >
                    <img src={attachment} alt='attachment icon' />
                    <div>
                      <p>Pixie Rover</p>
                      <span>21 Sizes </span>
                    </div>
                  </a>
                </div>
                <div className={styles.file}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/open?id=16P4T22RSM1pv5Zcw68IsnRgAxIgJAvHq'
                  >
                    <img src={attachment} alt='attachment icon' />
                    <div>
                      <p>Pixie Astronaut</p>
                      <span>21 Sizes</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-4'>
                <h3>Illustrations</h3>
                <div className={styles.file}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/open?id=1nthaIRl2fbn5MwBgZjEl3yJx2-oWA43H'
                  >
                    <img src={attachment} alt='attachment icon' />
                    <div>
                      <p>Logo .PNG</p>
                      <span>Assorted </span>
                    </div>
                  </a>
                </div>
                <div className={styles.file}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href=' https://drive.google.com/open?id=1fMIGId_c-8H4uXUaXyQK3kd3IoIUCgxC'
                  >
                    <img src={attachment} alt='attachment icon' />
                    <div>
                      <p>Logo .SVG</p>
                      <span>Assorted </span>
                    </div>
                  </a>
                </div>
                <div className={styles.file}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/open?id=10VZXaSBgdFAvo834UQdl5Jdbnlrzi8XT'
                  >
                    <img src={attachment} alt='attachment icon' />
                    <div>
                      <p>Logo .PDF</p>
                      <span>1 File</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.hostEvents}>
          <div className='container'>
            <div className={styles.slackCommunity}>
              <div className='row'>
                <div className='col-6' />
                <div className='col-6'>
                  <h4>Coming soon</h4>
                  <h2>
                    We’ll be adding community online meetups, events and blogs
                    soon
                  </h2>
                  <a
                    href='https://slackin.withpixie.ai/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='button'
                  >
                    {' '}
                    JOIN COMMUNITY SLACK
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img src={hostEvent} alt='moon' className={styles.hostEvent} />
        </section>
      </div>
    </Layout>
  );
};

export default CommunityPage;
