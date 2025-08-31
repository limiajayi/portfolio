export type BarProps = {
    text: string;
    color: string;
}

export type WorkExperienceProps =  {
    className: string;
    workLines: string[];
}

export type ProjectLinksProps = {
    url: string;
    homepage: string | undefined;
}

export type DescriptionProps = {
    className: string;
    name: string;
    description: string;
    language: string;
    url: string;
    homepage: string | undefined;
}