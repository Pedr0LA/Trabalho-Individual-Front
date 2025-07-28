import favorito from "../assets/favorito.png"

interface CardProps {
    imagem: string
    nome: string
    preco: string
}

export default function CardProdutos(props: CardProps) {
  return (
        <div className="flex flex-col items-center p-2 gap-2 w-[155px] h-[189px] shadow-md rounded-lg">
            <div className="w-[136px] h-[126px] rounded-lg overflow-hidden shadow-lg">
                <img src={props.imagem} className=" w-full h-full object-cover object-top"/>
            </div>

            <div className="flex justify-between items-center w-[136px] h-[38px]">
                <div className="flex flex-col gap-1">
                    <label className="font-montserrat text-[13px]">{props.nome}</label>

                    <label className="font-montserrat text-[15px] font-bold">{props.preco}</label>
                </div>

                <img src={favorito}/>
            </div>
        </div>
    );
}