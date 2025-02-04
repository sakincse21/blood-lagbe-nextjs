"use client";

import React from "react";

interface DateCardProps {
  date: Date;
}

export default function DateCard({ date }: DateCardProps) {
  // Add 90 days to the provided date
  const futureDate = new Date(date);
  futureDate.setDate(futureDate.getDate() + 90);

  // Format the new date
  const monthName = futureDate.toLocaleString("en-US", { month: "long" });
  const day = futureDate.getDate();
  const dayOfWeek = futureDate.toLocaleString("en-US", { weekday: "long" });

  return (
    <div className="w-40 bg-base-300 rounded-box shadow-lg rounded-lg text-center overflow-hidden">
      <div className="bg-blue-500 text-white text-lg font-bold py-2">{monthName}</div>
      <div className="text-4xl font-extrabold py-2">{day}</div>
      <div className=" text-lg mb-3">{dayOfWeek}</div>
    </div>
  );
}
