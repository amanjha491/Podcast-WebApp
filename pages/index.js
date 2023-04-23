import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
} from "../components/sections.js";

export default function Home() {
  return (
    <div className="pt-28 md:pl-72 p-8">
      <FirstSection title="Podcast Playlists" />
      <SecondSection title="Sleep" />
      <ThirdSection title="Focus" />
      <FourthSection title="Mood" />
      <FifthSection title="Popular releases" />
    </div>
  );
}
