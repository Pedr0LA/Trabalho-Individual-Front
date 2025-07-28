import seta from "../assets/seta.png"

export default function HeaderCadastroLogin({titulo}: {titulo: string}) {
  return (
    <header className="flex flex-row justify-between items-center w-full h-[60px] px-8 border-b-1 border-[#B9B9B9]">
      <img src={seta}/>
      <label className="font-montserrat text-[24px] text-secondary">{titulo}</label>
      <div className="w-8"></div>
    </header>
    );
}