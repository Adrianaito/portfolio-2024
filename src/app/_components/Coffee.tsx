"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@lib/utils";

const CoffeeImage: React.FC = () => {
  const [isCentered, setIsCentered] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsCentered(!isCentered);
  //   }, 60000); //1 minute

  //   return () => clearTimeout(timer);
  // }, [isCentered]);

  useEffect(() => {
    const coffeeImage = document.getElementById("coffee");

    if (coffeeImage) {
      // Function to trigger the shake effect
      const shakeCoffee = () => {
        coffeeImage.classList.add("animate-wiggle");

        // Remove the shake class after 1 second (500ms)
        setTimeout(() => {
          coffeeImage.classList.remove("animate-wiggle");
        }, 1000);
      };

      const intervalId = setInterval(shakeCoffee, 10000); // 10 seconds

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <Image
      id="coffee"
      src="/coffee.png"
      alt="Coffee"
      width={200}
      height={200}
      className={cn(
        "fixed",
        "w-16",
        "h-16",
        isCentered ? "top-left" : "bottom-right"
      )}
    />
  );
};

export default CoffeeImage;
