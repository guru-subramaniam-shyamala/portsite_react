"use client";

import { useEffect, useRef, useState } from "react";

const COUNTER_URL =
  "https://3ge5x7nim42ir355oqdb35hrvu0axxvc.lambda-url.us-east-1.on.aws/";

export const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) {
      return;
    }

    hasFetched.current = true;

    const fetchCounter = async () => {
      try {
        const response = await fetch(COUNTER_URL, { cache: "no-store" });
        const data = await response.json();
        const nextCount = typeof data === "number" ? data : Number(data);

        if (Number.isFinite(nextCount)) {
          setCount(nextCount);
        }
      } catch (error) {
        console.error("Error updating counter:", error);
      }
    };

    void fetchCounter();
  }, []);

  return (
    <span aria-live="polite">
      {count === null ? "..." : new Intl.NumberFormat("en-US").format(count)}
    </span>
  );
};
