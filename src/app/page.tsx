import HomePageContent from "@/components/HomePageContent";
import { LanguageProvider } from "@/components/LanguageProvider";
import { getCmsData } from "@/sanity/client";

export const dynamic = "force-static";

export default async function Page() {
  const data = await getCmsData();
  return (
    <LanguageProvider>
      <HomePageContent data={data} />
    </LanguageProvider>
  );
}
