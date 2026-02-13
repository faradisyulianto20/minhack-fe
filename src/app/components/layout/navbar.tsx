import Image from "next/image";

import Link from "next/link";

const menu = [
    { iconActive: "/beranda.svg", icon: "/beranda.svg", label: "Beranda", href: "/", status: "active" },
    { iconActive: "/riwayat.svg", icon: "/riwayat.svg", label: "Riwayat", href: "/riwayat", status: "inactive" },
    { iconActive: "/bantuan.svg", icon: "/bantuan.svg", label: "Bantuan ", href: "/bantuan", status: "inactive" },
    { iconActive: "/profile.svg", icon: "/profile.svg", label: "Profil", href: "/profile", status: "inactive" },
];

export default function Navbar() {
  return (
    <nav className="p-4 w-full max-w-2xl flex justify-between fixed bottom-0 mx-auto bg-white">
      <div className="flex w-full gap-2 justify-around px-12">
        {
            menu.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                    <Image src={item.icon} alt={item.label} width={24} height={24} />
                    <Link href={item.href}><span className={`text-xs font-bold ${item.status === "active" ? "text-blue-500" : "text-gray-500"}`}>{item.label}</span></Link>
                </div>
            ))
        }
      </div>
    </nav>
  );
}
