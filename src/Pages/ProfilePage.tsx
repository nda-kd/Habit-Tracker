import { KPIsReports } from "@/Components/KPIsReports";
import { SectionLabel } from "@/Components/SectionLabel";
import { Badges } from "@/Components/Profile/Badges";
import { ProfileHeader } from "@/Components/Profile/ProfileHeader";

export const ProfilePage = () => {
  return (
    <>
      <ProfileHeader />
      <KPIsReports />
      <SectionLabel label="Badges" />
      <Badges />
    </>
  );
};
