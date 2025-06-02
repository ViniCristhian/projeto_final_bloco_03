import { useState } from "react";



export default function Home() {

    const [categoria, setCategoria] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Categoria submitted:", categoria);
        setCategoria("");
    };
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

            {/* Direita: Formulário de categoria */}
            <div className="flex items-center justify-center">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center bg-cyan-100 bg-opacity-70 rounded-2xl p-10 min-w-[380px] shadow-md">
                        <label htmlFor="categoria" className="text-lg font-bold mb-2">
                            Nova Categoria
                        </label>
                        <input
                            type="text"
                            id="categoria"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            className="border border-sky-900 p-2 mb-4"
                            placeholder="Digite a categoria"
                            required
                        />
                        <button type="submit" className="bg-sky-500 text-white py-2 px-4 rounded-3xl">
                            Adicionar Categoria
                        </button>
                    </form>
            </div>
        </section>
    );
}