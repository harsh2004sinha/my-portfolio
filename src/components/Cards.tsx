import { HoverEffect } from "./ui/card-hover-effect";

export function Cards() {
  return (
    <div className="w-full mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "JEE Advanced",
    description:
      "Achieved a rank of 2590 among 1.6 Lakhs+ shortlisted candidates in Joint Entrance Exam Advanced, 2022.",
  },
  {
    title: "Codeforces",
    description:
      "Achieved a rating of 1600+ with Expert rank on Codeforces, a competitive programming platform and solved many questions on it.",
  },
  {
    title: "Mathematics Olympiad",
    description:
      "Qualified Pre-Regional Mathematics Olympiad (PRMO) in 2019 and appeared in the Regional Mathematics Olympiad (RMO, Bihar), 2019.",
  },
  {
    title: "Reached Finals of CodeNight",
    description:
      "Reached finals of CodeNight 2024,national-level competition with 500+ teams, organized by Kshitij (Tech Fest), IIT Kharagpur.",
  },
  {
    title: "Codechef",
    description:
      "Achieved a rating of 1700+ with 3-Star rank on Codechef, a competitive programming platform and secured a Global Rank of 215 and 311 in Codechef Starters 115 and123 among 26000+ candidates..",
  },

];
