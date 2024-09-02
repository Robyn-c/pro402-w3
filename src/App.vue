<template>

  <div class="px-4 xl:px-0">
    <div class="mx-auto">
      <div class="w-full">
        <div>
          <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div class="flex items-center justify-between">
              <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Registros
              </p>
              <div class="md:flex items-center lg:mt-0">
                <div class="flex items-center">

                  <div class="flex items-center pl-3 bg-white border w-64 rounded border-gray-200">
                    <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      viewBox="0 0 20 20" fill="none">
                      <path
                        d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                        stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M17.5 17.5L12.5 12.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                    <input type="text"
                      class="py-2.5 pl-1 w-full focus:outline-none border-0 text-sm rounded text-gray-600 placeholder-gray-500"
                      placeholder="Search" />
                  </div>
                </div>
                <div class="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
                  <button @click="add = true"
                    class="inline-flex ml-1.5 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                    <p class="text-sm font-medium leading-none text-white">
                      Add User
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow overflow-x-auto">
            <table class="w-full whitespace-nowrap">
              <thead>
                <tr class="h-20 w-full text-sm leading-none text-gray-600">
                  <th class="font-normal text-left pl-4">#</th>
                  <th class="font-normal text-left pl-11">Name</th>
                  <th class="font-normal text-left pl-10">Age</th>
                  <th class="font-normal text-left">Created</th>
                  <th class="font-normal text-left">Job Title</th>
                  <th class="font-normal text-left">Status</th>
                  <th class="font-normal text-left">Actions</th>
                </tr>
              </thead>
              <tbody class="w-full">
                <tr
                  class="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100">
                  <td class="pl-4">1</td>
                  <td class="pl-11">
                    <div class="flex items-center">
                      <img class="shadow-md rounded-full w-10 h-10 mr-3"
                        src="https://cdn.tuk.dev/assets/templates/olympus/invoice.png" />
                      Miracle Botos
                    </div>
                  </td>
                  <td>
                    <p class="mr-16 pl-10">28</p>
                  </td>
                  <td>
                    <p class="mr-16">06/02/2020</p>
                  </td>
                  <td>
                    <p class="mr-16">Product Designer</p>
                  </td>
                  <td>
                    <div class="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full">
                      <p class="text-xs leading-3 text-blue-500">Approved</p>
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center">
                      <button
                        class="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Edit
                      </button>
                      <button
                        class="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Call
                      </button>
                      <div class="relative px-5 pt-2">
                        <button class="focus:outline-none" @click="table1 = !table1">
                          <svg class="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" fill="none">
                            <path
                              d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </button>
                        <div v-if="table1" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-20">
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-100">
                  <td class="pl-4">2</td>
                  <td class="pl-11">
                    <div class="flex items-center">
                      <img class="shadow-md rounded-full w-10 h-10 mr-3"
                        src="https://cdn.tuk.dev/assets/templates/olympus/invoice(1).png" />
                      Tiana Levin
                    </div>
                  </td>
                  <td>
                    <p class="mr-16 pl-10">28</p>
                  </td>
                  <td>
                    <p class="mr-16">06/02/2020</p>
                  </td>
                  <td>
                    <p class="mr-16">Product Designer</p>
                  </td>
                  <td>
                    <div class="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full">
                      <p class="text-xs leading-3 text-blue-500">Approved</p>
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center">
                      <button
                        class="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Edit
                      </button>
                      <button
                        class="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Call
                      </button>
                      <div class="relative px-5 pt-2">
                        <button class="focus:outline-none" @click="table2 = !table2">
                          <svg class="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" fill="none">
                            <path
                              d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </button>
                        <div v-if="table2" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-20">
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-100">
                  <td class="pl-4">3</td>
                  <td class="pl-11">
                    <div class="flex items-center">
                      <img class="shadow-md rounded-full w-10 h-10 mr-3"
                        src="https://cdn.tuk.dev/assets/templates/olympus/invoice(2).png" />
                      Jordyn Korsgaard
                    </div>
                  </td>
                  <td>
                    <p class="mr-16 pl-10">28</p>
                  </td>
                  <td>
                    <p class="mr-16">06/02/2020</p>
                  </td>
                  <td>
                    <p class="mr-16">Product Designer</p>
                  </td>
                  <td>
                    <div class="w-20 h-6 flex items-center mr-16 justify-center bg-yellow-50 rounded-full">
                      <p class="text-xs leading-3 text-yellow-600">Pending</p>
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center">
                      <button
                        class="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Edit
                      </button>
                      <button
                        class="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Call
                      </button>
                      <div class="relative px-5 pt-2">
                        <button class="focus:outline-none" @click="table3 = !table3">
                          <svg class="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" fill="none">
                            <path
                              d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </button>
                        <div v-if="table3" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-20">
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-100">
                  <td class="pl-4">4</td>
                  <td class="pl-11">
                    <div class="flex items-center">
                      <img class="shadow-md rounded-full w-10 h-10 mr-3"
                        src="https://cdn.tuk.dev/assets/templates/olympus/invoice(3).png" />
                      Kierra Curtis
                    </div>
                  </td>
                  <td>
                    <p class="mr-16 pl-10">28</p>
                  </td>
                  <td>
                    <p class="mr-16">06/02/2020</p>
                  </td>
                  <td>
                    <p class="mr-16">Product Designer</p>
                  </td>
                  <td>
                    <div class="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full">
                      <p class="text-xs leading-3 text-blue-500">Approved</p>
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center">
                      <button
                        class="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Edit
                      </button>
                      <button
                        class="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Call
                      </button>
                      <div class="relative px-5 pt-2">
                        <button class="focus:outline-none" @click="table4 = !table4">
                          <svg class="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" fill="none">
                            <path
                              d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </button>
                        <div v-if="table4" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-20">
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-100">
                  <td class="pl-4">5</td>
                  <td class="pl-11">
                    <div class="flex items-center">
                      <img class="shadow-md rounded-full w-10 h-10 mr-3"
                        src="https://cdn.tuk.dev/assets/templates/olympus/invoice(4).png" />
                      Terry Ekstrom Bothman
                    </div>
                  </td>
                  <td>
                    <p class="mr-16 pl-10">28</p>
                  </td>
                  <td>
                    <p class="mr-16">06/02/2020</p>
                  </td>
                  <td>
                    <p class="mr-16">Product Designer</p>
                  </td>
                  <td>
                    <div class="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full">
                      <p class="text-xs leading-3 text-blue-500">Approved</p>
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center">
                      <button
                        class="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Edit
                      </button>
                      <button
                        class="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Call
                      </button>
                      <div class="relative px-5 pt-2">
                        <button class="focus:outline-none" @click="table5 = !table5">
                          <svg class="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" fill="none">
                            <path
                              d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </button>
                        <div v-if="table5" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-20">
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-100">
                  <td class="pl-4">6</td>
                  <td class="pl-11">
                    <div class="flex items-center">
                      <img class="shadow-md rounded-full w-10 h-10 mr-3"
                        src="https://cdn.tuk.dev/assets/templates/olympus/invoice(6).png" />
                      Corey Vetrovs
                    </div>
                  </td>
                  <td>
                    <p class="mr-16 pl-10">28</p>
                  </td>
                  <td>
                    <p class="mr-16">06/02/2020</p>
                  </td>
                  <td>
                    <p class="mr-16">Product Designer</p>
                  </td>
                  <td>
                    <div class="w-20 h-6 flex items-center mr-16 justify-center bg-yellow-50 rounded-full">
                      <p class="text-xs leading-3 text-yellow-600">Pending</p>
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center">
                      <button
                        class="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Edit
                      </button>
                      <button
                        class="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Call
                      </button>
                      <div class="relative px-5 pt-2">
                        <button class="focus:outline-none" @click="table6 = !table6">
                          <svg class="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" fill="none">
                            <path
                              d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </button>
                        <div v-if="table6" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-20">
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-100">
                  <td class="pl-4">7</td>
                  <td class="pl-11">
                    <div class="flex items-center">
                      <img class="shadow-md rounded-full w-10 h-10 mr-3"
                        src="https://cdn.tuk.dev/assets/templates/olympus/invoice(7).png" />
                      Zain George
                    </div>
                  </td>
                  <td>
                    <p class="mr-16 pl-10">28</p>
                  </td>
                  <td>
                    <p class="mr-16">06/02/2020</p>
                  </td>
                  <td>
                    <p class="mr-16">Product Designer</p>
                  </td>
                  <td>
                    <div class="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full">
                      <p class="text-xs leading-3 text-blue-500">Approved</p>
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center">
                      <button
                        class="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Edit
                      </button>
                      <button
                        class="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Call
                      </button>
                      <div class="relative px-5 pt-2">
                        <button class="focus:outline-none" @click="table7 = !table7">
                          <svg class="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" fill="none">
                            <path
                              d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </button>
                        <div v-if="table7" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-20">
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="h-20 text-sm leading-none text-gray-700 border-b border-gray-200 bg-white hover:bg-gray-100">
                  <td class="pl-4">8</td>
                  <td class="pl-11">
                    <div class="flex items-center">
                      <img class="shadow-md rounded-full w-10 h-10 mr-3"
                        src="https://cdn.tuk.dev/assets/templates/olympus/invoice(8).png" />
                      Angel Saris
                    </div>
                  </td>
                  <td>
                    <p class="mr-16 pl-10">28</p>
                  </td>
                  <td>
                    <p class="mr-16">06/02/2020</p>
                  </td>
                  <td>
                    <p class="mr-16">Product Designer</p>
                  </td>
                  <td>
                    <div class="w-20 h-6 flex items-center mr-16 justify-center bg-yellow-50 rounded-full">
                      <p class="text-xs leading-3 text-yellow-600">Pending</p>
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center">
                      <button
                        class="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Edit
                      </button>
                      <button
                        class="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Call
                      </button>
                      <div class="relative px-5 pt-2">
                        <button class="focus:outline-none" @click="table8 = !table8">
                          <svg class="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" fill="none">
                            <path
                              d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </button>
                        <div v-if="table8" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-20">
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="h-20 text-sm leading-none text-gray-700 bg-white hover:bg-gray-100">
                  <td class="pl-4">9</td>
                  <td class="pl-11">
                    <div class="flex items-center">
                      <img class="shadow-md rounded-full w-10 h-10 mr-3"
                        src="https://cdn.tuk.dev/assets/templates/olympus/invoice(9).png" />
                      Desirae Dorwart
                    </div>
                  </td>
                  <td>
                    <p class="mr-16 pl-10">28</p>
                  </td>
                  <td>
                    <p class="mr-16">06/02/2020</p>
                  </td>
                  <td>
                    <p class="mr-16">Product Designer</p>
                  </td>
                  <td>
                    <div class="w-20 h-6 flex items-center mr-16 justify-center bg-red-50 rounded-full">
                      <p class="text-xs leading-3 text-red-500">Banned</p>
                    </div>
                  </td>

                  <td>
                    <div class="flex items-center">
                      <button
                        class="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Edit
                      </button>
                      <button
                        class="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Call
                      </button>
                      <div class="relative px-5 pt-2">
                        <button class="focus:outline-none" @click="table9 = !table9">
                          <svg class="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" fill="none">
                            <path
                              d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </button>
                        <div v-if="table9" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-20">
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="h-20 text-sm leading-none text-gray-700 bg-white hover:bg-gray-100">
                  <td class="pl-4">10</td>
                  <td class="pl-11">
                    <div class="flex items-center">
                      <img class="shadow-md rounded-full w-10 h-10 mr-3"
                        src="https://cdn.tuk.dev/assets/templates/olympus/invoice(10).png" />
                      Desirae Dorwart
                    </div>
                  </td>
                  <td>
                    <p class="mr-16 pl-10">28</p>
                  </td>
                  <td>
                    <p class="mr-16">06/02/2020</p>
                  </td>
                  <td>
                    <p class="mr-16">Product Designer</p>
                  </td>
                  <td>
                    <div class="w-20 h-6 flex items-center mr-16 justify-center bg-blue-50 rounded-full">
                      <p class="text-xs leading-3 text-blue-500">Approved</p>
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center">
                      <button
                        class="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Edit
                      </button>
                      <button
                        class="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Call
                      </button>
                      <div class="relative px-5 pt-2">
                        <button class="focus:outline-none" @click="table10 = !table10">
                          <svg class="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" fill="none">
                            <path
                              d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                              stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </button>
                        <div v-if="table10" class="dropdown-content bg-white shadow w-24 absolute z-30 -ml-20">
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div class="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Transition>
    <div id="popup" role="dialog" aria-modal="true" class="w-full h-full fixed left-0 top-0" v-if="add">
      <div class="absolute bg-slate-900/40 inset-0 backdrop-blur-sm" @click="add = false"></div>
      <div class="w-full py-8 h-full flex items-center justify-center md:px-0 px-4">
        <div
          class="rounded-md w-full overflow-y-auto lg:h-auto h-full sm:w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5 relative">
          <div
            class="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
            <p class="text-base font-semibold">Añadir Registro</p>
            <button @click="add = false" class="focus:outline-none">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7L7 21" stroke="#A1A1AA" stroke-width="1.75" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M7 7L21 21" stroke="#A1A1AA" stroke-width="1.75" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="px-4 md:px-10 pt-8 md:pt-8 md:pb-6 pb-8 bg-white rounded-b-md">
            <Form @submit="submit">
              <div class="sm:flex items-center sm:pt-0">
                <div class="sm:w-1/2 mt-2">
                  <input type="text" name="rut" id="rut" placeholder="RUT"
                    class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                </div>
                <div class="sm:w-1/2 ml-9">
                </div>
              </div>
              <div class="sm:flex items-center sm:pt-0 sm:mt-4 sm:space-x-9">

                <div class="sm:w-1/2 mt-2">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" placeholder="Nombres" 
                    class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                </div>

                <div class="sm:w-1/2 mt-2">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" placeholder="Apellidos"
                    class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                </div>

              </div>
              <div class="sm:flex items-center sm:pt-0 sm:space-x-9 sm:mt-4">
                <div class="w-full mt-2">
                  <input type="text" name="street-address" id="street-address" autocomplete="street-address" 
                    placeholder="Dirección"
                    class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                </div>
              </div>
              <div class="sm:flex items-center sm:pt-0 sm:space-x-9 sm:mt-4">
                <div class="sm:w-1/2 mt-2">
                  <input type="text" name="city" id="city" autocomplete="address-level2" placeholder="Ciudad" 
                    class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                </div>
                <div class="sm:w-1/2 mt-2">
                  <div class="relative rounded-md shadow-sm">
                    <div class=" pointer-events-none absolute inset-y-0 left-0 border-r flex items-center p-3">
                      <span class="text-gray-500 sm:text-sm">+56</span>
                    </div>
                    <input type="text" name="phone" id="phone" placeholder="Teléfono"
                      class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 pl-16 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />

                  </div>
                </div>
              </div>
              <div class="sm:flex items-center sm:pt-0  sm:space-x-9 sm:mt-3">
                <div class="w-full mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" placeholder="Email" 
                    class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />

                </div>
              </div>
              <div class="sm:flex items-end sm:pt-0 sm:space-x-9 sm:mt-3">

                <div class="sm:w-1/2 w-full">
                  <span class="text-sm font-semibold leading-6 text-gray-600">Fecha de nacimiento</span>
                  <input type="date"
                    class="w-full mt-1 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    placeholder="Fecha de Nacimiento" />
                </div>
                <div class="w-full sm:w-1/2 sm:mt-2 mt-4 bg-white border rounded border-gray-200 py-2.5 px-3">
                  <select class="text-sm p-0 text-gray-500 border-0 w-full focus:outline-none">
                    <option class="bg-slate-200" selected disabled value="">Estado Civil</option>
                    <option>Soltero(a)</option>
                    <option>Casado(a)</option>
                    <option>Conviviente civil</option>
                    <option>Separado(a) judicialmente</option>
                    <option>Divorciado(a)</option>
                    <option>Viudo(a)</option>
                  </select>
                </div>
              </div>
              <div class="mt-6">
                <textarea placeholder="Comentarios"
                  class="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none"></textarea>
              </div>

            <div class="flex items-center justify-between mt-9">
              <button @click="add = false"
                class="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                Cerrar
              </button>
              <button type="submit"
                class="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                Añadir
              </button>
            </div>
          </Form>
          </div>
        </div>
      </div>
    </div>
  </Transition>

</template>

<script>

export default {

  data() {
    return {
      add: false,
      items: [],
    };
  },
  methods: {
    showItem(item) {
      // Implementar funcion para mostrar
    },
    editItem(item) {
      // Implementar funcion para editar
    },
    deleteItem(item) {
      // Implementar funcion para borrar
    },
    submit(values) {
      console.log(values)
    }
  },
  mounted() {
    // Fetch
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.15s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>