import React from 'react';
import loadable from '@loadable/component';
import { Loading, ErrorBoundary } from '../../components';

const Home = loadable(() => import('./Home'), {
  fallback: <Loading />
});

export default (props: any) => (
  <ErrorBoundary>
    <Home {...props} />
  </ErrorBoundary>
);