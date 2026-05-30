import ChatInterface from "@/components/ChatInterface";
import MatrixRain from "@/components/MatrixRain";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <MatrixRain />
      <ChatInterface />
    </div>
  );
}
