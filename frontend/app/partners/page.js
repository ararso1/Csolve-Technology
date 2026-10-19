import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import PartnersListing from "@/components/PartnersListing";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb
        pageName="Our Partners"
        pageTitle="Our Amazing Partners"
      />
      <PartnersListing />
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default page;
