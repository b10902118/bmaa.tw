import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    title: "關於身心中軸覺察",
    href: "/good-points/",
    subItems: [
      { title: "練習特色", href: "/good-points/" },
      { title: "科學證據", href: "/evidence/" },
      { title: "採訪報導", href: "/news/" },
      { title: "最新消息", href: "/new/" },
    ],
  },
  { title: "課程介紹", href: "/class-information/" },
  { title: "學員心得", href: "/students-feedback/" },
  { title: "團隊成員", href: "/members/" },
  { title: "聯絡我們", href: "/contact-us/" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-[#F9F5F2]/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <div className="flex flex-col">
          <a
            href="/"
            className="text-xl lg:text-[25px] hover:text-black transition-colors leading-tight group"
          >
            臺灣身心中軸覺察發展中心
            <span className="block text-xs lg:text-[13px] text-gray-500 tracking-wider group-hover:text-black hover:text-black transition-colors">
              Taiwan Body-Mind Axial Awareness Center
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group">
              <a
                href={item.href}
                className="px-4 py-2 text-[15px] text-black hover:text-[#6B705C] flex items-center transition-colors font-medium"
              >
                {item.title}
                {item.subItems && <ChevronDown className="ml-1 w-4 h-4" />}
              </a>
              {item.subItems && (
                <div className="absolute top-full left-0 w-full bg-[#F9F5F2] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-[#6B705C] max-h-[60vh] overflow-y-auto">
                  {item.subItems.map((sub, sIdx) => (
                    <a
                      key={sIdx}
                      href={sub.href}
                      className="block px-6 py-3 text-[14px] text-black hover:bg-white hover:text-[#6B705C] border-b border-gray-100 last:border-0 transition-colors"
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#F9F5F2] border-t px-4 pb-6 absolute w-full left-0 shadow-lg max-h-[100vh] overflow-y-auto">
          {navItems.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <a
                href={item.href}
                className="block py-4 text-black font-medium hover:text-[#6B705C] transition-colors"
              >
                {item.title}
              </a>
              {item.subItems && (
                <div className="mt-[-5px] pl-4 pb-2">
                  {item.subItems.map((sub, sIdx) => (
                    <a
                      key={sIdx}
                      href={sub.href}
                      className="block py-2 text-gray-600 hover:text-[#6B705C] transition-colors"
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
