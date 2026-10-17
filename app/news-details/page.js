import { blogPosts } from "@/data/blog";
import { redirect } from "next/navigation";

const page = () => {
  redirect(`/news/${blogPosts[0].slug}`);
};

export default page;
