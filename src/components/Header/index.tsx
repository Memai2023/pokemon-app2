import Image from "next/image";
import PokeLogo from "../../../public/pokemon.svg";

const Header = () => {
    return (
        <header className="layout__header">
            <div className="layout__header-content">
                <div className="layout__header-content-logo">
                <Image
                    src={PokeLogo}
                    alt="Pokemon Logo"
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                </div>
            </div>
        </header>
    );
}

export default Header