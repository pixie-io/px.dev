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

import React, { useEffect, useRef, useState } from 'react';

import * as styles from './category-drop.module.scss';
import dropIcon from '../../images/drop-arrow-down.svg';
import contactFormRecipients from '../shared/contact-form-recipients';

const DropCategory = ({ contactForms, setContactForms }) => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const ref = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === 'Escape') {
      setIsDropOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsDropOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  return (
    <label className={styles.dopInput} aria-haspopup='listbox' ref={ref}>
      <input
        type='text'
        readOnly
        placeholder={isDropOpen ? 'Category' : contactForms}
        onClick={() => setIsDropOpen(true)}
        onTouchStart={() => setIsDropOpen(true)}
      />
      <img src={dropIcon} alt='' className={isDropOpen ? styles.reverse : ''} />
      {isDropOpen && (
        <div className={styles.dropdown}>
          <ul>
            <li onClick={() => setContactForms(contactFormRecipients.SALES)}>
              {contactFormRecipients.SALES}
            </li>
            <li
              onClick={() => setContactForms(contactFormRecipients.PIXIENAUT)}
            >
              {contactFormRecipients.PIXIENAUT}
            </li>
            <li onClick={() => setContactForms(contactFormRecipients.SUPPORT)}>
              {contactFormRecipients.SUPPORT}
            </li>
          </ul>
        </div>
      )}
    </label>
  );
};

export default DropCategory;
