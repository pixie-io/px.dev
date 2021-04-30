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

// Utilities that help track users between website and product.

export const trackingID = () => JSON.parse(localStorage.getItem('ajs_user_id'))
  || JSON.parse(localStorage.getItem('ajs_anonymous_id'))
  || '';

export const loginRedirect = (e) => {
  e.preventDefault();
  window.location.href = `https://work.withpixie.ai/login?tid=${trackingID()}`;
};

export const signupRedirect = (e) => {
  e.preventDefault();
  window.location.href = `https://work.withpixie.ai/signup?tid=${trackingID()}`;
};

export const docsRedirect = (e) => {
  e.preventDefault();
  window.location.href = `https://work.withpixie.ai/docs?tid=${trackingID()}`;
};
