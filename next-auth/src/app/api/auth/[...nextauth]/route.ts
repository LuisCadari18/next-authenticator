import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    pages:{
        signIn:"/"
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                email: {label: 'email', type: 'email', placeholder:'Insira E-mail'},
                password: {label: 'Password', type:'password'},
            },
            async authorize(credentials, req){
               if(!credentials){
                return null;
               }
               if(credentials.email === "teste@gmail.com" && credentials.password === "123"){
                return{
                    name: "Luís",
                    email: "teste@gmail",

                }
               }
               return null
            }
        })
    ]
})