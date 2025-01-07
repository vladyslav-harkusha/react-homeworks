import { FC } from "react";
import { CharacterComponent } from "../character-component/CharacterComponent.tsx";
import { simpsons } from "../../data/simpsonsArray.ts";

export const FamilyComponent: FC = () => {
    return (
        <ul className='flex justify-around mt-10'>
            {simpsons.map((simpson, i) => (
                <CharacterComponent key={i} simpson={simpson}>
                    {simpson.info}
                </CharacterComponent>
            ))}
        </ul>
    );
};