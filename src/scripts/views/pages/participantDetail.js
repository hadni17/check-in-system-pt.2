const participantDetail = {
  async render() {
    return `
      <section class="w-full mx-auto pb-40 bg-bottom ">
        <div class="flex items-center justify-between">
          <a href="/#/participants" class="pl-5">
              <span class="iconify text-4xl" data-icon="bi:arrow-left-short"></span>
          </a>
          <h1 class="mx-auto font-semibold">Participant Detail</h1>
          <div></div>
        </div>


        <div class="box-border w-full bg-white mx-auto rounded-lg mt-10 mb-10 pb-5">
                <div class="flex items-center justify-between px-5 border-b-2 border-dashed">
                    <div>
                        <p class="text-gray-400 pt-4 font-medium text-xs">PARTICIPANT NAME</p>
                        <p class="font-bold  text-xl">Indah P. Larasati</p>
                    </div>

                    <!--NOTIFY CHECKED-->
                    <div class="w-1/4 py-1 rounded-lg text-white text-center mt-6 text-xs" style="background: #39A852;">Checked</div>
                </div>
                <!--GRID-->
                <div class="grid grid-cols-2 px-5">

                    <!--LEFT-->
                    <div>

                        <!--ID-->
                        <div>
                            <p class="text-gray-400 pt-4 font-medium text-xs">ID</p>
                            <p class="font-bold text-md">D109201S</p>
                        </div>

                        <!--TICKET TYPE-->
                        <div>
                            <p class="text-gray-400 pt-4 font-medium text-xs">TICKET TYPE</p>
                            <p class="font-bold text-md">Day 1-3</p>
                        </div>

                        <!--HISTORY-->
                        <div>
                            <p class="text-gray-400 pt-4 font-medium text-xs">HISTORY</p>
                            <div class="font-bold text-sm pb-6 pt-1">
                                <p>07 Okt - 08.30</p>
                                <p>07 Okt - 10.30</p>
                                <p>07 Okt - 13.30</p>
                                <p>07 Okt - 14.30</p>
                                <p>08 Okt - 08.30</p>
                                <p>08 Okt - 13.30</p>
                                <p>09 Okt - 08.30</p>
                                <p>09 Okt - 13.30</p>
                                <p>09 Okt - 18.30</p>
                            </div>
                        </div>

                    </div>
                    <!--LEFT CLOSE-->

                    <!--RIGHT-->
                    <div>

                        <!--CHECK-IN-->
                        <div>
                            <p class="text-gray-400 pt-4 font-medium text-xs">CHECK-IN TIME</p>
                            <p class="font-bold text-md">08.30</p>
                        </div>

                        <!--PARTICIPANT TYPE-->
                        <div>
                            <p class="text-gray-400 pt-4 font-medium text-xs">PARTICIPANT TYPE</p>
                            <p class="font-bold text-md italic">Public</p>
                        </div>

                        <!--MERCHANDISE-->
                        <div>
                            <p class="text-gray-400 pt-4 font-medium text-xs">MERCHANDISE</p>
                            <div class="pt-1">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label pl-2 font-bold text-sm" for="flexCheckDefault">
                                      Package
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label pl-2 font-bold text-sm" for="flexCheckDefault">
                                      Co-Card
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label pl-2 font-bold text-sm" for="flexCheckDefault">
                                      Certificate
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!--MERCHANDISE CLOSE-->
                    </div>
                    <!--RIGHT CLOSE-->
                </div>
                <!--GRID CLOSE-->

                <!--BUTTON SUBMIT-->
                <a href="DashPart_Scan.html" type="button" class="flex justify-center bg-blue-400 text-white w-4/5 mx-auto py-2 rounded-md"><b>Submit</b></a>
            </div>
      </section>
    `;
  },
  async afterRender() {
    async  function getData(url){
        const response = await fetch(url);
        const {data} =  await response.json();
        return data;

    };

    getData('http://192.168.18.80:8055/items/order?fields=customer_id.customer_id,customer_id.customer_name,ticket_id.ticket_id,ticket_id.ticket_type&filter[customer_id]=2').then(result =>{

        const elementName = document.querySelector('#customer');
        const customerName =(data) =>`
            <p class="text-gray-400 pt-4 font-medium text-xs">PARTICIPANT NAME</p>
            <p class="font-bold  text-xl">${result[0].customer_id.customer_name}</p>
        `;
        const elementId = document.querySelector('#participant');
        const customerId = (data) => `
            <p class="text-gray-400 pt-4 font-medium text-xs">ID PARTICIPANT</p>
            <p class="font-bold text-md">${result[0].customer_id.customer_id}</p>
        `;
        const elementDesc = document.querySelector('#ticket');
        const description =(data) =>`
             <p class="text-gray-400 pt-4 font-medium text-xs">TICKET TYPE</p>
             <p class="font-bold text-md">${result[0].ticket_id.ticket_type}</p>
         `;
    result.map(data=>{
        elementName.innerHTML = customerName(data);
        elementId.innerHTML = customerId(data);
        elementDesc.innerHTML = description(data);
    });
    })

    async function getDataRegistration(url){
        const response = await fetch(url);
        const {data} =  await response.json();
        return data;

    };
    getDataRegistration('http://192.168.18.68:8055/items/registration?filter[id_participant]=2').then(result =>{

        const elementHtml = document.querySelector('#session');
        const session =(data) =>`
        <div class="font-bold text-md pb-6">
            <p>${data.id_session}</p>
        </div>
        `;
        const validatedOn = document.querySelector('#registration');
        const registration =(data) =>`
            <p class="font-bold text-md">${data.validated_on}</p>
         `;
        result.map(data=>{
           elementHtml.innerHTML += session(data);
           validatedOn.innerHTML += registration(data);
        });
    })

    async function getDataMerch(url){
        const response = await fetch(url);
        const {data} =  await response.json();
        return data;

    };
    getDataRegistration('http://192.168.18.83:8055/items/peserta_x_merch_eligible?fields=id_peserta_x_merch,id_merch_eligible.id_merch.nama_merch&filter[id_peserta_x_merch]=2').then(result =>{
        // console.log(result.id_merch_eligible)
        result.map(data=>{
            // console.log(data.id_merch_eligible.id_merch.nama_merch)

            const elementHtml = document.querySelector('#merch');
            const merchandise =(data) =>`
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label pl-2 font-bold text-md" for="flexCheckDefault">
                        ${data.id_merch_eligible.id_merch.nama_merch}
                    </label>
            </div>
            `;

            elementHtml.innerHTML += merchandise(data);
        });
    })
  }
};

export default participantDetail;
