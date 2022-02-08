import { React, useState, useEffect } from "react";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Age = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user")
      .then((response) => response.json())
      .then((value) => setValue(value));
  }, []);
  return (
    <>
      <Table bordered>
        <thead>
          <tr>
            <td>
              <th>ID</th>
            </td>
            <td>
              <th>Name</th>
            </td>
            <td>
              <th>Email_id</th>
            </td>
            <td>
              <th>Mobile Number</th>
            </td>
            <td>
              <th>City</th>
            </td>
            <td>
              <th>Age</th>
            </td>
            <td>
              <th>Address</th>
            </td>
          </tr>
        </thead>
        <tbody>
          {value
            .filter(function (value) {
              return value.age > 18;
            })
            .map(function (value) {
              return (
                <tr>
                  <th>{value.id}</th>
                  <td>{value.name}</td>
                  <td>{value.email_id}</td>
                  <td>{value.mobile_number}</td>
                  <td>{value.city}</td>
                  <td>{value.age}</td>
                  <td>{value.address}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};
export default Age;
