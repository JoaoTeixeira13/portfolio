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
