"use client";

export default function EsqueciASenha() {
  async function onsubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    try {
      const response = await fetch("http://localhost:3001/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Erro ao enviar email de recuperação");

      const result = await response.json();
      alert(
        "Se este email estiver cadastrado, você receberá as instruções em breve."
      );
      console.log(result);
    } catch (err) {
      alert("Falha ao tentar recuperar a senha.");
      console.error(err);
    }
  }

  return (
    <section className="py-20 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full px-2 sm:px-6  mx-auto  lg:py-0">
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
            className="lucide lucide-target text-primary-red"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
          <span className="self-center font-semibold whitespace-nowrap text-white font-tinos">
            GUNS GALORE
          </span>
        </a>
        <div className="w-full bg-black border border-gray-800 rounded-lg shadow my-5 py-20 sm:max-w-md md:max-w-lg xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl text-center">
              Recuperar senha
            </h1>
            <form className="space-y-7" onSubmit={onsubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Email cadastrado
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-red hover:bg-primary-red/90 font-medium rounded-sm text-sm px-5 py-2.5 text-center"
              >
                Enviar instruções
              </button>

              <p className="text-sm font-light text-white text-center">
                Lembrou a senha?{" "}
                <a
                  href="/login"
                  className="font-medium text-primary-red hover:underline"
                >
                  Faça login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
