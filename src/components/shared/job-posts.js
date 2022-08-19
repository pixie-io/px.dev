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

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const JobPostsContext = React.createContext({});

export const JobPostsProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getJobPosts = async () => {
    setLoading(true);
    const response = await fetch(
      'https://api.lever.co/v0/postings/pixie?mode=json',
    );
    const json = await response.json();
    setData(
      json.map((j) => ({
        id: j.id,
        title: j.text,
        location: j.categories.location,
        link: j.hostedUrl,
      })),
    );
    setLoading(false);
  };
  useEffect(() => {
    getJobPosts();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <JobPostsContext.Provider value={{ loading, list: data }}>
      <div>{children}</div>
    </JobPostsContext.Provider>
  );
};

JobPostsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
