import { Resistance } from "../enum";

export const Pipes = {
    resistances: (resistance: string): string => {
        const resistanceEnum = Resistance[resistance as keyof typeof Resistance];
        
        return resistanceEnum
                ? resistanceEnum
                : 'Inconnue' + resistance;
    }
};
