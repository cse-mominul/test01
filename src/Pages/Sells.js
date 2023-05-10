import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Sells = () => {
  const [items, setItems] = useState([]);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.customer);
    setItems([...items, data]);

    resetField("date");
    resetField("item");
    resetField("size");
    resetField("height");
    resetField("squareft");
    resetField("quantity");
    resetField("totalSquare");
    resetField("rate");
    resetField("price");
    resetField("customer");
  };

  const [val, setVal] = useState();
  const data = ["alia", "katrina", "karina"];

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  return (
    <div className="pt-20 pb-20 ">
      <div className="ml-20 mr-20 mt-20 pt-6 pl-4 pr-4 pb-20 bg-blue-50 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
        <div>
          <div className="flex gap-2">
            <p className="font-bold">Date: </p>
            <input
              type="date"
              className="border rounded-none ml-9 border-gray-500 input input-bordered input-sm w-32 max-w-x"
              {...register("date", { required: true })}
            ></input>
          </div>
          <div className="flex mt-6 pb-6 gap-2">
            <p className="font-bold">Customer:</p>
            <input
              className="border rounded-none border-gray-500 input input-bordered input-sm w-32 max-w-x"
              list="data"
              onChange={(e) => setVal(e.target.value)}
              placeholder="Search"
              {...register("customer", { required: true })}
            />
            <datalist id="data">
              {data.map((op) => (
                <option>{op}</option>
              ))}
            </datalist>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-4 justify-center">
            <div>
              <p className="font-bold">Item</p>
              <input
                type="Text"
                className="border rounded-none border-gray-500 input input-bordered input-sm w-32 max-w-x"
                {...register("item", { required: true })}
              ></input>
            </div>
            <div>
              <p className="font-bold">Size</p>
              <input
                type="Text"
                className="border rounded-none border-gray-500 input input-bordered input-sm w-32 max-w-x"
                {...register("size", { required: true })}
              ></input>
            </div>
            <div>
              <p className="font-bold">Height</p>
              <input
                type="Text"
                className="border rounded-none border-gray-500 input input-bordered input-sm w-32 max-w-x"
                {...register("height", { required: true })}
              ></input>
            </div>
            <div>
              <p className="font-bold">Square Ft</p>
              <input
                type="Text"
                className="border rounded-none border-gray-500 input input-bordered input-sm w-32 max-w-x"
                {...register("squareft", { required: true })}
              ></input>
            </div>
            <div>
              <p className="font-bold">Quantity</p>
              <input
                type="Number"
                className="border rounded-none border-gray-500 input input-bordered input-sm w-32 max-w-x"
                {...register("quantity", { required: true })}
              ></input>
            </div>
            <div>
              <p className="font-bold">Total Square</p>
              <input
                type="Text"
                className="border rounded-none border-gray-500 input input-bordered input-sm w-32 max-w-x"
                {...register("totalSquare", { required: true })}
              ></input>
            </div>
            <div>
              <p className="font-bold">Rate</p>
              <input
                type="Text"
                className="border rounded-none border-gray-500 input input-bordered input-sm w-32 max-w-x"
                {...register("rate", { required: true })}
              ></input>
            </div>
            <div>
              <p className="font-bold">Price</p>
              <input
                type="Number"
                className="border rounded-none border-gray-500 input input-bordered input-sm w-32 max-w-x"
                {...register("price", { required: true })}
              ></input>
            </div>
          </div>
          <input
            type="submit"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="inline-block rounded w-full mt-6 bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          />
        </form>
        <h3 className="text-2xl mt-6">#Sales</h3>
        {/* Table */}
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm font-light">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        #
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Item
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Size
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Height
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Square Ft
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Quantity
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Total Square
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Rate
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr
                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        key={index}
                      >
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                          {index}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item.item}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item.size}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item.height}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item.squareft}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item.quantity}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item.totalSquare}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item.rate}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item.price}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          <button onClick={() => deleteItem(index)}>
                            <IoIosCloseCircleOutline className="text-red-500 text-3xl"></IoIosCloseCircleOutline>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sells;
