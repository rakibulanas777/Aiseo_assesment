"use client";
import BillingHistory from "@/app/component/BillingHistory";
import Subscription from "./component/Subscription";
import Details from "./component/Details";
import Navbar from "./shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
export default function Home() {
  const [reload, setReload] = useState(false);
  return (
    <>
      <div className="py-3 container mx-auto px-6 md:px-8 lg:px-10">
        <Navbar />
        <Details setReload={setReload} reload={reload} />
        <BillingHistory reload={reload} />
        <Subscription setReload={setReload} reload={reload} />
      </div>
    </>
  );
}
