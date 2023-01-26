import '@/styles/globals.scss';

const DefaultLayout = ({ children }) => <>{children}</>;

const App = ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
