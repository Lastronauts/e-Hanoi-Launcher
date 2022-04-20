import type { AppProps } from 'next/app';
import { AuthProvider } from '../components/common/AuthProvider';
import MouseStalker from '../components/common/mouseStalker';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MouseStalker />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}
