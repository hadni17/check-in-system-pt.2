import UrlParser from '../../routes/urlParser';
import GetData from '../../utils/getDataApi';

const participantDetail = {
  async render() {
    return `
      <section class="w-full mx-auto pb-40 bg-bottom ">

      <!-- Navigation -->
        <div class="flex items-center justify-between">
          <a href="/#/participants" class="pl-5">
              <span class="iconify text-4xl" data-icon="bi:arrow-left-short"></span>
          </a>
          <h1 class="mx-auto font-semibold">Participant Detail</h1>
          <div></div>
        </div>
      <!-- Navigation -->

        <div class="box-border w-full bg-white mx-auto rounded-lg mt-10 mb-10 pb-5 md:px-7 px-4">
          <div id="custumer" class="flex items-center justify-between border-b-2 border-dashed">

          </div>


          <!--GRID-->
            <div class="grid grid-cols-2 ">
                <!--LEFT-->
                <div>
                  <!--ID-->
                  <div id="participant"></div>

                  <div id="ticket"></div>

                </div>

                <!-- RIGHT -->
                <div>
                  <!--CHECK-IN-->
                  <div id="registration">
                      <p class="text-gray-400 pt-4 font-medium text-xs">CHECK-IN TIME</p>
                  </div>
                </div>
            </div>
          <!--GRID CLOSE-->

          <!--MERCHANDISE-->
          <form>
              <p class="text-gray-400 py-4 font-medium text-xs">MERCHANDISE</p>

              <div id="merch">

              </div>

              <!--BUTTON SUBMIT-->
              <a href="#" type="button" class="mt-6 flex justify-center bg-blue-400 text-white w-4/5 mx-auto py-2 rounded-md"><b>Submit</b></a>
          </form>
          <!--MERCHANDISE CLOSE-->
        </div>
      </section>
    `;
  },
  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner()

    // Get Data Costumer
    GetData(`http://192.168.18.68:8055/items/order?fields=customer_id.customer_id,customer_id.customer_name,ticket_id.ticket_id,ticket_id.ticket_type&filter[customer_id]=${id}`).then(result =>{
      const elementName = document.querySelector('#custumer');
      const customerName = (data) =>`
        <div class="w-9/12">
          <p class="text-gray-400 pt-4 font-medium text-xs">PARTICIPANT NAME</p>
          <p class="font-bold text-lg truncate">${result[0].customer_id.customer_name}</p>
        </div>

        <!--NOTIFY CHECKED-->
        <div class="py-1 px-2 rounded-lg text-white text-center text-xs bg-green-500">Checked</div>

      `;
      const elementId = document.querySelector('#participant');
      const customerId = (data) => `
        <p class="text-gray-400 pt-4 font-medium text-xs">ID PARTICIPANT</p>
        <p class="font-bold text-md py-2">${result[0].customer_id.customer_id}</p>
      `;
      const elementDesc = document.querySelector('#ticket');
      const description =(data) =>`
         <p class="text-gray-400 pt-4 font-medium text-xs">TICKET TYPE</p>
         <p class="font-bold text-xs py-2">${result[0].ticket_id.ticket_type}</p>
       `;

      result.map(data=>{
        elementName.innerHTML = customerName(data);
        elementId.innerHTML = customerId(data);
        elementDesc.innerHTML = description(data);
      });
    })

    // Get Data Registration
    GetData(`http://192.168.18.60:8055/items/registration?filter[id_participant]=${id}&aggregate[min]=validated_on`).then(result =>{

      const validatedOn = document.querySelector('#registration');
      const registration =(data) =>`
          <p class="font-bold text-xs py-2">${data.min.validated_on}</p>
       `;
      result.map(data=>{
       //  elementHtml.innerHTML += session(data);
         validatedOn.innerHTML += registration(data);
      });
    })

    // Get data Merch
    GetData(`http://192.168.18.65:8055/items/peserta_x_merch_eligible?fields=id_peserta_x_merch,id_merch_eligible.id_merch.nama_merch&filter[id_peserta_x_merch]=${id}`).then(result =>{
        // console.log(result.id_merch_eligible)
        result.map(data=>{
            // console.log(data.id_merch_eligible.id_merch.nama_merch)

            const elementHtml = document.querySelector('#merch');
            const merchandise =(data) =>`
            <div class="form-check text-xs block">
              <input class="form-check-input" type="checkbox" value="${data.id_merch_eligible.id_merch.nama_merch}" id="flexCheckDefault">
                <label class="form-check-label pl-2 font-medium truncate" for="flexCheckDefault">
                    ${data.id_merch_eligible.id_merch.nama_merch}
                </label>
            </div>
            `;

            elementHtml.innerHTML += merchandise(data);
        });
    });


  }
};

export default participantDetail;
