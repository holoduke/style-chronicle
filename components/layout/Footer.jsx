import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f1a] border-t border-white/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b81] to-[#ffb84d] flex items-center justify-center">
                <span className="text-white font-bold text-lg">SC</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="text-[#ff6b81]">Style</span>Chronicle
              </span>
            </Link>
            <p className="text-[#a5a5b8] text-sm max-w-md">
              A visual journey through fashion history, from the elegant Edwardian era
              to today&apos;s digital age style. Explore how clothing has reflected society&apos;s
              evolution over more than a century.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#a5a5b8] hover:text-[#ff6b81] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/eras" className="text-[#a5a5b8] hover:text-[#ff6b81] transition-colors text-sm">
                  All Eras
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#a5a5b8] hover:text-[#ff6b81] transition-colors text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Eras */}
          <div>
            <h4 className="text-white font-semibold mb-4">Popular Eras</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/era/1920s" className="text-[#a5a5b8] hover:text-[#ff6b81] transition-colors text-sm">
                  1920s - Roaring Twenties
                </Link>
              </li>
              <li>
                <Link href="/era/1960s" className="text-[#a5a5b8] hover:text-[#ff6b81] transition-colors text-sm">
                  1960s - Mod Revolution
                </Link>
              </li>
              <li>
                <Link href="/era/1980s" className="text-[#a5a5b8] hover:text-[#ff6b81] transition-colors text-sm">
                  1980s - Power & Excess
                </Link>
              </li>
              <li>
                <Link href="/era/2020s" className="text-[#a5a5b8] hover:text-[#ff6b81] transition-colors text-sm">
                  2020s - Digital Age
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9090a5] text-sm">
            &copy; {currentYear} StyleChronicle. All rights reserved.
          </p>
          <p className="text-[#9090a5] text-sm">
            Curated fashion imagery for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
