import {FeatureItem, GithubRepoItem} from '@domain';

export const FetchFeatureList = (): FeatureItem[] => {
    return [
        {
            title: 'Самохостинг',
            image: require('@site/static/img/selfhost.png').default,
            description: (
                <>
                    Статьи о самохостинге.
                    Как развернуть сервисы, зачем это делать.
                    Какие есть методы и что можно развернуть.
                </>
            ),
        },
        {
            title: 'ПО',
            image: require('@site/static/img/progs.png').default,
            description: (
                <>
                    Гайды или мысли по разработке сервисов и настройке систем гипервизоров, сети и прочего...
                </>
            ),
        },
        {
            title: 'Другое',
            image: require('@site/static/img/something.png').default,
            description: (
                <>
                    Остальные сомнительные идеи и приколы, о которых я могу написать.
                </>
            ),
        },
    ];
};

export const FetchGithubRepoList = (): GithubRepoItem[] => {
    return [
        {
            url: "https://github.com/eterline/knowledge-eterline",
            name: "knowledge-eterline",
            last_commit: "null",
            description: "added repo updates. API in process"
        }
    ];
}