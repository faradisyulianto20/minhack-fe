import Image from "next/image";
import { BellDot } from "lucide-react";

export default function Header() {
  return (
    <header className="p-4 w-full max-w-2xl flex justify-between">
      <div className="flex">
        <Image
          src="/profile.png"
          alt="Logo"
          width={40}
          height={40}
          className="inline-block mr-2"
        />
        <div className="flex flex-col">
          <span className="font-bold">Selamat pagi!</span>
          <span className="text-sm">Welcome back!</span>
        </div>
      </div>{" "}
      <div className="">
        <Image src="/notification.png" alt="Notifications" width={32} height={32} />
      </div>
    </header>
  );
}
