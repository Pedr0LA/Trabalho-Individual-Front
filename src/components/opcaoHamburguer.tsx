interface OpcaoHamburguerProps{
  label: string;
  margem?: string;
}

export default function OpcaoHamburguer(props: OpcaoHamburguerProps) {
  return (
      <div className= {props.margem}>
        <span className="font-montserrat size-4 font-[500] text-secondary whitespace-nowrap" >{props.label}</span>
      </div>
    );
}