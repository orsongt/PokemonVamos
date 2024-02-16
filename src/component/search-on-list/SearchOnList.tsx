import { useEffect, useState } from "react";
import { TSearchOnListProps } from "./SearchOnList.types";

export const SearchOnList = ({list, onChange}: TSearchOnListProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pokemonName = event.target.value;
        setInputValue(pokemonName);
    };

    useEffect(() => {
        const searchWord = inputValue;
        onChange(list.filter((pokemon: {id: number, name: string}) => pokemon.name.includes(searchWord)));
      }, [inputValue]
    );

    return (
        <div className="row mt-3 mb-4">
            <div className="col">
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Cherche pokémon par son nom..." onChange={handleInputChange} />
                <datalist id="datalistOptions">
                    { list && list.map(
                        (item: {id: number, name: string}) => (
                            <option key={item.id} value={item.name}></option>
                        )
                    )}
                </datalist>
            </div>
        </div>
    );
}
