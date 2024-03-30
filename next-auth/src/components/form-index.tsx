'use client'
import Image from "next/image"
import {signIn} from "next-auth/react"

export default function Form(){
    async function login(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = {
            email: formData.get('email'),
            senha: formData.get('senha')
        }
        signIn('credentials', {
            ...data,
            callbackUrl: '/dashboard',
        });
    }
    return(
        <form action="" onSubmit={login} method="POST">
    <input name="email" type="email" placeholder="Insira seu e-mail" /> <br />
    <input name="senha" type="password" placeholder="Insira sua Senha" /><br />
    <Image className="login-image" src={'/index-image.png'} width={300} height={300} alt="index-image"></Image>
    <button type="submit">Login</button>
    </form>
    )
    
}