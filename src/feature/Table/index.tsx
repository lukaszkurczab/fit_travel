import React from "react";
import "./styles.scss";

interface TableProps {
  columns: string[];
  data: Array<{ [key: string]: any }>;
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="table-header">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="table-row">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="table-cell">
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
