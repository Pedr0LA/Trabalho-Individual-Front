import HeaderHome from "../../components/headerHome";
import logo from "../../assets/logo.png"
import FooterHome from "../../components/footerHome";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import CardProdutos from "../../components/cardProdutos";
import produtos from "../../data/produtos"

export default function Home() {
  return (
    <div className="flex flex-col w-screen">
        <HeaderHome/>
            
        <div className="flex flex-col w-screen p-6">
            <div className="flex justify-center items-center">
                <img src={logo} className="h-[42px] w-[42px]"/>

                <label className="font-russoOne text-[24px] text-[#FF8F0E]">Bem-vindo à Elektro!</label>
            </div>
        
            <Carousel>
                <CarouselContent>
                    {produtos.slice(0, 5).map((produto, index) => (
                    <CardProdutos
                    key={index}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    preco={produto.preco}
                    />
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <Carousel>
                <CarouselContent>
                    {produtos.slice(5, 10).map((produto, index) => (
                    <CardProdutos
                    key={index}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    preco={produto.preco}
                    />
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <Carousel>
                <CarouselContent>
                    {produtos.slice(10, 15).map((produto, index) => (
                    <CardProdutos
                    key={index}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    preco={produto.preco}
                    />
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>

        <FooterHome/>
    </div>
    );
}