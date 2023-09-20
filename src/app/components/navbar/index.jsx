import React from "react";
import Link from "next/link";
import Logo from "./components/logo";

function NavBar() {
  const navigation = [
    { name: "Diaspora", href: "/" },
    { name: "Recharge", href: "/recharge" },
    { name: "Logistique", href: "#" },
    { name: "Actualité Algérie", href: "#" },
  ];
  return (
    <div className="bg-orange-500">
      {" "}
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex cursor-pointer lg:flex-1">
          <Logo textColor="white" />
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-black">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden space-x-2 lg:ml-8 lg:flex lg:justify-end xl:ml-0 xl:flex-1">
          <h1>EN</h1>

          <h1>Account</h1>
          <h1>Panier</h1>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
