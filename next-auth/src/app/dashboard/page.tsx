import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Page(){
    const session = await getServerSession()
    if(!session){
        redirect('/')
    }
    return(
        <div className="dashboard">
            <h1>Olá {session?.user?.name}</h1>
        </div>
    )
}