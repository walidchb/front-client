import Image from "next/image";
import Link from "next/link";

export default function Logo({ textColor }) {
  return (
    <Link
      href="/"
      className="flex items-center -m-1.5 p-1.5 space-x-2 sm:space-x-3">
      <span className="sr-only">TemTem One</span>
      <Image
        className="h-7 w-7 sm:h-8 sm:w-8"
        src="/images/logo.png"
        alt=""
        width={32}
        height={32}
      />
      <span className={`font-bold text-lg sm:text-xl text-${textColor}`}>
        Ecommerce
      </span>
    </Link>
  );
}
