export type TSearchOnListProps = {
    list: {id: number, name: string}[];
    onChange: (listUpdated: {id: number, name: string}[]) => void;
};