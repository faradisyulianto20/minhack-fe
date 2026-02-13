import Image from "next/image";
import CreditScore from "../components/credit-score";
import UploadMutation from "../components/upload";
import RecentActivity from "../components/recent-activity";
import FinancialLiteracy from "../components/fin-literacy";
import FinancialTips from "../components/fin-tips";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-md mx-auto bg-zinc-50 font-sans dark:bg-black">
      <UploadMutation />
      <CreditScore />
      <RecentActivity />
      <FinancialLiteracy />
      <FinancialTips />
    </div>
  );
}
