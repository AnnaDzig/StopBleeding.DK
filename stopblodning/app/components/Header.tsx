const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <a href="/" className="text-xl font-bold">
          STOP BLØDNING DANMARK
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-700 hover:text-red-500">
                Hjem
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-700 hover:text-red-500">
                Om os
              </a>
            </li>
            <li>
              <a href="/courses" className="text-gray-700 hover:text-red-500">
                Kursus og Produkt
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-700 hover:text-red-500">
                Kontakter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
