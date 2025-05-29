"use client";

import { useClienteStore } from "@/context/ClienteContext";
import { toast } from "sonner"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


type Inputs = {
    email: string
    senha: string
    manter: boolean
}

export default function Login() {
    const { register, handleSubmit } = useForm<Inputs>()    
    const { logaCliente } = useClienteStore()

    const router = useRouter()

    async function verificaLogin(data: Inputs) {
        // alert(`${data.email} ${data.senha} ${data.manter}`)
        const response = await 
          fetch(`${process.env.NEXT_PUBLIC_URL_API}/login`, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify({ email: data.email, senha: data.senha })
          })
        
        // console.log(response)
        if (response.status == 200) {
            // toast.success("Ok!")            
            const dados = await response.json()

            // "coloca" os dados do cliente no contexto
            logaCliente(dados)
            
            // se o cliente indicou que quer se manter conectado
            // salvamos os dados (id) dele em localStorage
            if (data.manter) {
                localStorage.setItem("clienteKey", dados.id)
            } else {
                // se indicou que não quer permanecer logado e tem
                // uma chave (anteriormente) salva, remove-a
                if (localStorage.getItem("clienteKey")) {
                    localStorage.removeItem("clienteKey")
                }
            }

            // carrega a página principal, após login do cliente
            router.push("/")
        } else {
            toast.error("Erro... Login ou senha incorretos")
        }
    }


  return (
    <section className=" py-20 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full px-2 sm:px-6 mx-auto h-fit lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-4xl gap-2 font-semibold text-white font-tinos"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-target-icon lucide-target text-primary-red"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
          <span className="self-center  font-semibold whitespace-nowrap text-white font-tinos">
            GUNS GALORE
          </span>
        </a>
        <div className="w-full bg-black border border-gray-800 rounded-lg shadow my-5 py-20 sm:max-w-md md:max-w-lg xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
              Entrar na sua conta
            </h1>
            <form className="space-y-7" action="#" onSubmit={handleSubmit(verificaLogin)}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                  {...register("email")}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm block w-full p-2.5"
                  required
                  {...register("senha")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                      {...register("manter")} 
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-white">
                      Lembrar de mim
                    </label>
                  </div>
                </div>
                <a
                  href="/esqueci-a-senha"
                  className="text-sm font-medium text-primary-red hover:underline"
                >
                  Esqueceu a senha?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-red hover:bg-primary-red/90 font-medium rounded-sm text-sm px-5 py-2.5 text-center"
              >
                Entrar
              </button>
              <p className="text-sm font-light text-white text-center">
                Não tem uma conta?{" "}
                <a
                  href="/cadastro"
                  className="font-medium text-primary-red hover:underline"
                >
                  Cadastre-se
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
