import { Link } from "react-router-dom"
import imagem from "../../assets/imgs/foto-farmacia.jpeg"

export default function Home() {

    return (
        <section className="grid grid-cols-2 min-h-[calc(100vh-64px)] bg-cyan-200">
            {/* Esquerda: Boas-vindas */}
            <div className="flex flex-col justify-center pl-20">
                <h1 className="text-6xl font-normal mb-10">Sejam Bem Vindos!</h1>
                <p className="text-2xl leading-tight">
                    Sistema de<br />
                    gerenciamento por<br />
                    categoria
                </p>
            </div>

            <div className="flex items-center justify-center">
                <div className="bg-sky-600 text-white py-2 px-4 rounded-3xl">
                    <div className="imagem-container flex">
                        <img src={imagem} alt="imagem animada de uma farmácia" className="rounded-2xl" />
                    </div>

                    <div className="my-4"></div>

                    <Link to="/cadastrarcategoria" className="flex items-center justify-center">
                        <div className="bg-sky-500 text-white py-2 px-4 rounded-3xl">
                            Adicionar Categoria
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}