import React, { useEffect, useState } from "react";
import Component from "./Component";
import { Square } from "../../models/Square";
import { test_squares } from "../../__mocks__/Squares";

export default function Container() {
  const [squares, setSquares] = useState<Square[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setSquares(test_squares);
    }, 2000);
  }, []);

  return <Component squares={squares} />;
}
