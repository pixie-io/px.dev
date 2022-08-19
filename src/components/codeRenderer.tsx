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
import { withStyles } from '@mui/styles';
import { Box, Tooltip } from '@mui/material';
import Highlight, { defaultProps } from 'prism-react-renderer';
import copyBtn from '../images/copy-btn.svg';

const CodeRenderer = withStyles((theme) => ({
  black: {
    backgroundColor: '#212324',
  },
  white: {
    backgroundColor: '#ffffff',
    color: 'black',
  },
  code: {
    borderRadius: '5px',
    boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.0864292)',
    marginBottom: '12px',
    marginTop: '12px',
    position: 'relative',
    maxWidth: '600px',
    fontFamily: 'Roboto Mono',
    '&:hover': {
      '& img': {
        display: 'inline-flex!important' as any,
      },
    },
  },
  title: {
    borderBottom: '0.5px solid rgba(151, 151, 151, 0.3)',
    padding: '10px 70px 12px 12px',
    fontSize: '13px',
    lineHeight: '21px',
    fontFamily: 'inherit',
    textAlign: 'left',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
      padding: '7px 43px 7px 12px',
      fontSize: '9px',
    },
  },
  pre: {
    maxWidth: '100px',
  },
  codeHighlight: {
    padding: '20px 12px 20px 27px',
    marginRight: '20px',
    display: 'block',
    width: 'calc(100% - 39px)',
    overflowX: 'auto',
    fontFamily: 'Roboto Mono',
    [theme.breakpoints.down('md')]: {
      padding: '14px 22px 16px 10px',
      fontSize: '10px',
    },
    '& pre': {
      fontFamily: 'Roboto Mono',
      fontSize: '13px',
    },
  },
  footer: {
    fontSize: '13px',
    lineHeight: '21px',
    fontFamily: 'inherit',
    padding: '0 0 12px 12px',
    color: '#B2B5BB',
    textAlign: 'right',

    [theme.breakpoints.down('md')]: {

      fontSize: '9px',
    },

    '& a': {
      fontSize: 'inherit',
      color: 'inherit',
    },
  },
  copyBtn: {
    position: 'absolute',
    display: 'none',
    top: '20px',
    height: '32px',
    width: '32px',
    transform: 'translateY(-50%)',
    right: '0',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      top: '17px',
      transform: 'translateY(-50%) scale(0.5)',
    },
  },

}))(({
  classes, code, language = 'javascript', title = '', footerText = '', white = false,
}: any) => (
  <>
    <div className={`${classes.code} ${white ? classes.white : classes.black}`}>
      <div className={classes.title}>{title}</div>
      <Box className={`${classes.codeHighlight} small-scroll`}>
        <Highlight
          {...defaultProps}
          code={code.trim()}
          language={language}
        >
          {({
            className, style, tokens, getLineProps, getTokenProps,
          }: any) => (
            <pre
              className={`${className} ${classes.pre}`}
              style={{ ...style, backgroundColor: 'transparent' }}
            >
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Box>
      <Tooltip title='Copy to clipboard' aria-label='copy' placement='top'>
        <img src={copyBtn} alt='' className={classes.copyBtn} onClick={() => { navigator.clipboard.writeText(code); }} />
      </Tooltip>
    </div>
    {footerText && <div className={classes.footer}>{footerText}</div>}
  </>
));
export default CodeRenderer;
