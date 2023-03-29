import * as React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang='en' />
        <title>Quinze</title>
        <meta
          name='description'
          content='Quince años. Quince generaciones. Quince segundos, quince mentiras, quince metros de brazadas. Quinze es un fanzine, una propuesta literaria para unificar las sinergias surgidas en la decimoquinta generación del máster de creación literaria de Barcelona. Treinta y dos relatos breves en torno al quince, que adquieren la forma de diferentes espacios, transcursos de tiempo y dimensiones.'
        />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes='16x16'
        />

        <link
          rel='mask-icon'
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color='#ff4400'
        />
        <meta name='theme-color' content='#fff' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta
          property='og:image'
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
