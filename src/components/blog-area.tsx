import Noticia from "./noticia";

export default function BlogArea() {
    return (
        <div className={`ml-[350px] items-center max-w-md  `}>
            <div>
                <h1>Últimas do Blog</h1>            
            </div>
            <div className="mt-4 mb-4">
                <Noticia />
                <Noticia />
                <Noticia />
                <Noticia />                
            </div>
            <div className="text-blue-500">
                <h4>Ver tudo</h4>
            </div>
        </div>
    )
}