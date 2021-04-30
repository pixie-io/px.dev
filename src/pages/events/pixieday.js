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

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import styles from '../../scss/pages/pixieday.module.scss';
import mic from '../../images/events/mic.svg';
import kelsey from '../../images/events/3.png';
import ishan from '../../images/events/25.png';
import natalie from '../../images/events/natalie.png';
import kartik from '../../images/events/kartik.png';
import michelle from '../../images/events/michelle.png';
import zain from '../../images/events/zain.png';
import astronaut from '../../images/events/astronaut.svg';
import AddToCalendar from '../../components/add-to-calendar/add-to-calendar';
import demo from '../../images/events/icons/Demo.svg';
import keynote from '../../images/events/icons/Keynote.svg';
import lectures from '../../images/events/icons/Lectures.svg';
import calendar from '../../images/events/calendar.svg';
import Button from '../../components/shared/button';
import pixieDayHero from '../../images/pixie-day/pixienaut-launch.svg';

const CounterItem = ({ value, title }) => (
  <div className={styles.counterItem}>
    <div className={styles.counter}>{value}</div>
    <div className={styles.title}>{title}</div>
  </div>
);
const PixiedayPage = () => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });

  const processTimer = () => {
    const now = new Date();
    const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    let diff = (new Date('October 8, 2020 17:00:00') - utc) / 1000;
    const addZeros = (value) => (String(value).length < 2 ? `0${value}` : value);

    const timeLeft = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    if (diff <= 0) {
      setTimer(timeLeft);
      return;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = addZeros(Math.floor(diff / 86400));
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = addZeros(Math.floor(diff / 3600));
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = addZeros(Math.floor(diff / 60));
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = addZeros(Math.floor(diff));
    setTimer(timeLeft);
  };

  useEffect(() => {
    processTimer();
    setInterval(() => processTimer(), 1000);
  }, []);
  return (
    <Layout transparentMenu>
      <SEO
        title='Kubernetes Monitoring, Application Debug Platform | Pixie'
        description='A simple and robust monitoring and live-debug platform
           for distributed environments, designed for developers.'
      />
      <Helmet>
        <script src='https://js.tito.io/v1' type='text/javascript' />
      </Helmet>
      <div className={styles.eventsPage}>
        <section className={styles.heroSection}>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className={styles.overText}>
                  REGISTER FOR PIXIE COMMUNITY DAY
                  <span className='hide-mobile hide-tablet'> - </span>
                  <br className='hide-desktop' />
                  OCT 08, 2020
                </div>
                <h1>
                  An Online Event to Introduce Pixie
                  <span>and how to instantly debug applications on Kubernetes </span>
                </h1>
                <a href='https://twitter.com/search?q=%23pixieday' target='_blank' rel='noreferrer' className={styles.pixieDayHashtag}>#PixieDay</a>
                <div className={styles.counterWidget}>
                  <CounterItem value={timer.days} title='Days' />
                  <span className={styles.dots}>:</span>
                  <CounterItem value={timer.hours} title='Hours' />
                  <span className={styles.dots}>:</span>
                  <CounterItem value={timer.min} title='Minutes' />
                  <span className={styles.dots}>:</span>
                  <CounterItem value={timer.sec} title='Seconds' />
                </div>
                <Button link='https://hopin.to/events/pixie-demo-day'>
                  REGISTER
                </Button>
                <div className={styles.addToCalendar}>
                  <AddToCalendar noBorder />

                </div>
              </div>
            </div>
          </div>
          <img src={pixieDayHero} alt='' className={styles.pixieDayHeroImage} />
        </section>
        <section className={styles.speakersSection}>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h2>
                  <img src={mic} alt='' className={styles.mic} />
                  Our Speakers
                </h2>
                <div className={styles.speakersRow}>
                  <div className={styles.speaker}>
                    <img src={kelsey} alt='' />
                    <p>
                      Kelsey Hightower
                      <span>Google</span>
                    </p>
                  </div>
                  <div className={styles.speaker}>
                    <img src={zain} alt='' />
                    <p>
                      Zain Asgar
                      <span>Co-Founder/CEO</span>
                    </p>
                  </div>
                  <div className={styles.speaker}>
                    <img src={ishan} alt='' />
                    <p>
                      Ishan Mukherjee
                      <span>Co-Founder/CPO</span>
                    </p>
                  </div>
                  <div className={styles.speaker}>
                    <img src={natalie} alt='' />
                    <p>
                      Natalie Serrino
                      <span>Founding Engineer</span>
                    </p>
                  </div>
                  <div className={styles.speaker}>
                    <img src={kartik} alt='' />
                    <p>
                      Kartik Garg
                      <span>
                        Head of Cloud, Infra and
                        <br className='hide-not-desktop' />
                        {' '}
                        Platform at Hulu
                      </span>
                    </p>
                  </div>
                  <div className={styles.speaker}>
                    <img src={michelle} alt='' />
                    <p>
                      Michelle Nguyen
                      <span>Founding Engineer</span>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.detailsSection}>
          <div className='container'>
            <div className='row'>
              <div className='col-10'>
                <h2>What is the Event</h2>
                <p className={styles.description}>
                  We now build decoupled software systems for velocity,
                  agility and scale. However, troubleshooting them is still
                  a massive time sink. We spend months instrumenting only
                  to spend hours debugging incidents. In this online event,
                  we will introduce how Pixie addresses this opportunity to
                  help engineers get data in seconds and debug in minutes
                </p>
              </div>
              <div className='col-2' />
              <div className='row'>
                <div className='col-6'>
                  <h3>
                    <img src={keynote} alt='' />
                    Keynote
                  </h3>
                  <p>
                    Kelsey Hightower and Pixie’s founders introduce
                    Pixie to the broader community
                  </p>
                </div>
                <div className='col-6'>
                  <h3>
                    <img src={lectures} alt='' />
                    Panel Discussions
                  </h3>
                  <p>
                    Kelsey moderates a discussion with Pixie’s customers
                    and Pixie founders
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <h3>
                    <img src={demo} alt='' />
                    Deep Dives
                  </h3>
                  <p>
                    Pixie’s founding engineers share how Pixie works
                    under the hood
                  </p>
                </div>
                <div className='col-6' />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.setlistSection}>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <img src={calendar} alt='' />
                <h2>Pixie Day’s Setlist</h2>
                <p>
                  Learn from peers and pioneers by attending interactive
                  talks, demos and workshops.
                </p>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h6>Keynote</h6>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>TIME SLOT (PST)</th>
                      <th>TALK</th>
                      <th>SPEAKER</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className='no-wrap'>10:00 am </span>
                        - 10:25 am
                      </td>
                      <td>What Pixie is and how it helps the community</td>
                      <td>Zain Asgar, Ishan Mukherjee</td>
                    </tr>

                    <tr>
                      <td>10:30 am - 10:45 am</td>
                      <td>
                        Pixie’s place in the ecosystem
                      </td>
                      <td>Kelsey Hightower</td>
                    </tr>

                    <tr>
                      <td>10:45 am - 11:00 am</td>
                      <td>
                        Fireside Chat and Q&A
                      </td>
                      <td>Kelsey Hightower, Zain Asgar, Kartik Garg, Ishan Mukherjee</td>
                    </tr>

                    <tr>
                      <td>11:00 am - 11:15 am</td>
                      <td>
                        what happens after install?
                      </td>
                      <td>Michelle Nguyen</td>
                    </tr>
                    <tr>
                      <td>11:15 am - 11:30 am</td>
                      <td>
                        What is a PxL Script?
                      </td>
                      <td>Natalie Serrino</td>
                    </tr>
                  </tbody>
                </table>
                <h6>Technical Deep Dives</h6>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th width='50%'>TALK</th>
                      <th>SPEAKER</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> What happens after your install the px CLI?</td>
                      <td>Michelle Nguyen</td>
                    </tr>
                    <tr>
                      <td> Life of a Pixie Script</td>
                      <td>Natalie Serrino</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.footerSection}>
          <div className='container'>
            <div className='row'>
              <div className='col-6'>
                <h2> Join from Anywhere</h2>
                <p>
                  Pixie Day will be 100% online and we welcome developers
                  from all countries and timezones.
                </p>

              </div>
              <div className='col-6' style={{ position: 'relative' }}>
                <img src={astronaut} alt='' className={styles.astronaut} />
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className={styles.eventDateRow}>
                  <Button link='https://hopin.to/events/pixie-demo-day'>
                    REGISTER NOW
                  </Button>
                  <div className={styles.addToCalendar}><AddToCalendar /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default PixiedayPage;
