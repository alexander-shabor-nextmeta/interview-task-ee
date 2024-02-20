import React, { useEffect, useState } from "react";
import Component from "./Component";
import { Circle } from "../../models/Circle";
import { test_circles } from "../../__mocks__/Circles";

export default function Container() {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setCircles(test_circles);
    }, 2000);
  }, []);

  return <Component circles={circles} />;
}
