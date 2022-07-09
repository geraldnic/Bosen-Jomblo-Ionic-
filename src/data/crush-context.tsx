import React from "react";
export interface Crush {
    id: string,
    name: string,
    photo: string,
    description: string,
    gender: string
}

export interface Highlight {
    id: string,
    name: string,
    photo: string,
    description: string,
    gender: string
}

export interface Target {
    id: string,
    name: string,
    photo: string,
    description: string,
    gender: string
}

interface Context {
    crushes: Crush[];
    targets: Target[];
    highlights: Highlight[];
    addTarget: (crushId: string) => void,
    deleteTarget: (targetId: string) => void
}

const CrushesContext = React.createContext<Context>({
    crushes: [],
    targets: [],
    highlights: [],
    addTarget: () => {},
    deleteTarget: () => {}
});

export default CrushesContext;