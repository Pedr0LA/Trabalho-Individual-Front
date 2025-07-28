import Botao from "../components/botao";
import DividerAlt from "../components/dividerAlt";
import HeaderCadastroLogin from "../components/headerCadastroLogin";
import IconeFacebook from "../components/iconeFacebook";
import IconeGoogle from "../components/iconeGoogle";
import InputTexto from "../components/inputTexto";

export default function Cadastro() {
  return (
    <div className="flex flex-col">
      <HeaderCadastroLogin titulo = "Cadastrar-se"/>
      
      <div className="flex flex-col px-8 py-20 gap-[36px]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-around">
            <IconeFacebook/>
            <IconeGoogle/>
          </div>

          <DividerAlt/>
        </div>

        <div className="flex flex-col gap-2">
          <InputTexto
            titulo="Nome"
            placeHolder="Digite seu nome completo"
            tipo = "text"
          />
          <InputTexto
            titulo="CPF"
            placeHolder="Digite seu CPF"
            tipo = "text"
          />
          <InputTexto
            titulo="Telefone"
            placeHolder="Digite seu Telefone"
            tipo = "tel"
          />
          <InputTexto
            titulo="E-mail"
            placeHolder="Digite seu e-mail"
            tipo = "email"
          />
          <InputTexto
            titulo="Senha"
            placeHolder="Digite sua senha"
            tipo = "password"
          />
          <InputTexto
            titulo="Confirme sua senha"
            placeHolder="Confirme sua senha"
            tipo = "password"
          />
        </div>

        <div className="flex justify-center">
          <Botao
            label = "Cadastrar-se"
          />
        </div>
      </div>
    </div>
    );
}