import { Link } from "react-router-dom"
import type Categoria from "../../../models/categoria/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

export default function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-slate-100'>
            <header className='py-2 px-6 bg-sky-800 text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl h-full'>{categoria.descricao}</p>

            <div className="flex gap-2">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-sky-400 hover:bg-sky-800 flex items-center justify-center py-2 rounded-2xl '>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center rounded-2xl'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}