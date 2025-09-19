import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: React.ComponentType<React.ComponentProps<'png'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
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

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
