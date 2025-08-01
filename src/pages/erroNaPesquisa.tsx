import { useNavigate } from "react-router-dom"
import erro404 from "../assets/erro404.png"
import seta from "../assets/seta.png"

export default function ErroNaPesquisa() {
    const navigate = useNavigate()
  
    const handleClick = () => {
        navigate(-1)
    }
  return (
    <div className="flex flex-col h-screen justify-center items-center">
        <div className="flex flex-col items-center justify-center mt-[-50px] w-full">
            <label className="font-russoOne text-[32px]">Opsss...</label>
            <img src={erro404}/>
        </div>

        <button onClick={handleClick} className="flex absolute bottom-8 right-8 items-center justify-center h-[49px] w-[49px] rounded-full  bg-[#D9D9D9]">
            <img src={seta}/>
        </button>
    </div>
    );
}