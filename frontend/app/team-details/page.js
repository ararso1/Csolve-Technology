import { teamMembers } from "@/data/team";
import { redirect } from "next/navigation";

const page = () => {
  redirect(`/team-details/${teamMembers[0].slug}`);
};

export default page;
