export default function CutsceneFormatada({imagem}: {imagem: string}){
    return(
        <div className="flex flex-col items-center gap-2 w-[330px] h-[190px] rounded-lg min-w-full">
            <div className="w-[330px] h-[190px] rounded-lg overflow-hidden">
                <img src={imagem} className=" w-full h-full object-cover"/>
            </div>
        </div>
    )
}