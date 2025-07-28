export default function DividerHome({label}: {label?: string}){
    return(
        <div className="h-[36px] border-b-1 border-[#B9B9B9]">
            <label className="font-montserrat text-[16px]">{label}</label>
        </div>
    )
}