import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Home = () => {
  const [items, setItems] = useState([
    <>
      <td>
        <input className="border rounded-none  border-gray-500 input input-bordered input-sm w-full max-w-x"></input>
      </td>
      <td>
        <input className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x"></input>
      </td>
      <td>
        <input className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x"></input>
      </td>
      <td>
        <p className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x"></p>
      </td>
      <td>
        <input className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x"></input>
      </td>
      <td>
        <p className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-xs"></p>
      </td>
      <td>
        <input className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x"></input>
      </td>
      <td>
        <p className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x"></p>
      </td>
    </>,
  ]);
  const addItem = () => {
    const newItem = (
      <>
        <td>
          <input className="border rounded-none  border-gray-500 input input-bordered input-sm w-full max-w-x"></input>
        </td>
        <td>
          <input className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x"></input>
        </td>
        <td>
          <input className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x"></input>
        </td>
        <td>
          <p className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x"></p>
        </td>
        <td>
          <input className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x"></input>
        </td>
        <td>
          <p className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-xs"></p>
        </td>
        <td>
          <input className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x"></input>
        </td>
        <td>
          <p className="border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x"></p>
        </td>
      </>
    );
    setItems([...items, newItem]);
  };
  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  return (
    <div className="pt-16 pb-32 bg-green-200">
      <div className="bg-white ml-20 mr-20 pt-6 rounded-lg pb-6 shadow-xl ">
        <div className="flex items-center  justify-center">
          <div className="flex">
            <p className="mt-2 mr-2">Date:</p>
            <input
              type="date"
              className="input input-bordered input-info w-full max-w-xs"
            ></input>
          </div>
          <div>
            <select className="ml-2 input input-bordered w-full input-info rounded-md max-w-xs">
              <option value="">Please Select...</option>
              <option value="Male">Admin</option>
              <option value="Female">Manager</option>
              <option value="Female">Asst Manager</option>
            </select>
          </div>
        </div>
        <hr className="mt-4"></hr>
        <div className="mt-4 pl-10 pr-10 flex items-center justify-center">
          <table class="table-auto">
            <thead>
              <tr className="border pl-4 border-gray-500 pr-4">
                <th className="border border-gray-500 w-20 p-2">ITEM</th>
                <th className="border border-gray-500 p-2">SIZE</th>
                <th className="border border-gray-500 p-2">HEIGHT</th>
                <th className="border border-gray-500 p-2">SQUARE FT</th>
                <th className="border border-gray-500 p-2">QUANTITY</th>
                <th className="border border-gray-500 p-2">TOTAL SQUARE</th>
                <th className="border border-gray-500 p-2">RATE</th>
                <th className="border border-gray-500 p-2">PRICE</th>
                <th className="border border-gray-500 p-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  {item}
                  <td className="flex text-3xl border rounded-none border-gray-500 input input-bordered input-sm w-full max-w-x">
                    <button onClick={addItem}>
                      <CiCirclePlus className="text-green-600"></CiCirclePlus>
                    </button>
                    <button onClick={() => deleteItem(index)}>
                      <IoIosCloseCircleOutline className="text-red-500"></IoIosCloseCircleOutline>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-end mr-20">
          <div>
            <div className="flex">
              <p className="mr-2 font-bold w-full">Sub Total: </p>
              <p
                type="text"
                placeholder="Type here"
                className="border rounded-none  border-gray-500 input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div className="flex mt-2">
              <p className="mr-2 font-bold w-full">Paid: </p>
              <input
                type="text"
                placeholder="Paid"
                className="border rounded-none  border-gray-500 input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div className="flex mt-2">
              <p className="mr-2 font-bold w-full">Cheque: </p>
              <input
                type="text"
                placeholder="Cheque"
                className="border rounded-none  border-gray-500 input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div className="flex mt-2">
              <p className="mr-2 font-bold w-full">Calan: </p>
              <input
                type="text"
                placeholder="Calan"
                className="border rounded-none  border-gray-500 input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div className="flex mt-2">
              <p className="mr-2 font-bold w-full">Bank: </p>
              <input
                type="text"
                placeholder="Bank"
                className="border rounded-none  border-gray-500 input input-bordered input-sm w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-20 mt-2">
          <button className="btn w-64 btn-outline btn-success">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
