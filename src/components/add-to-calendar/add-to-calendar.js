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

import CalendarIcon from '../../images/homepage/calendar-icon.inline.svg';
import InlineDropdown from '../inline-dropdown/inline-dropdown';

const zoomLink = encodeURI('https://us02web.zoom.us/j/6604264204');
// eslint-disable-next-line camelcase
const outlook_com = `https://outlook.live.com/calendar/0/deeplink/compose?body=Zoom%20link%3A%20${zoomLink}&location=${zoomLink}&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=20201008T170000&subject=Pixie%20Community%20Day`;
const outlook = `https://outlook.office.com/calendar/0/deeplink/compose?body=Zoom%20link%3A%20${zoomLink}&location=${zoomLink}&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=20201008T170000&subject=Pixie%20Community%20Day`;
const yahoo = `https://calendar.yahoo.com/?desc=Zoom%20link%3A%20${zoomLink}&et=20201008T180000Z&in_loc=${zoomLink}&st=20201008T170000Z&title=Pixie%20Community%20Day&v=60`;
const google = 'https://calendar.google.com/event?action=TEMPLATE&tmeid=M2hub2UzaWwyM2xobjZuczFiNTc3cmtoZWMgcGl4aWVsYWJzLmFpXzFvODd2anQ3OG1yNnFhbThnYTNwaHYxZGU0QGc&tmsrc=pixielabs.ai_1o87vjt78mr6qam8ga3phv1de4%40group.calendar.google.com';
const apple = '/Pixie_Community_Day.ics';
const AddToCalendar = ({ noBorder = false }) => (
  <InlineDropdown
    noBorder={noBorder}
    title={(
      <>
        {' '}
        <CalendarIcon />
        {' '}
        ADD TO MY CALENDAR
      </>
)}
  >
    <a href={google} target='_blank' rel='noreferrer'>Google</a>
    <a href={apple} target='_blank' rel='noreferrer'>Apple Calendar</a>
    <a href={outlook} target='_blank' rel='noreferrer'>Outlook</a>
    {/* eslint-disable-next-line camelcase */}
    <a href={outlook_com} target='_blank' rel='noreferrer'>Outlook.com</a>
    <a href={yahoo} target='_blank' rel='noreferrer'>Yahoo</a>
  </InlineDropdown>

);

export default AddToCalendar;
