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
import { withStyles } from '@mui/styles';

const HeaderDropdown = withStyles(() => ({
  main: {
    height: '22px',
    position: 'relative',

    '&.open': {
      height: 'auto',
    },
  },
  trigger: {
    color: '#9696A5',
    cursor: 'pointer',

    '&:after': {
      content: '"▼"',
      display: 'inline-block',
      fontSize: '7px',
      paddingLeft: '8px',
      verticalAlign: 'middle',
    },
  },
  dropdown: {
    backgroundColor: '#212324',
    borderRadius: '5px',
    padding: '26px 26px 0 26px',
    position: 'absolute',
    right: 0,
    marginTop: '25px',
    minWidth: '210px',

    '& a': {
      display: 'block',
      paddingBottom: '30px',
    },
  },
}))(({ classes, children, title }) => {
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
    <div className={`${classes.main} ${isDropOpen ? classes.open : ''}`} ref={ref}>
      <div
        className={classes.trigger}
        onClick={() => setIsDropOpen(true)}
        onTouchStart={() => setIsDropOpen(true)}
      >
        {title}
      </div>

      {isDropOpen && (
        <div className={classes.dropdown}>
          {children}
        </div>
      )}
    </div>
  );
});

export default HeaderDropdown;
