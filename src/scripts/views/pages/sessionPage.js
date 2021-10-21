const sessionPage = {
  async render() {
    return `
      <section class="mx-auto w-full pb-40 bg-contain bg-bottom">
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

           <!-- Session Day -->
           <div class="flex items-center text-center text-sm">
               <div class="relative flex-shrink-0 z-10 bg-gray-800 w-1/3 h-32 mx-auto rounded-xl mt-10 text-white pt-4 shadow">
                   <span class="iconify absolute -bottom-6 left-1/2 z-0 transform -translate-x-1/2 text-gray-800 text-5xl text-white" data-icon="bx:bxs-down-arrow"></span>
                   <p class="font-bold">Day 1</p>
                   <p>Friday</p>
                   <p>05 November 2021</p>
               </div>
               <div class="relative flex-shrink-0 z-10 w-1/3 h-32 bg-white mx-auto rounded-xl mt-10 text-blue-900 pt-4 shadow">
                   <span class="iconify absolute -bottom-6 left-1/2 z-0 transform -translate-x-1/2 text-5xl text-white" data-icon="bx:bxs-down-arrow"></span>
                   <p class="font-bold">Day 2</p>
                   <p >Saturday</p>
                   <p>06 November 2021</p>
               </div>
               <div class="relative flex-shrink-0 z-10 w-1/3 h-32 bg-white mx-auto rounded-xl mt-10 text-blue-900 pt-4 shadow">
                   <span class="iconify absolute -bottom-6 left-1/2 z-0 transform -translate-x-1/2 text-5xl text-white" data-icon="bx:bxs-down-arrow"></span>
                   <p class="text-blue-900 font-bold">Day 3</p>
                   <p>Monday</p>
                   <p>07 November 2021</p>
               </div>
           </div>
           <!-- Session Day -->

           <div class="text-blue-900 ">
               <div class="flex items-center px-20 box-border gap-x-4 h-32 bg-white mx-auto rounded-xl mt-10">
                   <div class="w-16 h-16 bg-green-400 rounded-full pl-16">
                   </div>
                   <div class="text-center w-full">
                       <p class="text-black text-sm">
                           9AM-11AM
                       </p>
                       <p class="text-base font-bold text-gray-800">
                           Session 01
                       </p>
                       <p class="text-gray-900 text-sm">
                           Preserving Historical Objects
                       </p>
                   </div>
               </div>
               <div class="flex items-center px-20 box-border gap-x-4 h-32 bg-white mx-auto rounded-xl mt-10">
                   <div class="w-16 h-16 bg-green-400 rounded-full pl-16">
                   </div>
                   <div class="text-center w-full">
                       <p class="text-black text-sm">
                           13PM-15PM
                       </p>
                       <p class="text-base font-bold text-gray-800">
                           Session 01
                       </p>
                       <p class="text-gray-900 text-sm">
                           Preserving Historical Objects
                       </p>
                   </div>
               </div>
               <div class="flex items-center px-20 box-border gap-x-4 h-32 bg-white mx-auto rounded-xl mt-10">
                   <div class="w-16 h-16 bg-green-400 rounded-full pl-16">
                   </div>
                   <div class="text-center w-full">
                       <p class="text-black text-sm">
                           16AM-18AM
                       </p>
                       <p class="text-base font-bold text-gray-800">
                           Session 01
                       </p>
                       <p class="text-gray-900 text-sm">
                           Preserving Historical Objects
                       </p>
                   </div>
               </div>

           </div>

       </section>
    `;
  },
  async afterRender() {
    async function getDataDay(url){

    const response = await fetch(url);
    const {data} =  await response.json();
    return data;

    };

    //get API
    getDataDay('http://192.168.18.82:8055/items/day').then(result =>{

        const elementHtml = document.querySelector('#day');
        const day =(data) =>`
        <button id="button-day" onclick="gatau()">
            <div class="relative bg-white hover:bg-gray-400 w-9/12 h-32 text-base mx-auto rounded-xl mt-10  text-gray-800 pt-4">
                <p class="font-bold">${data.day_name}</p>
                <p>${data.day_desc}</p>
                <p>${data.day_date}</p>
            </div>
        </button>
        `;

        result.map(data=>{
            elementHtml.innerHTML += day(data);
        });
    })


    async function getDataSession(url){

        const response = await fetch(url);
        const {data} =  await response.json();
        return data;

    };


    function gatau(){
        //get API
        getDataSession('http://192.168.18.82:8055/items/session').then(result =>{

        const elementHtml = document.querySelector('#session');
        const session =(data) =>`
        <div class="flex items-center px-20 box-border w-11/12 h-32 bg-white mx-auto rounded-xl mt-10">
            <div class="w-16 h-16 bg-green-400 rounded-full pl-16"></div>
                <div class="text-center w-full">
                    <p class="text-xs md:text-base text-black">${data.session_type}</p>
                    <p class="text-base md:text-xl font-bold text-gray-800">${data.start_time}</p>
                    <p class="text-xl md:text-base text-gray-900">${data.session_desc}</p>
            </div>
        </div>
        `;

        result.map(data=>{
            elementHtml.innerHTML += session(data);
        });
        })
    }  
  }
};

export default sessionPage;
