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
import * as styles from './inline-dropdown.module.scss';

const InlineDropdown = ({ children, title, noBorder = false }) => {
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
    <div className={`${styles.main} ${isDropOpen ? styles.open : ''} ${noBorder ? styles.noBorder : ''}`} ref={ref}>
      <div
        className={styles.trigger}
        onClick={() => setIsDropOpen(true)}
        onTouchStart={() => setIsDropOpen(true)}
      >
        {title}
      </div>

      {isDropOpen && (
        <div className={styles.dropdown}>
          {children}
        </div>
      )}
    </div>
  );
};

export default InlineDropdown;
