import { PokemonType } from "@/utils/types";

const PokeCard = ({name, id, image, types, attack, defence, hp}:PokemonType) => {

    const primaryType = types.length > 0 ? types[0] : 'normal';

    return (
        <div className="pokecard">
            <div className={`pokecard__header pokecard__header--${primaryType}`}>
                <h2>{name}</h2>
            </div>
            <div className="pokecard__image-container">
                <img src={image} alt={name} />
            </div>
            <div className="pokecard__details">
                <div className="pokecard__details-id">#{id}</div>
                <div className="pokecard__details-type">
                    <ul>
                    {types.map((type) => (
                        <li key={type} className={`pokecard__details-type--${type.toLowerCase()}`}>
                            {type}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="pokecard__details-stats">
                    <span className="icon">⚔️</span> {attack}
                    <span className="icon">🛡️</span> {defence}
                    <span className="icon">❤️</span> {hp}
                </div>
            </div>
        </div>
    );
}

export default PokeCard