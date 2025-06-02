
import type Categoria from "../../../models/categoria/Categoria";
import { useEffect, useState } from "react";
import { buscar } from "../../../service/Service";
import { DNA } from 'react-loader-spinner'
import CardCategoria from "../cardcategoria/CardCategoria";

export default function ListaCategoria() {

    const [categoria, setCategoria] = useState<Categoria[]>([])

    async function buscarTemas() {
        try {
            await buscar('/categoria', setCategoria,)
        } catch (error: any) {
            alert("houve um erro")
        }
    }

    useEffect(() => {
        buscarTemas()
    }, [categoria.length])

    return (
        <>
        {categoria.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="bg-cyan-200 flex justify-center w-full min-h-[calc(100vh-64px)]">
                <div className="container flex flex-col my-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {categoria.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}