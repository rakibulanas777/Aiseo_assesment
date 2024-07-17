import React from "react";

const BillingHistory = () => {
  const billingData = [
    {
      date: "January 3, 2023",
      amount: "19$",
      description: "1 Month Subscription, Basic Plan",
    },
    {
      date: "January 3, 2023",
      amount: "19$",
      description: "1 Month Subscription, Basic Plan",
    },
    {
      date: "January 3, 2023",
      amount: "19$",
      description: "1 Month Subscription, Basic Plan",
    },
  ];

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
            {billingData.map((item, index) => (
              <tr key={index} className="border-b bg-[#394051] border-gray-800">
                <td className="py-2 px-4">{item.date}</td>
                <td className="py-2 px-4">{item.amount}</td>
                <td className="py-2 px-4">{item.description}</td>
                <td className="py-2 px-4 text-[#4ADE80]">
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
