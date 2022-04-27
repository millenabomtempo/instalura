/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(PageComponent, { pageWrapperProps }) {
  return function (props) {
    return (
      <WebsiteGlobalProvider>
        <WebsitePageWrapper {...pageWrapperProps}>
          <PageComponent {...props} />
        </WebsitePageWrapper>
      </WebsiteGlobalProvider>
    );
  };
}
