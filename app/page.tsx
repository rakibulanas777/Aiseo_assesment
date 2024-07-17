import BillingHistory from "@/app/component/BillingHistory";
import Image from "next/image";
import Subscription from "./component/Subscription";
import Details from "./component/Details";
import Navbar from "./shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Details />
      <BillingHistory />
      <Subscription />
    </>
  );
}
