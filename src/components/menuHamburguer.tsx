import visitante from "../assets/visitante.svg"

import OpcaoHamburguer from "./opcaoHamburguer";

export default function MenuHamburguer() {
  return (
    <div className="flex flex-col w-full h-screen bg-background">
        <header className="flex flex-row items-center gap-[14px] w-full h-21 bg-secondary">
            <img src = {visitante} className="px-[18px]"/>
            <span className="font-montserrat size-[20px] font-[500] text-[#FFFFFF]">Usuário</span> 
        </header>
        <div className="flex flex-col justify-between flex-grow p-5">
            <div className="flex flex-col flex-grow gap-5">
                <OpcaoHamburguer label="Editar dados"/>
                <hr className="my-2 border-[#B9B9B9]" />
                <OpcaoHamburguer label="Meus pedidos"/>
                <hr className="my-2 border-[#B9B9B9]" />
                <OpcaoHamburguer label="Meus produtos"/>
                <hr className="my-2 border-[#B9B9B9]" />
                <OpcaoHamburguer label="Meu carrinho"/>
            </div>

            <OpcaoHamburguer label="Sair" margem="mx-[10px]"/>
        </div>
    </div>
    );
}