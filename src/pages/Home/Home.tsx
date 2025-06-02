export default function Home() {
    return (

        <section className=" bg-sky-300 flex justify-center">
            <div className='container grid grid-cols-2 text-shadow-sky-950'>
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-bold'>
                        Sejam Bem Vindos!
                    </h2>
                    <p className='text-xl'>
                        Gerenciamento de Produtos por Categoria
                    </p>


                </div>

                <div className="bg-sky-400 rounded-2xl flex flex-col justify-center items-center gap-4">
                    <h4 className="text-2xl font-bold">Cadastrar Nova Categoria</h4>
                    <form className="flex flex-col gap-4" action="">
                        <label>Categoria: </label>
                        <input
                            type="text"
                            placeholder="Categoria"
                            name="categoria"
                            required
                            className="border-2 border-slate-700 rounded p-2"
                        />
                        <button type="submit" className=" bg-sky-600 rounded-2xl">Cadastrar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}