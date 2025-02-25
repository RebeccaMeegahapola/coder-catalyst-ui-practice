import { Colors } from "@/constants/Colors";
import {Header} from "@/components/navbar/header";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <h1 style={{ color: Colors.primary }}>e-commerce site</h1>
    </div>
  );
}
