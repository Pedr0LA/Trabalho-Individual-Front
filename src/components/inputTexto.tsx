interface InputProps {
    titulo?: string;
    placeHolder: string;
    tipo: string;
}

const InputTexto = (props: InputProps) => {
    return (
        <div className="flex flex-col w-full gap-2">
            <label className="font-montserrat text-[16px]">{props.titulo}</label>

            <input type={props.tipo} placeholder={props.placeHolder} className="w-full border-b border-[#B9B9B9] focus:outline-none focus:border-purple-500 text-gray-900 placeholder-gray-400"/>
        </div>
    )
}

export default InputTexto