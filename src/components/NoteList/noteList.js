import React from "react";

const noteList = ({ data, editNote, deleteNote }) => {
  if (data.length <= 0) {
    return <p>No Records Found</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Note</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.note}</td>
            <td>{item.description}</td>
            <td>
              <input
                type="button"
                value="Edit"
                onClick={() => editNote(item)}
              />
              <input
                type="button"
                value="Delete"
                onClick={() => deleteNote(item)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default noteList;
