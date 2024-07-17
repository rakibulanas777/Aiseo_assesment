"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Plan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
  buttonLabel: string;
  isPopular: boolean;
}
interface SubscriptionProps {
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  reload: boolean;
}
const plans: Plan[] = [
  {
    name: "Basic",
    monthlyPrice: "$9.99/mo",
    annualPrice: "$99.99/year",
    features: [
      "20,000 words/month",
      "Basic Humanization Features",
      "Language Support: 2 languages",
      "Email Support",
      "Access to Standard Engine",
      "Basic AI Detector Evasion",
    ],
    buttonLabel: "Start Basic Plan",
    isPopular: false,
  },
  {
    name: "Standard",
    monthlyPrice: "$29.99/mo",
    annualPrice: "$299.99/year",
    features: [
      "100,000 words/month",
      "Advanced Humanization Features",
      "Language Support: 5 languages",
      "Priority Email Support",
      "Access to Advanced Engine",
      "Improved AI Detector Evasion",
      "Content Style Diversity Options",
    ],
    buttonLabel: "Start Standard Plan",
    isPopular: true,
  },
  {
    name: "Premium",
    monthlyPrice: "$59.99/mo",
    annualPrice: "$599.99/year",
    features: [
      "300,000 words/month",
      "All Advanced Features",
      "Unlimited Language Support",
      "Priority Phone and Email Support",
      "Access to Premium Engine",
      "Advanced AI Detector",
      "Real-Time Human Score Analysis",
      "Dedicated Account Manager",
    ],
    buttonLabel: "Start Premium Plan",
    isPopular: false,
  },
];

const Subscription: React.FC<SubscriptionProps> = ({ setReload, reload }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };

  const handleSubscriptionClick = (plan: Plan) => {
    const today = new Date();
    const subscriptionData = {
      date: today.toISOString(),
      packageName: plan.name,
      priceAmount: isAnnual ? plan.annualPrice : plan.monthlyPrice,
    };

    const existingSubscriptions = localStorage.getItem("subscriptionData");
    const subscriptions = existingSubscriptions
      ? JSON.parse(existingSubscriptions)
      : [];

    subscriptions.push(subscriptionData);
    localStorage.setItem("subscriptionData", JSON.stringify(subscriptions));
    toast.success(`Subscribed to ${plan.name} plan!`);
    setReload(true);
  };

  return (
    <div className=" text-white py-8">
      <div className="mb-6">
        <div className="text-xs font-base text-[#E2E8F0]">
          Upgrade your account
        </div>
        <div className="flex gap-4">
          <p>Save 20% with annual</p>
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox hidden"
              checked={isAnnual}
              onChange={handleToggle}
              aria-label="Toggle annual billing"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer"
            ></label>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg border border-[#64748B] bg-gradient-to-b from-[#2F3241] to-[#0F172A]/70 backdrop-blur-md relative`}
          >
            <div className="flex flex-col h-full justify-between content-between">
              <div className="relative">
                {plan.isPopular && (
                  <div className="absolute top-2 right-2 bg-[#14734C] text-white px-2 py-1 text-xs rounded-full">
                    Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-4">{plan.name}</h3>
                <p className="text-2xl font-bold mb-4">
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition duration-300"
                onClick={() => handleSubscriptionClick(plan)}
              >
                {plan.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Subscription;
