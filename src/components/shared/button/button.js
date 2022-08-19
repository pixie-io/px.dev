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
import PropTypes from 'prop-types';

import * as styles from './button.module.scss';

const Button = ({
  to, className, children, onClick, outline, link,
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`${styles.linkButton} ${className} ${outline ? styles.outline : ''}`}
      >
        {children}
      </Link>
    );
  }
  if (link) {
    return (
      <a
        type='button'
        className={`${styles.linkButton} ${className} ${outline ? styles.outline : ''}`}
        href={link}
        target='_blank'
        rel='noreferrer'
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type='button'
      className={`${styles.linkButton} ${className} ${outline ? styles.outline : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  to: '',
  link: '',
  outline: false,
  onClick: () => {
  },
};
export default Button;
