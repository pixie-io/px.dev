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

import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

const Illustration = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { sourceInstanceName: { eq: "illustrations" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1291, quality: 70) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const {
        filename,
        alt,
        loading,
        style,
        className,
      } = props;
      const image = data.images.edges.find((n) => n.node.relativePath.endsWith(filename));
      if (!image) {
        // eslint-disable-next-line no-console
        console.error('no image found');
        return null;
      }

      const { fluid } = image.node.childImageSharp;
      return (
        <Img
          alt={alt}
          loading={loading || 'lazy'}
          fluid={fluid}
          fadeIn={false}
          style={style}
          className={className}
        />
      );
    }}
  />
);
export default Illustration;
