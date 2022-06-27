import { useState } from "react";
import HomePage from "../component/home-page";
export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <HomePage />
    </div>
  );
}
