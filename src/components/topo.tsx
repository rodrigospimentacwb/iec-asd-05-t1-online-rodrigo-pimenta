import Foto from "./foto";
import MenuNavegacao from "./menu-navegacao";
import Titulo from "./titulo";

export default function Topo() {
    return (
        <div className={`bg-[#2F558D]`}>
            <MenuNavegacao />
            <div className={`flex items-center p-28 gap-10 ml-20`}>
                <Foto />
                <Titulo />
            </div>
        </div>
    )
}