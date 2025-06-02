import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="w-full flex justify-between items-center bg-sky-800 p-4 text-sky-100">
            <Link to="/home" >
                <h1 className="text-2xl font-bold">Farmácia da Villa</h1>
            </Link>
            <nav className="flex space-x-6">
                <Link to="/categorias">Categorias</Link>
                <Link to="/cadastrarcategoria">Cadastrar Nova Categoria</Link>
            </nav>
        </header>
    );
}