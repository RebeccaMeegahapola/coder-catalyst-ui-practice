import { Colors } from "@/constants/Colors";
import {Header} from "@/components/navbar/header";
import {SubNavbar} from "@/components/navbar/sub-navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <SubNavbar />
    </div>
  );
}
