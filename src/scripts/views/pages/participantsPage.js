const participantPage = {
  async render() {
    return `
        <section class="mx-auto pb-40">
        <div class="flex items-center justify-between pt-2">
          <button>
            <a href="/#/">
              <span class="iconify text-4xl" data-icon="bi:arrow-left-short"></span>
            </a>
          </button>
          <h1 class="text-center font-bold text-base">List Participants</h1>
          <div></div>
        </div>

          <div class="overflow-x-scroll	bg-white mx-auto rounded-xl mt-10 py-4">
                <table class="text-xs table-auto w-full border-solid divide-y divide-black" >
                    <thead>
                    <tr >
                        <th>No</th>
                        <th>Nama</th>
                        <th>Id tiket</th>
                        <th>Jns. Peserta</th>
                        <th >Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody class="text-center">
                        <tr>
                          <td>1</td>
                          <td class=" ">Agung Saepudin</td>
                          <td>D1293045</td>
                          <td>Public</td>
                          <td>Uncheck</td>
                          <td>
                            <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                Detail
                            </button>
                          </td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td>2</td>
                            <td>Ahmad Syauqi D</td>
                            <td>D102934D</td>
                            <td>Guest</td>
                            <td>Checkout</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Alvin Simbolon</td>
                            <td>D188302X</td>
                            <td>Public</td>
                            <td>Uncheck</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td>4</td>
                            <td>Anggun Ayu L</td>
                            <td>D120495F</td>
                            <td>Public</td>
                            <td>Check-In</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Arafat Maku</td>
                            <td>D212129S</td>
                            <td>Public</td>
                            <td>Checkout</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td>6</td>
                            <td>Ari Sukarizo</td>
                            <td>D212129S</td>
                            <td>Guest</td>
                            <td>Uncheck</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Arnoud Sarayar</td>
                            <td>D129304S</td>
                            <td>Public</td>
                            <td>Uncheck</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td>8</td>
                            <td>Bela Kartika</td>
                            <td>D102934D</td>
                            <td>Public</td>
                            <td>Checkout</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Bongson Pane</td>
                            <td>D188302X</td>
                            <td>Media</td>
                            <td>Uncheck</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td>10</td>
                            <td>Edwina Christy</td>
                            <td>D120495F</td>
                            <td>Public</td>
                            <td>Check-In</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Fika Febrika</td>
                            <td>D212129S</td>
                            <td>Public</td>
                            <td>Checkout</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td>12</td>
                            <td>Frumentius D</td>
                            <td>D212129S</td>
                            <td>Media</td>
                            <td>Uncheck</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Indah P. Larasati</td>
                            <td>D129304S</td>
                            <td>Guest</td>
                            <td>Checkout</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td>14</td>
                            <td>Jerome Polen</td>
                            <td>D102934D</td>
                            <td>Guest</td>
                            <td>Check-In</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Mina Rafid</td>
                            <td>D188302X</td>
                            <td>Public</td>
                            <td>Checkout</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td>16</td>
                            <td>Muhammad Sultan</td>
                            <td>D120495F</td>
                            <td>Public</td>
                            <td>Uncheck</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Nabillah Adani</td>
                            <td>D212129S</td>
                            <td>Media</td>
                            <td>Checkout</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td>18</td>
                            <td>Novia Samosir</td>
                            <td>D212129S</td>
                            <td>Public</td>
                            <td>Uncheck</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>Shelzi Grayxena</td>
                            <td>D129304S</td>
                            <td>Public</td>
                            <td>Checkout</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td>20</td>
                            <td>Tamia Indah I</td>
                            <td>D102934D</td>
                            <td>Media</td>
                            <td>Uncheck</td>
                            <td>
                              <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-2 py-1 rounded-full my-2">
                                  Detail
                              </button>
                            </td>
                        </tr>
                </table>
                <div class="my-10 flex items-center justify-between">
                  <h2 class="ml-10">
                    1 - 20 of 100
                  </h2>
                  <h2 class="inline-flex mr-10">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                      <span class="iconify" data-icon="bx:bxs-left-arrow"></span>
                    </button>
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                      <span class="iconify" data-icon="bx:bxs-right-arrow"></span>
                    </button>
                  </h2>
                </div>
          </div>
        </section>
    `;
  },

  async afterRender() {

  }
};

export default participantPage;
