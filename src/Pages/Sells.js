import React from "react";

const Sells = () => {
  return (
    <div className="pt-20 pb-20 ">
      <div className="ml-20 mr-20 mt-20 pt-6 pl-4 pr-4 pb-20 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
        <div className="flex items-center gap-4 justify-center">
          <div>
            <p className="font-bold">Date</p>
            <input
              type="date"
              className='class="p-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full'
            ></input>
          </div>
          <div>
            <p className="font-bold">Item</p>
            <input
              type="Text"
              className='class="p-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full'
            ></input>
          </div>
          <div>
            <p className="font-bold">Size</p>
            <input
              type="Text"
              className='class="p-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full'
            ></input>
          </div>
          <div>
            <p className="font-bold">Height</p>
            <input
              type="Text"
              className='class="p-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full'
            ></input>
          </div>
          <div>
            <p className="font-bold">Square Ft</p>
            <input
              type="Text"
              className='class="p-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full'
            ></input>
          </div>
          <div>
            <p className="font-bold">Quantity</p>
            <input
              type="Number"
              className='class="p-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full'
            ></input>
          </div>
          <div>
            <p className="font-bold">Total Square</p>
            <input
              type="Text"
              className='class="p-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full'
            ></input>
          </div>
          <div>
            <p className="font-bold">Rate</p>
            <input
              type="Text"
              className='class="p-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full'
            ></input>
          </div>
          <div>
            <p className="font-bold">Price</p>
            <input
              type="Number"
              className='class="p-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full'
            ></input>
          </div>
        </div>
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="inline-block rounded w-full mt-6 bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Save To List
        </button>
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
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                      <td class="whitespace-nowrap px-6 py-4">Mark</td>
                      <td class="whitespace-nowrap px-6 py-4">Otto</td>
                      <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                      <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                      <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                      <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                      <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                      <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                      
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                      <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                      <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                      <td class="whitespace-nowrap px-6 py-4">@fat</td>
                      <td class="whitespace-nowrap px-6 py-4">@fat</td>
                      <td class="whitespace-nowrap px-6 py-4">@fat</td>
                      <td class="whitespace-nowrap px-6 py-4">@fat</td>
                      <td class="whitespace-nowrap px-6 py-4">@fat</td>
                      <td class="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                      <td class="whitespace-nowrap px-6 py-4">Larry</td>
                      <td class="whitespace-nowrap px-6 py-4">Wild</td>
                      <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                      <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                      <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                      <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                      <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                      <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                
                      
                    </tr>
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
