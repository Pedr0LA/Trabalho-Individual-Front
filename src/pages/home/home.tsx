import logo from "../../assets/logo.png"

import HeaderHome from "../../components/headerHome";
import FooterHome from "../../components/footerHome";

import {
  Carousel,
  CarouselContent,
} from "../../components/ui/carousel"
import CardProdutos from "../../components/cardProdutos";
import produtos from "../../data/produtos"
import DividerHome from "../../components/dividerHome";
import categorias from "../../data/categorias";
import IconeCategoria from "../../components/iconeCategoria";
import Autoplay from "embla-carousel-autoplay";
import cutscenes from "../../data/cutscene";
import CutsceneFormatada from "../../components/cutsceneFormatada";

export default function Home() {
  return (
    <div className="flex flex-col w-screen">
        <HeaderHome/>
            
        <div className="flex flex-col w-screen gap-4 p-6">
            <div className="flex justify-center items-center">
                <img src={logo} className="h-[42px] w-[42px]"/>

                <label className="font-russoOne text-[24px] text-[#FF8F0E]">Bem-vindo à Elektro!</label>
            </div>

            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                        stopOnInteraction: false
                     }),
                    ]}
                opts={{
                    watchDrag: false
                }}    
                >
                <CarouselContent>
                    {cutscenes.slice(0, 3).map((cutscene, index) => (
                        <CutsceneFormatada
                         key={index}
                        imagem={cutscene.imagem}
                        />
                        ))}
                </CarouselContent>
            </Carousel>

            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                        stopOnInteraction: false
                     }),
                    ]}
                opts={{
                    watchDrag: false
                }}    
                >
                <CarouselContent className="flex justify-center items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-secondary"></div>
                    <div className="h-3 w-3 rounded-full bg-[#DEDEDE]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#DEDEDE]"></div>
                </CarouselContent>
            </Carousel>

            <DividerHome/>
            
            <div className="flex flex-col w-full">
                <label className="font-montserrat text-[16px]">Categorias Elektro</label>

                <div className="flex justify-between py-2">
                    {categorias.slice(0, 4).map((categoria, index) => (
                        <IconeCategoria
                        key={index}
                        imagem={categoria.imagem}
                        nome={categoria.nome}
                        />
                        ))}
                </div>

                <div className="flex justify-between py-2">
                    {categorias.slice(4, 8).map((categoria, index) => (
                        <IconeCategoria
                        key={index}
                        imagem={categoria.imagem}
                        nome={categoria.nome}
                        />
                        ))}
                </div>
            </div>
        
            <DividerHome label = "Para você"/>

            <Carousel
                opts={{
                    dragFree: true,
                }
                }
            >
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
            </Carousel>
            
            <DividerHome label = "Produtos em destaque"/>

            <Carousel
                opts={{
                    dragFree: true,
                }
                }
            >
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
            </Carousel>
            
            <DividerHome label = "Mais vendidos"/>

            <Carousel
                opts={{
                    dragFree: true,
                }
                }
            >
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
            </Carousel>

        </div>

        <FooterHome/>
    </div>
    );
}