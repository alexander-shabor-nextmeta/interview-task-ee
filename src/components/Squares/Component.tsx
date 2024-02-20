import React from "react";
import { Square } from "../../models/Square";

interface IProps {
  squares: Square[];
}

export default function Component({ squares }: IProps) {
  return (
    <section>
      <h3>Squares</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Color</th>
            <th>Diagonal</th>
          </tr>
        </thead>
        <tbody>
          {!squares.length && (
            <tr>
              <td colSpan={3} align="center">
                <div className="loader"></div>
              </td>
            </tr>
          )}
          {squares.map((square) => (
            <tr key={square.id}>
              <td>{square.id}</td>
              <td>{square.color}</td>
              <td align="right">{square.diagonal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
