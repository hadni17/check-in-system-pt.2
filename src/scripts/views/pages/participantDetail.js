import UrlParser from '../../routes/urlParser';
import GetData from '../../utils/getDataApi';
import { participantName, participantId, description, registration, merchandise } from '../templates/participantDetail/participantTemplates';


const participantDetail = {
  async render() {
    return `
      <section class="w-full mx-auto pb-40 bg-bottom ">

      <!-- Navigation -->
        <div class="flex items-center justify-between">
          <button onClick="window.history.back();" class="pl-5">
              <span class="iconify text-4xl" data-icon="bi:arrow-left-short"></span>
          </button>
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
                  <div id="participant">
                    <div class="spinner">
                      <div class="spinner-2"></div>
                    </div>
                  </div>

                  <div id="ticket"></div>

                  <div id="session"></div>

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
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const elementName = document.querySelector('#custumer');
    const elementId = document.querySelector('#participant');
    const elementDesc = document.querySelector('#ticket');
    const validatedOn = document.querySelector('#registration');
    const merchElement = document.querySelector('#merch');


    Promise.all([
      GetData(`http://192.168.18.226:8055/items/order?fields=customer_id.customer_id,customer_id.customer_name,ticket_id.ticket_id,ticket_id.ticket_type&filter[customer_id]=${id}`),
      GetData(`http://192.168.18.54:8055/items/registration?filter[id_participant]=${id}&aggregate[min]=validated_on`),
      GetData(`http://192.168.18.65:8055/items/peserta_x_merch_eligible?fields=id_peserta_x_merch,id_merch_eligible.id_merch.nama_merch&filter[id_peserta_x_merch]=${id}`)
    ]).then(async([res1, res2, res3]) => {
      res1.map((data) => {
        console.log(data);

        elementName.innerHTML = participantName(data);
        elementId.innerHTML = participantId(data);
        elementDesc.innerHTML = description(data);
      });

      res2.map((data) => {
        validatedOn.innerHTML += registration(data);
      });

      res3.map((data) => {
        merchElement.innerHTML += merchandise(data)
      });


    }).catch((err) => {
      console.log(err)
    })

  }
};

export default participantDetail;
