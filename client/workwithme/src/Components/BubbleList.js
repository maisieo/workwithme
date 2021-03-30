import React from "react";
import Table from "react-bootstrap/Table";

function BubbleList({bubbles, onDelete}) {
  // info necessary in order to sort the information into rows rather than columns
  let info = bubbles[0] && Object.keys(bubbles[0]);

  return (
    <Table borderless hover striped responsive="sm">
      <thead>
        <tr>
          <td>#</td>
          <th>Bubble owner</th>
          <th>Number of work stations</th>
          <th>Workstations</th>
          <th>Wifi</th>
          <th>Pet friendly</th>
          <th>Kitchen</th>
          <th>Quiet space?</th>
          <th>Wheelchair access</th>
          <th>Smoking area</th>
    
        </tr>
      </thead>
      <tbody>
        {/* //maps the walks information */}
        {bubbles.map(row => (
          <tr>
            {/* //maps the walk info into columns */}
            {info.map(e => (
              <td>{row[e]}</td>
            ))}
            <td>
              <button id="deleteButton" onClick={() => onDelete(row.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BubbleList;
