interface IconeCategoriaProps{
    imagem: string
    nome: string
}

export default function IconeCategoria(props: IconeCategoriaProps){
    return(
        <div className="flex flex-col justify-center items-center w-[50px]">
            <div className="w-[50px] h-[50px]">
                <img src={props.imagem} className=" w-full h-full object-cover object-top rounded-full"/>
            </div>

            <label className="font-montserrat text-[14px] whitespace-nowrap overflow-visible">{props.nome}</label>
        </div>
    )
}