import getData from '../../utils/getDataApi';
import { elementStatusCheckIn } from '../templates/participantList/elementStatusCheckIn';
import { elementParticipants } from '../templates/participantList/elementParticipants';

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

          <!-- Status Check in -->
          <div id="checkInStatus" class="mx-auto my-8 flex items-center justify-center font-semibold">

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
  const elementParticipant = document.querySelector('#participant');
  const checkInStatusElement = document.querySelector('#checkInStatus');


  Promise.all([
    getData('http://192.168.18.226:8055/items/customer'),
    getData('http://192.168.18.54:8055/items/registration?aggregate[countDistinct]=id_participant&filter[validated_on][_between]=[2020-01-1,2200-12-12]')
  ]).then(async([res1, res2]) => {

    res1.map((data) => {
      elementParticipant.innerHTML += elementParticipants(data);
    });

    res2.map((data) => {
      checkInStatusElement.innerHTML = elementStatusCheckIn(data.countDistinct.id_participant);
    })

  }).catch((err) => {
    console.log(err);
  })


  }
};

export default participantPage;
