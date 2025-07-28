import { useNavigate } from "react-router-dom";

export default function Botao({label}: {label: string}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <button 
    onClick={handleClick}
    className="flex justify-center items-center h-10 w-[188px] rounded-2xl bg-secondary font-montserrat text-[14px] text-primary">{label}</button>
    );
}