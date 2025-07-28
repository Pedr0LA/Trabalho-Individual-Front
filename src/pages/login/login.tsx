import logo from "../../assets/logo.png"
import HeaderCadastroLogin from "../../components/headerCadastroLogin";
import InputTexto from "../../components/inputTexto";
import email from "../../assets/email.png";
import senha from "../../assets/senha.png";
import Botao from "../../components/botao";
import DividerAlt from "../../components/dividerAlt";
import IconeFacebook from "../../components/iconeFacebook";
import IconeGoogle from "../../components/iconeGoogle";

export default function Login() {
  return (
    <div className="flex flex-col">
        <HeaderCadastroLogin titulo="Entrar"/>
        <hr className="my-2 border-[#B9B9B9]" />

        <div className="flex flex-col p-[30px] gap-5">         
            <div className="flex flex-col gap-3">
                <div className="flex justify-center">
                    <img src ={logo} className="w-[330px] h-[330px]"/>
                </div>

                <div className="flex items-center gap-1">
                    <img src ={email}/> 

                    <InputTexto
                        placeHolder="Digite seu e-mail"
                        tipo="email"
                    />
                </div>

                <div className="flex items-center gap-1">
                    <img src ={senha}/>
                    <InputTexto
                        placeHolder="**********"
                        tipo="password"
                    />
                </div>
                
                <div className="flex flex-row-reverse underline">
                    <label className="font-montserrat text-[14px]">Esqueci minha senha</label>
                </div>
            </div>

            <div className="flex justify-center">
                <Botao label = "Entrar"/>
            </div>

                <div className="flex flex-col gap-5">
                    <DividerAlt/>

                    <div className="flex flex-row justify-around">
                        <IconeFacebook/>
                        <IconeGoogle/>
                    </div>
                </div>
                
                <div className="flex justify-center">
                    <label className="font-montserrat text-[14px] underline text-[#0271A0]">Não possui cadastro? Cadastre-se</label>
                </div>
        </div>
    </div>
    );
}