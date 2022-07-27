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
import * as styles from '../scss/pages/community.module.scss';
import pin from '../images/community/pin.svg';
import attachment from '../images/community/attachment.svg';
import Button from '../components/shared/button';
import Illustration from '../components/illustration';
import SpaceStation from '../images/community/community-hero.inline.svg';

import github from '../images/community/icons/github.svg';
import slack from '../images/community/icons/slack.svg';
import meetup from '../images/community/icons/meetup.svg';
import twitter from '../images/community/icons/twitter.svg';
import governance from '../images/community/icons/governance.svg';
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
import a11 from '../images/about/avatars/Pete Stevenson@2x.png';
import a13 from '../images/about/avatars/Ryan Cheng@2x.png';
import jaana from '../images/about/avatars/jaana.png';
import hightower from '../images/about/avatars/hightower.png';
import dax from '../images/about/avatars/dax.png';
import a10 from '../images/about/avatars/a10.png';
import you from '../images/about/avatars/you-avatar.svg';
import vectorLine from '../images/about/vector-line.svg';

const Founder = ({ img, name, position }) => (
  <div className={styles.founder}>
    <img src={img} alt={name} />
    <p>{name}</p>
    <p className={styles.founderPosition}>{position}</p>
  </div>
);

const CommunityPage = () => {
  const events = [
    {
      title: 'Pixienaut Monthly - January',
      date: 'January 27, 2022',
      location: 'Online (Zoom)',
      link: 'https://calendar.google.com/event?action=TEMPLATE&tmeid=YTVnZ2EybXBxOWZ1bW4zYjNjcnRnampicmpfMjAyMjAxMjdUMTgzMDAwWiBwaXhpZWxhYnMuYWlfMW84N3ZqdDc4bXI2cWFtOGdhM3BodjFkZTRAZw&tmsrc=pixielabs.ai_1o87vjt78mr6qam8ga3phv1de4%40group.calendar.google.com',
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
                    Pixie isn’t just a platform, it’s the community and the
                    shared expertise around observability and debugging.
                    If you are interested in becoming a Pixienaut,
                    you’ve come to the right place!
                  </p>
                </div>
                <div className='col-2' />
              </div>
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
              <div className='row'>
                <div className='col-2' />
                <div className='col-8'>
                  <SpaceStation className={styles.spaceStation} />
                </div>
                <div className='col-2' />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.getInvolved} id='get-involved'>
          <div className='container'>
            <div className='row'>
              <div className='col-2' />
              <div className='col-8'>
                <div className={styles.marker} style={{ margin: '20px auto' }} />
                <h2>Get Involved</h2>

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
                      <a href='https://slackin.px.dev'>
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
                      <span className={styles.whiteLink} onClick={() => scrollToSectionId('events-section')}>
                        Pixienaut meetup
                      </span>
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
                      <a href='https://github.com/pixie-io/pixie'>
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
                      <span className={styles.whiteLink} onClick={() => scrollToSectionId('governance')}>
                        Governance
                      </span>
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

        <section className={styles.foundingTeam} id='contributors'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h2>
                  <div className={styles.marker} style={{ margin: '20px auto' }} />
                  Meet the Contributors
                </h2>
                <p className={styles.heroSubtitle}>
                  Pixie was originally built by members of the Pixie Labs team.
                </p>
                <Founder
                  img={zain}
                  name='Zain Asgar'
                  position={(
                    <>
                      GM/GVP, New Relic
                      <br />
                      {' '}
                      Founder/CEO, Pixie
                    </>
                  )}
                />
                <Founder
                  img={ishan}
                  name='Ishan Mukherjee'
                  position={(
                    <>
                      VP Marketing, New Relic
                      <br />
                      {' '}
                      Founder/CPO, Pixie
                    </>
                  )}
                />
                <Founder
                  img={a1}
                  name='Michelle Nguyen'
                  position={(
                    <>
                      Principal SWE, New Relic
                      <br />
                      {' '}
                      Founding Engineer, Pixie
                    </>
                  )}
                />
                <Founder
                  img={a2}
                  name='Phillip Kuznetsov'
                  position={(
                    <>
                      Lead SWE, New Relic
                      <br />
                      {' '}
                      Founding Engineer, Pixie
                    </>
                  )}
                />
                <Founder
                  img={a3}
                  name='Yaxiong Zhao'
                  position={(
                    <>
                      Principal SWE, New Relic
                      <br />
                      {' '}
                      Founding Engineer, Pixie
                    </>
                  )}
                />
                <Founder
                  img={a4}
                  name='Omid Azizi'
                  position={(
                    <>
                      Principal SWE, New Relic
                      <br />
                      {' '}
                      Founding Engineer, Pixie
                    </>
                  )}
                />
                <Founder
                  img={a5}
                  name='Natalie Serrino'
                  position={(
                    <>
                      Principal SWE, New Relic
                      <br />
                      {' '}
                      Founding Engineer, Pixie
                    </>
                  )}
                />
                <Founder
                  img={a6}
                  name='James Bartlett'
                  position={(
                    <>
                      Senior SWE, New Relic
                      <br />
                      {' '}
                      Founding Engineer, Pixie
                    </>
                  )}
                />
                <Founder
                  img={a7}
                  name='Hannah Troisi'
                  position={(
                    <>
                      Senior DevRel, New Relic
                      <br />
                      {' '}
                      Founding DevRel, Pixie
                    </>
                  )}
                />
                <Founder
                  img={a8}
                  name='Nick Lanam'
                  position={(
                    <>
                      Lead SWE, New Relic
                      <br />
                      {' '}
                      Founding Engineer, Pixie
                    </>
                  )}
                />
                <Founder
                  img={a9}
                  name='Vihang Mehta'
                  position={(
                    <>
                      Principal SWE, New Relic
                      <br />
                      {' '}
                      Founding Engineer, Pixie
                    </>
                  )}
                />
                <Founder
                  img={a11}
                  name='Pete Stevenson'
                  position={(
                    <>
                      Principal SWE, New Relic
                      <br />
                      {' '}
                      Founding Engineer, Pixie
                    </>
                  )}
                />
                <Founder
                  img={a13}
                  name='Ryan Cheng'
                  position={(
                    <>
                      SWE, New Relic
                    </>
                  )}
                />
                <Founder
                  img={a10}
                  name='James Thomas'
                  position={(
                    <>
                      Research Intern, New Relic
                    </>
                  )}
                />
                <div className={styles.youLine}>
                  <Founder img={you} name='You!' position='' />
                  <img src={vectorLine} alt='' className={styles.vectorLine} />
                  <div>
                    <h5>
                      This is could be you, contribute to the Pixie project!
                    </h5>
                    <a href='https://github.com/pixie-io/pixie/blob/main/CONTRIBUTING.md'>
                      <button type='button'>CONTRIBUTE</button>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className='container' id='governance'>
            <div className='row'>
              <div className='col-12'>
                <h2>
                  <div className={styles.marker} style={{ margin: '20px auto' }} />
                  Meet the Leadership
                </h2>
                <p className={styles.heroSubtitle}>
                  The overall role of the Board is to ensure a long-term well-being of the project,
                  both technically and as a community. Read about or governance structure
                  <a className={styles.link} href='https://github.com/pixie-io/pixie/blob/main/GOVERNANCE.md' target='_blank' rel='noreferrer'>here</a>
                  .
                </p>
                <div className={styles.team}>
                  <h3>Project Team Members</h3>
                  <Founder
                    img={zain}
                    name='Zain Asgar'
                    position={(
                      <>
                        GM/GVP - Pixie & Open Source,
                        <br />
                        {' '}
                        New Relic
                      </>
                    )}
                  />
                  <Founder
                    img={a1}
                    name='Michelle Nguyen'
                    position={(
                      <>
                        Principal Engineer,
                        <br />
                        {' '}
                        New Relic
                      </>
                    )}
                  />
                </div>

                <div className={styles.team}>
                  <h3>End-User Members</h3>
                  <Founder
                    img={dax}
                    name='Dax McDonald'
                    position={(
                      <>
                        Software Engineer,
                        <br />
                        Sourcegraph
                      </>
                    )}
                  />
                  <Founder img={you} name='TBD' position='' />
                </div>
                <div className={styles.team}>
                  <h3>Community Members</h3>
                  <Founder
                    img={hightower}
                    name='Kelsey Hightower'
                    position={(
                      <>
                        Staff Developer Advocate,
                        <br />
                        {' '}
                        Google Cloud Platform
                      </>
                    )}
                  />
                  <Founder
                    img={jaana}
                    name='Jaana Dogan'
                    position={(
                      <>
                        Principle Engineer,
                        <br />
                        Amazon Web Services
                      </>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

        </section>
        <section className={styles.goodies} id='gear-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className={styles.marker} style={{ margin: '20px auto' }} />
                <h2>
                  Get Gear
                </h2>
                <p className={styles.heroSubtitle}>
                  Download stickers, wallpapers, illustrations.
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
                <h3>Stickers</h3>
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
      </div>
    </Layout>
  );
};

export default CommunityPage;
