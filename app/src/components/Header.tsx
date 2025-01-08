interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="sticky top-0 z-10 px-6 py-4 text-white bg-gray-800 border-b shadow">
      <h1 className="text-2xl font-bold uppercase md:text-4xl">{title}</h1>
    </header>
  )
}

export default Header
