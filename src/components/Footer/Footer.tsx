import {GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export default function Footer() {

    let data = new Date().getFullYear();

    return(
        <footer className="w-full flex justify-center bg-sky-800 text-sky-100">
            <div className="container flex flex-col items-center py-4">
                <p className="text-xl font-bold">Farmácio da Villa</p>
                <p className="text-xl font-bold">Vinícius Cristhian | Copyright: {`${data}`}</p>
                <p className="text-lg">Acesse minhas redes sociais</p>
                <div className="flex gap-2">
                    <a href="https://github.com/ViniCristhian" target="_blank" rel="noopener noreferrer">
                        <GithubLogoIcon size={48} weight="bold" />
                    </a>
                    <a href="https://www.linkedin.com/in/vinicristhian/" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogoIcon size={48} weight="bold" />
                    </a>
                </div>
            </div>
        </footer>
    );
}