export default function PasswordRecoveryMail() {
  return (
    <section className="py-20 flex items-center justify-center">
      <div className="flex  flex-col items-center w-full px-4 sm:px-6 max-w-lg">
        <a
          href="#"
          className="flex items-center gap-2 mb-6 text-4xl font-semibold text-white font-tinos"
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
            className="text-primary-red"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
          GUNS GALORE
        </a>

        <div className="w-full bg-black border border-gray-800 rounded-lg shadow py-12 px-12 space-y-10 text-white">
          <h1 className="text-xl font-bold ">
            Clique no botão abaixo para recuperar seu email.
          </h1>

          <a
            href="#"
            className="block w-1/2 mx-auto text-center  bg-primary-red hover:bg-primary-red/90 font-medium rounded-sm text-sm px-5 py-2.5"
          >
            Recuperar Senha
          </a>

          <p className="text-sm ">
            Caso não tenha solicitado uma recuperação de senha, ignore esse
            email.
          </p>

          <p className="font-medium">
            Atenciosamente, <br />
            equipe Gun's Galore
          </p>
        </div>
      </div>
    </section>
  );
}
