export type BarProps = {
    text: string;
    color: string;
}

export type WorkExperienceProps =  {
    className: string;
    workLines: string[];
}

export type Repo = {
    id: number;
    name: string;
    description: string;
    language: string;
    clone_url: string;
    homepage: string;
    updated_at: string;
}

export type ProjectProps = {
    text: string;
    className: string;
    color: string;
    repo: Repo;
}

export type ProjectLinksProps = {
    url: string;
    homepage: string;
}

export type DescriptionProps = {
    name: string;
    description: string;
    language: string;
    url: string;
    homepage: string;
}