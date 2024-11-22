"use client";
import { useEffect } from "react";
import Image from "next/image";

import SafetyFilmsComponent from "../compontents/film-collections/safety-films-collection";

export default function SafetyFilmsPage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <div>
        <SafetyFilmsComponent />
      </div>
    </div>
  );
}
