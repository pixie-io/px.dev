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

import { graphql, Link } from 'gatsby';
import rehypeReact from 'rehype-react';
import PropTypes from 'prop-types';
import BodyClassName from 'react-body-classname';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import styles from '../scss/pages/terms-privacy.module.scss';
import iconLegal from '../images/legal-icon.png';

// eslint-disable-next-line new-cap
const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

const TermsAndConditions = ({ data }) => {
  const { privacy, terms } = data;

  return (
    <Layout>
      <SEO
        title='Terms of Use | Pixie'
        description='Legal Terms of Service Agreement for Pixie, a simple and robust monitoring and live-debug platform, designed for developers.'
      />
      <BodyClassName className='black' />

      <section className={styles.termsPrivacy}>
        <div className='container'>
          <div className='row'>
            <div className={`col-12 ${styles.pageTitle}`}>
              <img src={iconLegal} className='hide-mobile hide-tablet' />
              <div className={styles.navigationItem}>
                <Link to='/terms' className={styles.active}>
                  {terms.frontmatter.title}
                </Link>
                <Link to='/privacy'>{privacy.frontmatter.title}</Link>
              </div>
              <h1>{terms.frontmatter.title}</h1>
              <h2>{terms.frontmatter.subtitle}</h2>
            </div>
          </div>
          <div className='row'>
            <div className={`col-3 ${styles.navigation}`}>
              <div className={styles.navigationItem}>
                <Link to='/terms' activeClassName={styles.active}>
                  {terms.frontmatter.title}
                </Link>
                <Link to='/privacy' activeClassName={styles.active}>
                  {privacy.frontmatter.title}
                </Link>
              </div>
            </div>
            <div className='col-9'>{renderAst(terms.htmlAst)}</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
TermsAndConditions.propTypes = {
  data: PropTypes.shape({
    privacy: PropTypes.object,
    terms: PropTypes.object,
  }).isRequired,
};
export default TermsAndConditions;

export const pageQuery = graphql`
  query {
    privacy: markdownRemark(
      fileAbsolutePath: { regex: "/privacy-policy.md$/i" }
    ) {
      frontmatter {
        title
        subtitle
      }
      headings {
        value
        depth
      }
      id
      htmlAst
    }
    terms: markdownRemark(
      fileAbsolutePath: { regex: "/terms-and-conditions.md$/i" }
    ) {
      frontmatter {
        title
        subtitle
      }
      headings {
        value
        depth
      }
      id
      htmlAst
    }
  }
`;
