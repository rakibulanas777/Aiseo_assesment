"use client";

import React, { useEffect, useState } from "react";

interface BillingItem {
  date: string;
  amount: string;
  description: string;
}

interface BillingHistoryProps {
  reload: boolean;
}
const BillingHistory: React.FC<BillingHistoryProps> = ({ reload }) => {
  const [subscriptionData, setSubscriptionData] = useState<BillingItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSubscriptionData = localStorage.getItem("subscriptionData");

      if (storedSubscriptionData) {
        try {
          const parsedData = JSON.parse(storedSubscriptionData);
          const formattedData = parsedData.map((item: any) => ({
            date: item.date,
            amount: item.priceAmount,
            description: `Subscription, ${item.packageName} Plan`,
          }));
          setSubscriptionData(formattedData);
        } catch (error) {
          console.error("Error parsing stored subscription data:", error);
        }
      }
    }
  }, [[], reload]);

  const billingData: BillingItem[] = [
    {
      date: "2024-08-03T00:00:00.000Z",
      amount: "19$",
      description: "1 Month Subscription, Basic Plan",
    },
    {
      date: "2023-01-03T00:00:00.000Z",
      amount: "19$",
      description: "1 Month Subscription, Basic Plan",
    },
    {
      date: "2023-01-03T00:00:00.000Z",
      amount: "19$",
      description: "1 Month Subscription, Basic Plan",
    },
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const dataToDisplay =
    subscriptionData.length > 0 ? subscriptionData : billingData;

  return (
    <div className="py-8 text-white">
      <h2 className="text-xl font-semibold mb-2">Your billing history</h2>
      <p className="mb-6 text-sm">
        Download your previous plan receipts and usage details.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left bg-[#1E293B] py-3 border-b border-gray-700">
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {dataToDisplay.map((item, index) => (
              <tr
                key={index}
                className="border-b bg-[#394051]/20  backdrop-blur-md border-gray-800"
              >
                <td className="py-3 px-4">{formatDate(item.date)}</td>
                <td className="py-3 px-4">{item.amount}</td>
                <td className="py-3 px-4">{item.description}</td>
                <td className="py-3 px-4 text-[#4ADE80]">
                  <a href="#">Download</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingHistory;
