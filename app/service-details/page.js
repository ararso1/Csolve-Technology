import { services } from "@/data/services";
import { redirect } from "next/navigation";

const page = () => {
  redirect(`/service-details/${services[0].slug}`);
};

export default page;
