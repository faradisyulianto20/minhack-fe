import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import Image from "next/image";

const creditScore = {
  bagus: {
    status: "Bagus",
    score: 750,
    maxScore: 1000,
    description: "Anda dipercaya!",
    color: "text-green-400",
    progressColor: "bg-gradient-to-r from-blue-600 to-blue-400",
    icon: <CheckCircle2 className="text-green-400 w-6 h-6" />,
  },
  sedang: {
    status: "Sedang",
    score: 500,
    maxScore: 1000,
    description: "Perbaiki catatan keuangan Anda.",
    color: "text-yellow-400",
    progressColor: "bg-gradient-to-r from-yellow-500 to-yellow-300",
    icon: <AlertCircle className="text-yellow-400 w-6 h-6" />,
  },
  buruk: {
    status: "Buruk",
    score: 300,
    maxScore: 1000,
    description: "Perlu perhatian serius pada keuangan Anda.",
    color: "text-red-400",
    progressColor: "bg-gradient-to-r from-red-600 to-red-400",
    icon: <XCircle className="text-red-400 w-6 h-6" />,
  },
};

type CreditKey = keyof typeof creditScore;

export default function CreditScore({ variant = "bagus" }: { variant?: CreditKey }) {
  const { status, score, maxScore, description, color, progressColor, icon } =
    creditScore[variant];

  const percentage = (score / maxScore) * 100;

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xl px-6">
      <Card className="w-full rounded-2xl bg-[#0D6CF20D] border border-blue-100">
        <CardContent className="flex flex-col gap-3">

          {/* Header Row */}
          <div className="flex justify-between items-center">
            <CardDescription className="text-sm font-semibold tracking-widest uppercase text-gray-400">
              Status Kredit
            </CardDescription>
            <span className="text-sm font-bold text-blue-400">
              {score}/{maxScore}
            </span>
          </div>

          {/* Status Row */}
          <div className="flex items-center gap-2">
            <CardTitle className={`text-2xl font-bold text-black`}>
              {status}
            </CardTitle>
            <Image src="/verified.png" alt="Credit Score Icon" width={16} height={16} />
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${progressColor}`}
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Description */}
          <CardDescription className="text-sm text-gray-400">
            {description}
          </CardDescription>

        </CardContent>
      </Card>
    </div>
  );
}