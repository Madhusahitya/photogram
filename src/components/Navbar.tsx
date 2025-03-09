
import { Link, useLocation } from "react-router-dom";
import { Home, PlusSquare, Search, User, Heart } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const activePath = location.pathname;

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/explore", icon: Search, label: "Explore" },
    { path: "/upload", icon: PlusSquare, label: "Upload" },
    { path: "/activity", icon: Heart, label: "Activity" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <>
      {/* Top navbar for larger screens */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <h1 className="font-semibold text-lg">Photogram</h1>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    activePath === item.path
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Bottom navbar for mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-effect border-t">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full text-xs ${
                activePath === item.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              <item.icon size={24} />
              <span className="mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
