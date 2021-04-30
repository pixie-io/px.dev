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

import PropTypes from 'prop-types';
import DropCategory from './category-drop';

const SalesForm = ({
  hidden,
  handleSubmit,
  setContactForm,
  contactForm,
  contactForms,
  setContactForms,
}) => (
  <form
    data-netlify='true'
    name='sales'
    method='post'
    onSubmit={handleSubmit}
    className={hidden ? 'hidden' : ''}
  >
    <label>
      <input
        type='text'
        name='fullName'
        placeholder='Full Name'
        value={contactForm.fullName}
        onChange={(event) => setContactForm({ ...contactForm, fullName: event.target.value })}
      />
    </label>
    <DropCategory
      contactForms={contactForms}
      setContactForms={setContactForms}
    />
    <label>
      <input
        type='text'
        name='companyName'
        value={contactForm.companyName}
        placeholder='Company Name'
        onChange={(event) => setContactForm({ ...contactForm, companyName: event.target.value })}
      />
    </label>
    <label>
      <input
        type='email'
        name='email'
        value={contactForm.email}
        placeholder='Email'
        onChange={(event) => setContactForm({ ...contactForm, email: event.target.value })}
      />
    </label>
    <label>
      <input
        type='text'
        name='jobTitle'
        value={contactForm.jobTitle}
        placeholder='Job Title'
        onChange={(event) => setContactForm({ ...contactForm, jobTitle: event.target.value })}
      />
    </label>
    <label>
      <textarea
        name='message'
        value={contactForm.message}
        placeholder='How can we help you?'
        rows='4'
        onChange={(event) => setContactForm({ ...contactForm, message: event.target.value })}
      />
    </label>
    <input type='hidden' name='form-name' value='contact' />
    <button type='submit'>Submit</button>
  </form>
);

SalesForm.propTypes = {
  hidden: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setContactForm: PropTypes.func.isRequired,
  contactForm: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    gitHubURL: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  contactForms: PropTypes.string.isRequired,
  setContactForms: PropTypes.func.isRequired,
};

export default SalesForm;
