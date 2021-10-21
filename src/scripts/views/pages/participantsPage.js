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

          <div class="mt-2">
            <div class="bg-white flex items-center rounded-xl shadow-xl mx-auto px-2 text-gray-600">
                <input class="rounded-xl w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none" id="text" type="text" placeholder="Participant ID/Link">

              <!--ICONIFY FILTER-->
              <div class="filter md:filter-none px-4">
                <a href="#">
                 <span class="iconify" data-icon="bi:filter-circle-fill"></span>
                </a>
              </div>

                <!--ICONIFY SEARCH-->
              <div class="">
                <a href="DashPart_Detail.html">
                  <span class="iconify" data-icon="akar-icons:search"></span>
                </a>
              </div>

              <!--ICONIFY QR CODE-->
              <div class="px-2">
                <a href="DashPart_Scan.html">
                  <span class="iconify" data-icon="ic:outline-qr-code-scanner"></span>
                </a>
              </div>

            </div>
          </div>

          <div class="overflow-x-scroll	bg-white mx-auto rounded-xl mt-10 py-4">
            <table class="text-xs table-auto w-full border-solid divide-y divide-black" >
                <thead>
                <tr >
                    <th>Nama</th>
                    <th>Id tiket</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody id="participant" class="text-center">

                </tbody>
            </table>
          </div>
        </section>
    `;
  },

  async afterRender() {
    async function getData(url){
      const response = await fetch(url);

      const { data } = await response.json()

      console.log(data)

      return data;

      console.log( await response.json());
    };

    //get API
  getData('http://192.168.18.82:8055/items/customer').then(result => {
    //console.log(result);

      const elementHtml = document.querySelector('#participant');
       let nomor = 1;

       const elementParticipant = data =>`
         <tr>
           <td>${ data.customer_name }</td>
           <td>${ data.customer_id }</td>
           <td>
           <a href="/#/participant/asdad">
             <button class="bg-blue-500 hover:bg-gray-700 text-white font-bold px-3 py-1 md:py-2 md:px-4 rounded-full my-2">
             Detail
           </button>
           </a>
           </td>
         </tr>`
         ;

      result.map(data => {
       elementHtml.innerHTML += elementParticipant(data);
      });
    })
  }
};

export default participantPage;
