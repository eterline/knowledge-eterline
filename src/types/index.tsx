import type {ReactNode} from "react";

export type FeatureItem = {
    title: string;
    image: React.ComponentType<React.ComponentProps<'png'>>;
    description: ReactNode;
};

export type GithubRepoItem = {
    url: string;
    name: string;
    last_commit: string;
    description: string;
}