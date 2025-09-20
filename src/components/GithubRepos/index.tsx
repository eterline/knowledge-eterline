import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {GithubRepoItem} from "@domain";
import {FetchGithubRepoList} from "../../services/MyApiUsage";

function Repo({ name, last_commit, url, description }: GithubRepoItem) {
    return (
        <>
            <div className={styles.repo_card}>
                <div className={styles.repo_card_head}>
                    {true && <img src={""} alt={name} />}
                    <div className={styles.repo_card_head_text}>
                        <h3>{name}</h3>
                        <p className={styles.commit}>commit ID: {last_commit}</p>
                    </div>
                </div>

                <div className={styles.repo_card_text}>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}

export default function HomepageGithubRepos(): ReactNode {

    const list = FetchGithubRepoList();

    return (
        <section className={styles.repos}>
            <div className={styles.container}>
                {list.map((props, idx) => (
                    <Repo key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}