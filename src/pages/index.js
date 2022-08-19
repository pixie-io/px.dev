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

import React, { useEffect, useRef } from 'react';
import 'react-multi-carousel/lib/styles.css';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Button from '../components/shared/button';
import CategoryButton from '../components/category-button/category-button';
import PoiTooltip from '../components/poi-tooltip/poi-tooltip';
import Illustration from '../components/illustration';
import { isInViewport } from '../components/utils';

import spaceGuys from '../images/homepage/space-illustration.svg';
import kubernetes from '../images/homepage/side-icons/kubernet.png';
import linux from '../images/homepage/side-icons/linux.png';
import serviceHealth from '../images/homepage/side-icons/service-health.svg';
import requestTracing from '../images/homepage/side-icons/request-tracing.svg';
import dl from '../images/homepage/side-icons/dynamic-logging.svg';
import db from '../images/homepage/side-icons/db-profiling.svg';
import k8 from '../images/homepage/side-icons/k8s-health.svg';
import canary from '../images/homepage/side-icons/canary-analysis.svg';

import videoCli from '../videos/pixie-cli.webm';
import videoLive from '../videos/pixie-live.webm';
import videoCli4 from '../videos/pixie-cli.mp4';
import videoLive4 from '../videos/pixie-live.mp4';

import pxIconCli from '../images/homepage/pixie-cli-icon.svg';
import pxIconLive from '../images/homepage/pixie-live-icon.svg';
import pxIconMeta from '../images/homepage/pixie-meta-icon.svg';
import pixieGraph from '../images/homepage/kube-environment.svg';

import * as styles from '../scss/pages/index.module.scss';

/*
import {
  loginRedirect,
  signupRedirect,
} from '../components/shared/tracking-utils';
*/

const Homepage = () => {
  const video1 = useRef(null);
  const video2 = useRef(null);

  const processVideosVisibility = () => {
    if (isInViewport(video1.current)) {
      video1.current.play();
    }
    if (isInViewport(video2.current)) {
      video2.current.play();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', processVideosVisibility, false);
    return () => {
      window.removeEventListener('scroll', processVideosVisibility, false);
    };
  }, []);

  return (
    <Layout transparentMenu>
      <SEO
        title='Kubernetes Monitoring, Application Debug Platform | Pixie'
        description='A simple and robust monitoring and live-debug platform
           for distributed environments, designed for developers.'
      />
      <div className={styles.home}>
        <section className={styles.heroSection}>
          <div className='container'>
            <h1>
              Open source Kubernetes
              {' '}
              <br />
              observability for developers
            </h1>
            <p className={styles.subtitle}>
              Auto-instrumented. Scriptable. Kubernetes native.
            </p>
          </div>
        </section>
        <section className={styles.screenshotsSection}>

          <div className='container'>
            <div className='row '>
              <div className='col-12 large'>
                <PoiTooltip top={45} left={30}>
                  <strong>Debug with Live</strong>
                  {' '}
                  to navigate your data space using auto-generated
                  views and debug sessions.
                </PoiTooltip>
                <PoiTooltip top={3} left={7} pulse>
                  <strong>Run scripts </strong>
                  {' '}
                  contributed by your team or the
                  Pixienaut community using the px command interface to debug as
                  code.
                </PoiTooltip>
                <PoiTooltip top={39} left={8}>
                  <strong>Use the CLI</strong>
                  {' '}
                  for health checks and charts without leaving
                  our dev workflow. Jump to the browser only when needed.
                </PoiTooltip>

                <Illustration
                  loading='eager'
                  filename='product-shot.png'
                  className={styles.productShot}
                />
              </div>

            </div>
          </div>
        </section>
        <section className={styles.featuresSection}>
          <div className='container'>
            <h2>
              <div className={`${styles.marker} hide-mobile hide-tablet`} style={{ margin: '20px auto' }} />
              <Button className={`${styles.button} block hide-desktop`} to='https://docs.px.dev/installing-pixie/install-guides/' target='_blank' rel='noreferrer'>
                GET STARTED
              </Button>
              Why use Pixie?
            </h2>
            <div className={`row ${styles.noInstrumentation} flex-row`}>
              <div className='col-1' />
              <div className='col-4 vertical-center'>
                <h3>
                  No Instrumentation
                </h3>
                <p>
                  Access metrics, events, traces and logs in seconds without
                  changing code via dynamic eBPF probes and ingestors.
                  Add logging only for custom data.
                </p>
                <a
                  href='https://docs.px.dev/about-pixie/how-pixie-works/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Read More
                </a>
              </div>
              <div className='col-7'>
                <div className={styles.headerIcon}>
                  <img src={pxIconCli} alt='' />
                  <span>PIXIE CLI</span>
                </div>
                <div className={styles.headerIcon}>
                  <img src={pxIconLive} alt='' />
                  <span>PIXIE LIVE</span>
                </div>
                <video controls={false} muted width='100%' ref={video1} playsInline>
                  <source
                    src={videoCli}
                    type='video/webm'
                  />
                  <source
                    src={videoCli4}
                    type='video/mp4'
                  />
                </video>
              </div>
            </div>
            <div className={`row ${styles.debugAsCode}`}>
              <div className='col-7'>
                <div className={styles.headerIcon}>
                  <img src={pxIconMeta} alt='' />
                  <span>PXL SCRIPTS</span>
                </div>
                <video controls={false} muted width='100%' ref={video2} playsInline>
                  <source
                    src={videoLive}
                    type='video/webm'
                  />
                  <source
                    src={videoLive4}
                    type='video/mp4'
                  />
                </video>
              </div>

              <div className='col-4 vertical-center'>
                <h3>
                  Debug with Scripts
                </h3>
                <p>
                  Run community, team or custom scripts to debug as code.
                  Publish and share your sessions as code with your team
                  and global Pixienaut community.
                </p>
                <a
                  href='https://docs.px.dev/about-pixie/how-pixie-works/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Read More
                </a>
              </div>
              <div className='col-1' />
            </div>
            <div className={styles.kubernetesNative}>
              <div className='row'>
                <div className='col-2' />
                <div className='col-8'>
                  <h3>Kubernetes Native</h3>
                  <p>
                    Pixie runs entirely inside your Kubernetes clusters without
                    storing any customer data outside. Avoid trading-off depth of
                    visibility due to the hassle and cost of trucking petabytes of
                    telemetry off-cluster.
                  </p>
                  <a
                    href='https://docs.px.dev/about-pixie/how-pixie-works/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Read More
                  </a>
                </div>
                <div className='col-2' />

              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className={styles.vizier}>
                    <img src={pixieGraph} alt='' className={styles.graph} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '297px',
              height: '46px',
              bottom: '-20px',
              right: '10px',
            }}
          />
        </section>
        <section className={styles.usePixieForSection}>
          <div className='container'>
            <div className='row'>
              <div className='col-5'>
                <h2>
                  <div className={styles.titleSegment} />
                  Use Pixie For
                </h2>

                <p className={styles.requirements}>
                  Requirements:
                </p>
                <div className={styles.softwareVersions}>
                  <a
                    href='https://docs.px.dev/installing-pixie/requirements/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={kubernetes} loading='lazy' alt='kubernetes' />
                    v1.16+
                  </a>

                  <a
                    href='https://docs.px.dev/installing-pixie/requirements/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={linux} alt='Linux logo' />
                    v4.14+
                  </a>
                </div>
              </div>
              <div className='col-7'>
                <div className={styles.environmentsButtons}>
                  <CategoryButton
                    href='https://docs.px.dev/using-pixie/use-cases/service-health'
                    svg={serviceHealth}
                    label='Service Health'
                    height='51px'
                  />
                  <CategoryButton
                    href='https://docs.px.dev/using-pixie/use-cases/code-tracing/'
                    svg={dl}
                    label='Golang Logging'
                    height='51px'
                  />
                  <CategoryButton
                    href='https://docs.px.dev/using-pixie/use-cases/request-tracing'
                    svg={requestTracing}
                    label='Request Tracing'
                    height='51px'
                  />
                  <CategoryButton
                    href='https://docs.px.dev/using-pixie/use-cases/db-health'
                    svg={db}
                    label='DB Query Profiling'
                    height='51px'
                  />
                  <CategoryButton
                    href='https://docs.px.dev/using-pixie/use-cases/infra-health'
                    svg={k8}
                    label='K8s Infra Health'
                    height='51px'
                  />
                  <CategoryButton
                    href='https://docs.px.dev/using-pixie/use-cases/canary-analysis'
                    svg={canary}
                    label='Canary Analysis'
                    height='51px'
                  />
                </div>

                <a
                  href='https://docs.px.dev/using-pixie'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className={styles.blueButton} outline>
                    SEE MORE
                  </Button>
                </a>
              </div>

            </div>

          </div>
        </section>

        <section className={styles.environmentsSection}>
          <h2>
            <div className={styles.marker} style={{ margin: '20px auto' }} />
            Pixie works with...
          </h2>
          <div className={styles.environmentsButtons}>
            <CategoryButton
              href='https://docs.px.dev/installing-pixie/install-guides/minikube-setup'
              image='kube.png'
              label='Minikube'
              height='51px'
            />
            <CategoryButton
              href='https://docs.px.dev/installing-pixie/install-guides/eks-setup/'
              image='eks.png'
              label='EKS'
              height='50px'
            />
            <CategoryButton
              href='https://docs.px.dev/installing-pixie/install-guides/gke-setup/'
              image='gke.png'
              label='GKE'
              height='50px'
            />
            <CategoryButton
              href='https://docs.px.dev/installing-pixie/install-guides/aks-setup/'
              image='aks.png'
              label='AKS'
              height='40px'
            />
            <CategoryButton
              href='https://docs.px.dev/installing-pixie/install-guides/self-managed-k8s-setup/'
              image='self-kube.png'
              label='Self Managed'
              height='50px'
            />
          </div>
        </section>
        <div
          className={styles.bottomStars}
        >
          <section className={styles.communitySection}>
            <img className={styles.spaceGuys} loading='lazy' src={spaceGuys} alt='' />
            <div className='container'>
              <div className={styles.communitySectionTitle}>
                <h2>
                  <div className={styles.titleSegment} />
                  Interested in
                  {' '}
                  <br className='hide-mobile hide-tablet' />
                  contributing to
                  {' '}
                  <br className='hide-mobile hide-tablet' />
                  {' '}
                  Pixie?
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
      </div>
    </Layout>
  );
};
Homepage.propTypes = {};
export default Homepage;
