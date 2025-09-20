import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import HomepageFeatures from '../components/HomepageFeatures';
import HomepageGithubRepos from "../components/GithubRepos";

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className={clsx("hero__title", styles.title_head)}>{siteConfig.title}</h1>

                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="https://www.eterline.ru"
                    >
                        Go to main site 🏠
                    </Link>
                </div>

                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro"
                    >
                        К гайдам
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Сайт личных заметок, гайдов и всякой туллзы."
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
                <h2 className="hero__title centered_header">Обновления репозиториев</h2>
                <HomepageGithubRepos />
            </main>
        </Layout>
    );
}