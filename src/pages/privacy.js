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
import PropTypes from 'prop-types';
import rehypeReact from 'rehype-react';
import BodyClassName from 'react-body-classname';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import styles from '../scss/pages/terms-privacy.module.scss';
import iconLegal from '../images/legal-icon.png';

// eslint-disable-next-line new-cap
const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

const PrivacyPolicy = ({ data }) => {
  const { privacy, terms } = data;
  return (
    <Layout>
      <SEO
        title='Privacy Policy | Pixie'
        description='We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy.'
      />
      <BodyClassName className='black' />

      <section className={styles.termsPrivacy}>
        <div className='container'>
          <div className='row'>
            <div className={`col-12 ${styles.pageTitle}`}>
              <img src={iconLegal} className='hide-mobile hide-tablet' />
              <div className={styles.navigationItem}>
                <Link to='/terms'>{terms.frontmatter.title}</Link>
                <Link to='/privacy' className={styles.active}>
                  {privacy.frontmatter.title}
                </Link>
              </div>
              <h1>{privacy.frontmatter.title}</h1>
              <h2>{privacy.frontmatter.subtitle}</h2>
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
            <div className='col-9'>{renderAst(privacy.htmlAst)}</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
PrivacyPolicy.propTypes = {
  data: PropTypes.shape({
    privacy: PropTypes.object,
    terms: PropTypes.object,
  }).isRequired,
};
export default PrivacyPolicy;

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
