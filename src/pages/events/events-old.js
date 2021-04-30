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
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import bottomSpaceStars from '../../images/homepage/bottom-stars.png';
import Button from '../../components/shared/button';
import spaceGuys from '../../images/homepage/space-illustration.svg';
import pixieDayHero from '../../images/pixie-day/pixienaut-launch.svg';
import sidePlanet from '../../images/homepage/pem-planet.svg';
import styles from '../../scss/pages/events-old.module.scss';
import CodeRenderer from '../../components/codeRenderer.tsx';
import CategoryButton from '../../components/category-button/category-button';
import AddToCalendar from '../../components/add-to-calendar/add-to-calendar';

const bashCode = 'bash -c "$(curl-fsSL https://withpixie.ai/install.sh)"';

const CounterItem = ({ value, title }) => (
  <div className={styles.counterItem}>
    <div className={styles.counter}>{value}</div>
    <div className={styles.title}>{title}</div>
  </div>
);

const EventsOldPage = () => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });

  const processTimer = () => {
    const now = new Date();
    const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    let diff = (new Date('October 1, 2020 17:00:00') - utc) / 1000;
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
        title='Pixie | Instantly Debug Applications on Kubernetes'
        description='No code changes, no manual UIs, all inside K8s.'
      />
      <div className={styles.pixieDay}>
        <section className={styles.heroSection}>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className={styles.overText}>
                  REGISTER FOR PIXIE COMMUNITY DAY
                  <span className='hide-mobile hide-tablet'> - </span>
                  <br className='hide-desktop' />
                  OCT 01, 2020
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
                <Button to='/events'>LEARN MORE</Button>
                <div className={styles.addToCalendar}>
                  <AddToCalendar noBorder />

                </div>
              </div>
            </div>
          </div>
          <img src={pixieDayHero} alt='' className={styles.pixieDayHeroImage} />
        </section>
        <section className={styles.environmentsSection}>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h2>
                  Want to follow along
                  <br className='hide-desktop' />
                  {' '}
                  and try our community beta ?
                </h2>
                <h4>Instantly debug your applications on Kubernetes</h4>
              </div>
            </div>

            <div className={styles.codeRenderer}>
              <CodeRenderer
                code={bashCode}
                title='Run this to install. No code changes needed.'
                language='bash'
              />
            </div>

            <div className='row'>
              <div className='col-12'>
                <p className={styles.subtitle}>GET STARTED IN ANY KUBERNETES ENVIRONMENT</p>
                <div className={styles.environmentsButtons}>
                  <CategoryButton
                    href='https://docs.pixielabs.ai/installing-pixie/install-guides/kind-setup/'
                    image='kind.png'
                    label='Kind'
                    height='36px'
                  />
                  <CategoryButton
                    href='https://docs.pixielabs.ai/installing-pixie/install-guides/minikube-setup'
                    image='kubernetes.png'
                    label='Minikube'
                    height='51px'
                  />
                  <CategoryButton
                    href='https://docs.pixielabs.ai/installing-pixie/install-guides/eks-setup/'
                    image='amazon-aks.png'
                    label='EKS'
                    height='50px'
                  />
                  <CategoryButton
                    href='https://docs.pixielabs.ai/installing-pixie/install-guides/gke-setup/'
                    image='google-gke.png'
                    label='GKE'
                    height='50px'
                  />
                  <CategoryButton
                    href='https://docs.pixielabs.ai/installing-pixie/install-guides/aks-setup/'
                    image='microsoft.png'
                    label='AKS'
                    height='40px'
                  />
                  <CategoryButton
                    href='https://docs.pixielabs.ai/installing-pixie/install-guides/self-managed-k8s-setup/'
                    image='self-managed.png'
                    label='Self Managed'
                    height='50px'
                  />
                </div>
                <a
                  href='https://docs.pixielabs.ai/installing-pixie/install-guides/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className={styles.button} outline>
                    INSTALL GUIDES
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div
          style={{ backgroundImage: `url(${bottomSpaceStars})` }}
          className={styles.bottomStars}
        >
          <section className={styles.communitySection}>
            <h2>
              Interested in helping shape
              <br className='hide-mobile hide-tablet' />
              {' '}
              our product & community?
            </h2>
            <Button className={styles.button} to='/community'>
              BE A PIXIENAUT
            </Button>
            <img className={styles.spaceGuys} loading='lazy' src={spaceGuys} alt='space guys' />
          </section>
          <section className={styles.careersSection}>
            <img
              className={styles.sidePlanet}
              loading='lazy'
              src={sidePlanet}
              alt='stars'
            />
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className={styles.overText}>WE’RE HIRING</div>
                  <h2>Are you a builder?</h2>
                  <div className={styles.subtitle}>
                    Check out open positions to help us build Pixie for broad
                    use by the end of 2020.
                  </div>
                  <Button className={styles.button} to='/careers'>
                    CAREERS
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};
export default EventsOldPage;
