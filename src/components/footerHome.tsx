import facebook from "../assets/facebookFooter.png";
import instagram from "../assets/instagramFooter.png";
import tiktok from "../assets/tiktokFooter.png";
import twitter from "../assets/twitterFooter.png";
import linkedin from "../assets/linkedinFooter.png";

export default function FooterHome() {
  return (
    <footer className="flex flex-col justify-center items-center gap-4 w-screen h-[160px] bg-[#FFAE50]">
        <label className="font-montserrat text-secondary text-[16px]">Siga-nos nas redes sociais!</label>

        <div className="flex gap-2">
            <img src={facebook}/>
            <img src={instagram}/>
            <img src={tiktok}/>
            <img src={twitter}/>
            <img src={linkedin}/>
        </div>
    </footer>
    );
}