import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NavigationBar } from 'components/NavigationBar';
import { AppProviders } from 'providers';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <NavigationBar>
        <Component {...pageProps} />
      </NavigationBar>
    </AppProviders>
  );
}

export default MyApp;
