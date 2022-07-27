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
import * as styles from './category-button.module.scss';
import LargeIcon from '../homepage/large-icons';

const CategoryButton = ({
  label, image, href, height, svg,
}) => (
  <a href={href} className={styles.button} target='_blank' rel='noopener noreferrer'>
    {image && <LargeIcon filename={image} alt={label} style={{ height }} />}
    {svg && <img src={svg} style={{ height }} className={styles.image} />}
    <span>{label}</span>
  </a>
);
export default CategoryButton;
