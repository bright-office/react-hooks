import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">
                    {siteConfig.tagline}
                </p>
                <div className="flex" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                }}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Get Started
                    </Link>

                    <Link
                        className="button button--secondary button--lg"
                        to="https://github.com/bright-office/react-hooks">
                        View on GitHub
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Easy to use React hooks">
            <HomepageHeader />
            <main>
            </main>
        </Layout>
    );
}
