import React from "react";
import { Badge } from "@/components/ui/badge";

type ActivityType = "notification" | "default";

const iconConfig: Record<ActivityType, { bg: string; icon: React.ReactNode }> =
  {
    notification: {
      bg: "bg-amber-100",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-amber-500"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      ),
    },
    default: {
      bg: "bg-blue-100",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 18v-1" />
          <path d="M14 18v-3" />
          <path d="M10 13v-1" />
          <path d="M14 11v-1" />
        </svg>
      ),
    },
  };

const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-emerald-600"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const activities = [
  {
    id: 1,
    type: "default" as ActivityType,
    title: "Upload Mutasi Mingguan",
    time: "Kemarin",
    description: "Terima kasih Pak, data sudah kami terima.",
    badge: { label: "Berhasil Diverifikasi", icon: checkIcon },
  },
  {
    id: 2,
    type: "notification" as ActivityType,
    title: "Ingat Bayar Cicilan",
    time: "2 hari lalu",
    description: "Jatuh tempo tanggal 25. Jangan lupa ya Pak!",
    badge: null,
  },
];

export default function RecentActivity() {
  return (
    <div className="w-full px-5 mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Aktivitas Terakhir</h2>
        <button className="text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors">
          Lihat Semua
        </button>
      </div>

      {/* Activity List */}
      <div className="flex flex-col gap-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            {/* Icon Circle */}
            <div
              className={`flex-shrink-0 w-12 h-12 rounded-full ${iconConfig[activity.type].bg} flex items-center justify-center mt-1`}
            >
              {iconConfig[activity.type].icon}
            </div>

            {/* Chat Bubble */}
            <div className="flex-1 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.07)] p-4">
              {/* Title + Timestamp Row */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {activity.title}
                </h3>
                <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 mt-0.5">
                  {activity.time}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                {activity.description}
              </p>

              {/* Badge */}
              {activity.badge && (
                <Badge
                  variant="outline"
                  className="mt-3 text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-600 border-emerald-200 rounded-full"
                >
                  {activity.badge.icon}
                  {activity.badge.label}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
