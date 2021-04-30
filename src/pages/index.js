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
import IconButton from '@material-ui/core/IconButton';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import Carousel from 'react-multi-carousel';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Button from '../components/shared/button';
import CategoryButton from '../components/category-button/category-button';
import styles from '../scss/pages/index.module.scss';
import CodeRenderer from '../components/codeRenderer.tsx';
import PoiTooltip from '../components/poi-tooltip/poi-tooltip';
import spaceGuys from '../images/homepage/space-illustration.svg';
import topSpaceStars from '../images/homepage/top-bg.png';
import bottomSpaceStars from '../images/homepage/bottom-stars.png';

import kubernetes from '../images/homepage/side-icons/kubernet.svg';
import linux from '../images/homepage/side-icons/linux.svg';
import serviceHealth from '../images/homepage/side-icons/service-health.svg';
import requestTracing from '../images/homepage/side-icons/request-tracing.svg';
import dl from '../images/homepage/side-icons/dynamic-logging.svg';
import db from '../images/homepage/side-icons/db-profiling.svg';
import k8 from '../images/homepage/side-icons/k8s-health.svg';
import canary from '../images/homepage/side-icons/canary-analysis.svg';
import videoCli from '../videos/pixie-cli-white.webm';
import videoLive from '../videos/pixie-live-white.webm';
import videoCli4 from '../videos/pixie-cli-white.mp4';
import videoLive4 from '../videos/pixie-live-white.mp4';

import pxIconCli from '../images/homepage/pixie-cli-icon.svg';
import pxIconLive from '../images/homepage/pixie-live-icon.svg';
import pxIconMeta from '../images/homepage/pixie-meta-icon.svg';
import pixieGraph from '../images/homepage/kube-environment.svg';
import cover1 from '../images/homepage/cover1.png';
import cover2 from '../images/homepage/cover2.png';
import cover3 from '../images/homepage/cover3.png';
import ss4 from '../images/homepage/ss4.png';
import ss5 from '../images/homepage/ss5.png';
import blognew from '../images/homepage/new-blog-image.png';
import blog00 from '../images/homepage/k8-blog-thumb.png';
import blog0 from '../images/homepage/blog0.png';
import blog1 from '../images/homepage/blog1.png';
import rocketMen from '../images/homepage/rocket-men.svg';

import docIcon from '../images/homepage/doc-icon.svg';

import 'react-multi-carousel/lib/styles.css';
import Illustration from '../components/illustration';
import { isInViewport } from '../components/utils';

/*
import {
  loginRedirect,
  signupRedirect,
} from '../components/shared/tracking-utils';
*/
const bashCode = 'bash -c "$(curl -fsSL https://withpixie.ai/install.sh)"';

const ButtonGroup = ({ next, previous, ...rest }) => (
  <div className={styles.carouselButtonGroup}>
    {rest.carouselState.currentSlide + rest.carouselState.slidesToShow
    < rest.carouselState.totalItems && (
      <IconButton aria-label='next' onClick={() => next()} className={styles.carouselRightButton}>
        <ChevronRight />
      </IconButton>
    )}
    {rest.carouselState.currentSlide > 0 && (
      <IconButton
        aria-label='prev'
        onClick={() => previous()}
        className={styles.carouselLeftButton}
      >
        <ChevronLeft />
      </IconButton>
    )}
  </div>
);

const Article = ({
  title, author, link, category, image,
}) => (
  <div className={styles.articleContainer}>
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <img src={image} alt={title} />
      <div className={styles.articleContainerBody}>
        <h5>{title}</h5>

      </div>
      <div className={styles.articleContainerFooter}>
        <div className={styles.author}>{author}</div>
        <div className={styles.category}>{category}</div>
      </div>
    </a>
  </div>
);

const Homepage = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 9000,
        min: 1000,
      },
      items: 3,
    },
    med: {
      breakpoint: {
        max: 1300,
        min: 800,
      },
      items: 2,
    },
    mobile: {
      breakpoint: {
        max: 800,
        min: 0,
      },
      items: 1,
    },
  };
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
        <div className={styles.starField}>
          <img
            src={topSpaceStars}
            alt='star field'
            className={styles.starsBackground}
          />
        </div>
        <section className={styles.heroSection}>
          <div className='container'>
            <div className={styles.overtext}>OPEN SOURCE PIXIE COMING SOON!</div>
            <h1>
              Instantly troubleshoot your
              {' '}
              <br />
              applications on Kubernetes
            </h1>
            <p className={styles.subtitle}>
              No instrumentation. Debug with scripts. All inside Kubernetes
            </p>
            <div className={styles.codeRenderer}>
              <CodeRenderer
                code={bashCode}
                title='Pixie Community is Free Forever. Run this to install.'
                language='bash'
                footerText={(
                  <>
                    Want more flexible install options?
                    {' '}
                    <a
                      href='https://docs.pixielabs.ai/installing-pixie/quick-start/'
                      className='underline'
                    >
                      see docs
                    </a>
                    .
                  </>
                )}
              />
            </div>
          </div>
        </section>
        <section className={styles.screenshotsSection}>

          <div className='container'>
            <div className='row '>
              <div className='col-12 large'>
                <PoiTooltip top={55} left={80}>
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

        <section className={styles.carousel}>
          <div className='container'>
            <img src={docIcon} alt='' className={styles.sectionIcon} />
            <h5 className={styles.carouselTitle}>
              Checkout our content to learn more about Pixie
            </h5>
            <Carousel
              responsive={responsive}
              className='row'
              renderButtonGroupOutside
              arrows={false}
              customButtonGroup={<ButtonGroup />}
              containerClass={styles.carouselContainer}
              itemClass='col-4'
              ssr
            >
              <Article
                title='Accelerating the Pixie community with New Relic'
                author='Zain Asgar, Ishan Mukherjee'
                link='https://blog.pixielabs.ai/pixie-new-relic/'
                category='BLOG'
                image={blognew}
              />
              <Article
                title='Building Kubernetes Native SaaS applications...'
                author='Michelle Nguyen'
                link='https://blog.pixielabs.ai/blog/hybrid-architecture/hybrid-architecture/'
                category='BLOG'
                image={blog00}
              />
              <Article
                title='Announcing Pixie’s Public Beta Launch and Series A'
                author='Zain Asgar, Ishan Mukherjee'
                link='https://blog.pixielabs.ai/blog/public-beta-launch/beta-launch/'
                category='BLOG'
                image={blog0}
              />
              <Article
                title='Part 1: Debugging Go in prod using eBPF'
                author='Zain Asgar'
                link='https://blog.pixielabs.ai/blog/ebpf-function-tracing/post/'
                category='BLOG'
                image={blog1}
              />
              <Article
                title='How to Install Pixie in 60 seconds'
                author='Zain Asgar'
                link='https://www.youtube.com/watch?v=5oY_ova5GrA'
                category='YOUTUBE VIDEO'
                image={cover1}
              />
              <Article
                title='Get Started with Dynamic Structured Logging in Go'
                author='Zain Asgar'
                link='https://docs.pixielabs.ai/tutorials/simple-go-tracing/'
                category='TUTORIAL'
                image={cover2}
              />
              <Article
                title='What is Pixie?'
                author='Ishan Mukherjee'
                link='https://docs.pixielabs.ai/about-pixie/how-pixie-works/'
                category='DOCS'
                image={cover3}
              />
              <Article
                title='Using the CLI to run Pxl scripts'
                author='Zain Asgar'
                link='https://docs.pixielabs.ai/pxl/using-cli/'
                category='DOCS'
                image={ss4}
              />
              <Article
                title='How to contribute community scripts'
                author='Zain Asgar'
                link='https://github.com/pixie-labs/pixie/tree/main/pxl_scripts'
                category='GITHUB'
                image={ss5}
              />
            </Carousel>
          </div>
        </section>

        <section className={styles.featuresSection}>

          <div className='container'>

            <h2>
              Pixie’s three simple ideas
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
                  href='https://docs.pixielabs.ai/about-pixie/how-pixie-works/'
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
                  href='https://docs.pixielabs.ai/about-pixie/how-pixie-works/'
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
                    href='https://docs.pixielabs.ai/about-pixie/how-pixie-works/'
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
            className={styles.rotatedOrnament}
            style={{
              width: '297px',
              height: '46px',
              bottom: '-20px',
              right: '10px',
            }}
          />
        </section>
        <section className={styles.usePixieForSection}>
          <div
            className={styles.rotatedOrnament}
            style={{
              width: '297px',
              height: '46px',
              top: '-27px',
              right: '10px',
            }}
          />

          <div
            className={styles.rotatedOrnament}
            style={{
              width: '427px',
              height: '137px',
              right: '-100px',
              bottom: '120px',
            }}
          />
          <div className='container'>
            <div className='row'>
              <div className='col-1' />
              <div className='col-5'>
                <h3>
                  <div className={styles.titleSegment} />
                  Use Pixie For
                </h3>
                <p>
                  Offering a rich and accessible experience to developers is fundamental to us. With
                  Pixie Community.
                </p>
                <p>
                  You’ll Need:
                </p>
                <div className={styles.softwareVersions}>
                  <a
                    href='https://docs.pixielabs.ai/installing-pixie/requirements/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={kubernetes} loading='lazy' alt='kubernetes' />
                    v1.12+
                  </a>

                  <a
                    href='https://docs.pixielabs.ai/installing-pixie/requirements/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={linux} alt='Linux logo' />
                    v4.14+
                  </a>
                </div>
              </div>
              <div className='col-6'>
                <ul>
                  <li>
                    <a
                      href='https://docs.pixielabs.ai/using-pixie/use-cases/service-health'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={serviceHealth} alt='Service Health' />
                      Service Health
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://docs.pixielabs.ai/using-pixie/use-cases/code-tracing/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={dl} alt='Dynamic Logging' />
                      Golang Logging
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://docs.pixielabs.ai/using-pixie/use-cases/request-tracing'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={requestTracing} alt='Request Tracing' />
                      Request Tracing
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://docs.pixielabs.ai/using-pixie/use-cases/db-health'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={db} alt='DB Query Profiling' />
                      DB Query Profiling
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://docs.pixielabs.ai/using-pixie/use-cases/infra-health'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={k8} alt='K8s Infra Health' />
                      K8s Infra Health
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://docs.pixielabs.ai/using-pixie/use-cases/canary-analysis'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={canary} alt='Canary Analysis' />
                      Canary Analysis
                    </a>
                  </li>

                </ul>

                <a
                  href='https://docs.pixielabs.ai/using-pixie'
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
          <div
            className={styles.rotatedOrnament}
            style={{
              width: '427px',
              height: '90px',
              top: '-20px',
            }}
          />
          <div className='container'>
            <div className='row'>
              <div className='col-5'>
                <h2>
                  Get Started in any
                  Kubernetes Environment
                </h2>
              </div>
              <div className='col-7'>
                <div className={styles.codeRenderer}>
                  <CodeRenderer
                    white
                    code={bashCode}
                    title='Pixie Community is Free Forever. Run this to install.'
                    language='bash'
                    footerText={(
                      <>
                        Want more flexible install options?
                        {' '}
                        <a
                          href='https://docs.pixielabs.ai/installing-pixie/quick-start/'
                          className='underline'
                        >
                          see docs
                        </a>
                        .
                      </>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <p className={styles.subtitle}>Check out these install guides</p>
          <div className={styles.environmentsButtons}>
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
              SEE MORE GUIDES
            </Button>
          </a>
        </section>

        <section className={styles.openSourceSection}>
          <div className='container'>
            <div className='row'>
              <div className='col-1' />
              <div className='col-5'>
                <h3>
                  <div className={styles.titleSegment} />
                  Pixie will soon be Open Source
                </h3>
                <p>
                  Offering a magical experience to all developers is fundamental to our mission. We
                  plan to contributed Pixie Core (open source) to the CNCF soon to accelerate this
                  mission.
                </p>
                <a
                  href='https://blog.pixielabs.ai/pixie-new-relic'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className={styles.blackButton}>
                    LEARN MORE
                  </Button>
                </a>
              </div>
              <div className='col-6'>
                <img src={rocketMen} alt='' />
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
      </div>
    </Layout>
  );
};
Homepage.propTypes = {};
export default Homepage;
