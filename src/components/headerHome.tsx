import hamburguer from "../assets/hamburguer.png";
import carrinho from "../assets/carrinho.png";

export default function HeaderHome() {
  return (
    <header className="flex flex-row justify justify-between items-center w-screen h-[71px] px-8 rounded-b-2xl bg-secondary">
        <img src={hamburguer} className="h-6 w-6"/>
        <img src={carrinho} className="h-6 w-6"/>
    </header>
    );
}