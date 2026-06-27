const base = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('${base}img/bg-webdev.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest mb-6">
          Bem-vindo
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
          Aqui você conhecerá um pouco sobre mim e meus projetos.
          Desenvolvedor backend Java apaixonado por tecnologia e código limpo.
        </p>
        <a
          href="#about"
          className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-3 rounded-full transition-colors uppercase tracking-wider text-sm"
        >
          Conheça mais
        </a>
      </div>
    </section>
  )
}
