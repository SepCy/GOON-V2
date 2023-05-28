import * as React from 'react';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/globals.css';
import { Router } from 'next/router';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
