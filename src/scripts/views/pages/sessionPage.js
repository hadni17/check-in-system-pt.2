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
        <div class="relative bg-white hover:bg-yellow-100 mx-auto rounded-xl mt-10  text-gray-800 py-4 px-2 text-sm truncate">
            <p class="font-bold">${data.day_name}</p>
            <p class="truncate text-xs">${data.day_desc}</p>
            <p class="text-xs">${data.day_date}</p>
        </div>
    </button>
    `;


    Promise.all([
      GetData('http://192.168.0.125:8001/items/day'),
      // GetData('http://192.168.0.125:8001/items/session?filter[day(start_time)][_eq]=01'),
      // GetData('http://192.168.0.125:8001/items/session?filter[day(start_time)][_eq]=03'),
      // GetData('http://192.168.0.125:8001/items/session?filter[day(start_time)][_eq]=05')
    ]).then(async([res1]) => {
      res1.map((data) => {
        dayElement.innerHTML += day(data)
      })
    }).catch((error) => {
      console.log(error);
    })
  }
};

export default sessionPage;
