import React from "react";
import { Circle } from "../../models/Circle";

interface IProps {
  circles: Circle[];
}

export default function Component({ circles }: IProps) {
  return (
    <section>
      <h3>Circles</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Color</th>
            <th>Radius</th>
          </tr>
        </thead>
        <tbody>
          {!circles.length && (
            <tr>
              <td colSpan={3} align="center">
                <div className="loader"></div>
              </td>
            </tr>
          )}
          {circles.map((circle) => (
            <tr key={circle.id}>
              <td>{circle.id}</td>
              <td>{circle.color}</td>
              <td align="right">{circle.radius}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
