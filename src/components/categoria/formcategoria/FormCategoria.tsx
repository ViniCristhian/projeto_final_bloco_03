import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/categoria/Categoria";
import { useEffect, useState, type ChangeEvent } from "react";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { RotatingLines } from 'react-loader-spinner';

export default function FormTema() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria)
        } catch (error: any) {
            alert("Ocorreu um erro duranto o cadastro da categoria")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/categorias")
    }

    async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categoria`, categoria, setCategoria)
                alert('a categoira foi atualizado com sucesso!')
            } catch (error: any) {
                alert('Erro ao atualizar o tema.')
            }
        } else {
            try {
                await cadastrar(`/categoria`, categoria, setCategoria)
                alert('a categoria foi cadastrado com sucesso!')
            } catch (error: any) {
                alert('Erro ao cadastrar o tema.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="bg-cyan-200 flex flex-col items-center justify-center mx-auto min-h-[calc(100vh-64px)]">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da categoria</label>
                    <input
                        type="text"
                        placeholder="Escreva sua descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button className="rounded text-slate-100 bg-sky-400 hover:bg-sky-800 w-1/2 py-2 mx-auto flex justify-center" type="submit">
                     {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
    );
}