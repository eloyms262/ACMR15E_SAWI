// TODO@munar import Carousel from "../component/carousel"; To-do
import { useState } from "react";
import HomePage from "../component/home-page";
export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>

      <HomePage/>
      {/*TODO@munar <Carousel /> */}
    </div>
  );
}
