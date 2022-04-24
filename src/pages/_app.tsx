import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from '../components/context/AuthProvider';
import MouseStalker from '../components/common/mouseStalker';
import graphqlClient from '../graphql';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MouseStalker />
      <AuthProvider>
        <ApolloProvider client={graphqlClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </AuthProvider>
    </div>
  );
}
