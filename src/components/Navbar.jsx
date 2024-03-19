export default function Navbar() {
  return (
    <header className="text-gray-200 body-font bg-[#2d343e] shadow-md">
      <div className="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-200 mb-4 md:mb-0 relative">
          <span className="font-mono font-bold text-5xl text-blue-400">
            &lt;
          </span>
          <span className="font-mono font-bold text-5xl text-pink-500 absolute left-4 -top-2">
            &gt;
          </span>
          <span className="ml-6 text-xl font-bold cursor-pointer">
            Coding<span className="text-blue-400">Hub</span>
          </span>
        </a>
      </div>
    </header>
  );
}
