import GetData from '../../utils/getDataApi';

const sessionPage = {
  async render() {
    return `
      <section class="mx-auto w-full">
          <!-- navigation back -->
          <div class="flex items-center justify-between">
            <button>
              <a href="#">
                <span class="iconify text-4xl" data-icon="bi:arrow-left-short"></span>
              </a>
            </button>

            <h1 class="text-center font-bold">Event Dashboard</h1>
            <div></div>
          </div>

           <div class="flex items-center justify-center mt-3">
               <h2 class="font-bold">Active Now : </h2>
               <p class="font-bold text-blue-900 ml-2"> 329</p>
           </div>
          <!-- navigation back -->


          <!--GRID-->
          <div id="day"class="grid grid-cols-3 text-center gap-x-2"></div>

          <div id="session" class="text-blue-900 block hidden"></div>

       </section>
    `;
  },
  async afterRender() {
    const dayElement = document.querySelector('#day');

    const day =(data) =>`
    <button id="button-day" onclick="clickDataSession()">
        <div class="relative bg-white hover:bg-gray-400 mx-auto rounded-xl mt-10  text-gray-800 py-4 px-2 text-sm truncate">
            <p class="font-bold">${data.day_name}</p>
            <p class="truncate text-xs">${data.day_desc}</p>
            <p class="text-xs">${data.day_date}</p>
        </div>
    </button>
    `;

    //get API
    GetData('http://192.168.18.80:8055/items/day').then(result =>{




        result.map(data=>{
            elementHtml.innerHTML += day(data);
        });
    })

    Promise.all([
      GetData('http://192.168.18.226:8001/items/day')
    ]).then(async([res1]) => {
      res1.map((data) => {
        dayElement.innerHTML += day(data)
      })
    })

    // function clickDataSession(){
        //get API
        GetData('http://192.168.18.80:8055/items/session').then(result =>{
            const elementHtml = document.querySelector('#session');

            if(elementHtml.classList.contains("active")){
                document.getElementById("#session").style.display = 'none';
            }
            else{
                const session =(data) =>`

                <div class="flex items-center px-20 box-border w-11/12 h-32 bg-white mx-auto rounded-xl mt-10">
                    <div class="w-16 h-16 bg-green-400 rounded-full pl-16"></div>
                        <div class="text-center w-full">
                            <p class="text-xs md:text-base text-black">${data.session_type}</p>
                            <p class="text-base md:text-xl font-bold text-gray-800">${data.start_time}</p>
                            <p class="text-xl md:text-base text-gray-900">${data.session_desc}</p>
                    </div>
                </div>
                `
                elementHtml.classList.add("active");

                result.map(data=>{
                    elementHtml.innerHTML += session(data);
                });

                document.getElementById("#session").style.display = 'block';
            }
        })
    }
};

export default sessionPage;
