import '../styles/globals.css';

import MainLayout from '../src/components/layout/main-layout.component';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
