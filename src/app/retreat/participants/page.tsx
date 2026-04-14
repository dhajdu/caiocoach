import type { Metadata } from "next";
import ParticipantsDashboard from "./ParticipantsDashboard";

export const metadata: Metadata = {
  title: "Retreat Participants - Private",
  robots: "noindex, nofollow",
};

export default function RetreatParticipantsPage() {
  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className="pt-10" />
      <ParticipantsDashboard />
    </>
  );
}
