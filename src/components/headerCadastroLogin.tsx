import { useNavigate } from "react-router-dom";
import seta from "../assets/seta.png"


export default function HeaderCadastroLogin({titulo}: {titulo: string}) {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <header className="flex flex-row justify-between items-center w-full h-[60px] px-8 border-b-1 border-[#B9B9B9]">
      <button onClick={handleClick}>
        <img src={seta}/>
      </button>

      <label className="font-montserrat text-[24px] text-secondary">{titulo}</label>

      <div className="w-8"></div>
    </header>
    );
}