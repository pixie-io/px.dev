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

import React, { useState } from 'react';
import Cookies from 'js-cookie';
import * as styles from './cookies-banner.module.scss';

const CookiesBanner = () => {
  const isBrowser = typeof window !== 'undefined';
  const [consent, setConsent] = useState(isBrowser ? Cookies.get('consent') : null);
  const close = () => {
    Cookies.set('consent', true);
    setConsent(true);
  };
  return !consent ? (
    <div className={styles.banner}>
      <div className={styles.innerText}>
        This site uses cookies to provide you with a better user experience.
        By using this site you consent to our Privacy Policy.
      </div>
      <button type='button' className={styles.closeButton} onClick={() => close()}>
        Close
      </button>
    </div>
  ) : '';
};
export default CookiesBanner;
