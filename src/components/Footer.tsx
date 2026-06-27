export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black py-6 px-4 text-center">
      <p className="text-gray-500 text-sm">
        Copyright &copy; Fernando Silva {year}
      </p>
    </footer>
  )
}
