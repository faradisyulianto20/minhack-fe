import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import Header from "./layout/header";

export default function UploadMutation() {
  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-xl p-6">
      <Header />
      <Card className="w-full outline outline-dashed outline-blue-500">
        <CardContent className="flex flex-col items-center gap-2 text-center">
          <Image src="/file.png" alt="Upload Icon" width={100} height={100} />
          <CardTitle className="text-2xl">Upload Data Manual </CardTitle>
          <CardDescription className="text-md">
            Input mutasi 30 terakhir untuk mulai analisis keuangan anda.
          </CardDescription>

          <label className="bg-[#22C55E] rounded-2xl w-full p-2 text-white text-center cursor-pointer inline-block shadow-[0_4px_6px_-4px_rgba(34,197,94,0.3),0_10px_15px_-3px_rgba(34,197,94,0.3) hover:bg-[#16A34A] transition-colors duration-300">
            Mulai
            <input type="file" className="hidden" />
          </label>
        </CardContent>
      </Card>
    </div>
  );
}
