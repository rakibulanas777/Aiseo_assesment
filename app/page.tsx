"use client";
import BillingHistory from "@/app/component/BillingHistory";
import Subscription from "./component/Subscription";
import Details from "./component/Details";
import Navbar from "./shared/Navbar";
import { ToastContainer } from "react-toastify";
import { InfinitySpin } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen">
          <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto w-32">
            <InfinitySpin
              visible={true}
              width="200"
              className="text-center mx-auto"
              color="blue"
              ariaLabel="infinity-spin-loading"
            />
          </div>
        </div>
      ) : (
        <div className="py-3 container mx-auto px-6 md:px-8 lg:px-10">
          <Navbar />
          <Details setReload={setReload} reload={reload} />
          <BillingHistory reload={reload} />
          <Subscription setReload={setReload} reload={reload} />
        </div>
      )}
    </>
  );
}
