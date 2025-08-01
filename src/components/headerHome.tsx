import hamburguer from "../assets/hamburguer.png";
import carrinho from "../assets/carrinho.png";

interface HeaderProps {
  setMenuAberto: (aberto: boolean) => void
  menuAberto: boolean
}

export default function HeaderHome(props: HeaderProps) {
  return (
    <header className="flex flex-row justify justify-between items-center w-screen h-[71px] px-8 rounded-b-2xl bg-secondary">
      <button onClick={() => props.setMenuAberto(!props.menuAberto)}>
        <img src={hamburguer} className="h-6 w-6"/>
      </button>

        <img src={carrinho} className="h-6 w-6"/>
    </header>
    );
}