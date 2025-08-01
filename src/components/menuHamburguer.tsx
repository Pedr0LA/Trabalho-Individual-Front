import { useNavigate } from "react-router-dom";
import visitante from "../assets/visitante.svg";
import hamburguer from "../assets/hamburguer.png"

import OpcaoHamburguer from "./opcaoHamburguer";

interface HamburguerProps {
  setMenuAberto: (aberto: boolean) => void
  menuAberto: boolean
}

export default function MenuHamburguer(props: HamburguerProps) {
    const navigate = useNavigate()

    const handleClick = () =>{
        //Usei esse replace para uma tentativa de impedir que volte à home sem logar,
        //mas não funciona como o esperado
        navigate("/login", {replace: true})
    }

  return (
    <div className={`flex flex-col fixed top-0 left-0 w-55 h-full 
        bg-white shadow-lg z-50 transform transition-transform duration-300
        ${props.menuAberto ? 'translate-x-0' : '-translate-x-full'}`}>
        <header className="flex justify-between w-full h-21 items-center p-3 bg-secondary">
            <div className="flex flex-grow flex-row items-center gap-[14px]">
                <img src = {visitante} className="px-3"/>
                <span className="font-montserrat size-[20px] font-[500] text-[#FFFFFF]">Usuário</span> 
            </div>

            <button onClick={() => props.setMenuAberto(!props.menuAberto)}>
                <img src={hamburguer} alt=""/>
            </button>
        </header>

        <div className="flex flex-col justify-between flex-grow p-5"> 
            <div className="flex flex-col gap-5">
                <OpcaoHamburguer label="Editar dados"/>
                <hr className="mb-2 border-[#B9B9B9]" />
                <OpcaoHamburguer label="Meus pedidos"/>
                <hr className="mb-2 border-[#B9B9B9]" />
                <OpcaoHamburguer label="Meus produtos"/>
                <hr className="mb-2 border-[#B9B9B9]" />
                <OpcaoHamburguer label="Meu carrinho"/>
            </div>
        
            <div className="flex">
                <button onClick={handleClick} className="cursor-pointer">
                    <OpcaoHamburguer label="Sair" margem="mx-[10px]"/>
                </button>
            </div>
        </div>
    </div>
    );
}