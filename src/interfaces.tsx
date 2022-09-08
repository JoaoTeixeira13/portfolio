//about

export interface About {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
}

//navigation-dots
export interface ActiveProp {
    active: string;
}

//skills

export interface ScaleVariants {
    [key: string]: {
        scale: [number, number];
        opacity: [number, number];
        transition: {
            duration: number;
            ease: string;
        };
    };
}

// work

export interface PortfolioWork {
    id: number;
    title: string;
    description: string;
    repositoryUrl: string;
    imageUrl: string;
    techStack: string;
    tag: string[];
}

export interface AnimatedCard {
    y: number;
    opacity: number;
}

//skills

export interface Skill {
    id: number;
    name: string;
    imageUrl: string;
    backgroundColor: string;
}

export interface Experience {
    id: number;
    name: string;
    company: string;
    description: string;
}
