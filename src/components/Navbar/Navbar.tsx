
export default function Navbar() {
    return (
        <header className="w-full flex justify-between items-center bg-sky-800 p-4 text-sky-100">
            <h1 className="text-2xl font-bold">Farmácia da Villa</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        Categorias
                    </li>
                    <li>
                        Sobre
                    </li>
                </ul>
            </nav>
        </header>
    );
}