// /*----------------------------------------------------------------------------------------------\
// |  _____      _   __ _             _ _         ____   ___ ____  _    ______   ___ ____  _  _    |
// | /__   \__ _(_) / _\ |_ _   _  __| (_) ___   |___ \ / _ \___ \/ |  / /___ \ / _ \___ \| || |   |
// |   / /\/ _` | | \ \| __| | | |/ _` | |/ _ \    __) | | | |__) | | / /  __) | | | |__) | || |_  |
// |  / / | (_| | | _\ \ |_| |_| | (_| | | (_) |  / __/| |_| / __/| |/ /  / __/| |_| / __/|__   _| |
// |  \/   \__,_|_| \__/\__|\__,_|\__,_|_|\___/  |_____|\___/_____|_/_/  |_____|\___/_____|  |_|   |
// |                                                                                               |
// \----------------------------------------------------------------------------------------------*/
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <iframe src="/map" width={"100%"} height={"361px"}/>
      </main>
    </Layout>
  );
}
