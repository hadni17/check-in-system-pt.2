const FrontPage = {
  async render() {
    return `
      <section class="text-center">
        <a href="/" class="flex justify-center items-center mt-4">
          <div class="w-12 h-12">
            <img src="lumintu.svg">
          </div>
          <h1 class="ml-2 font-medium">
            Lumintu Event
          </h1>
        </a>


        <div class="grid sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-4 items-center w-full mt-9">
          <button name="button check in" class="shadow-md bg-white rounded-lg h-40 hover:shadow-lg text-gray-700">
            <a href="/">
              <span class="iconify mx-auto text-4xl" data-icon="la:user-check"></span>
              <span class="">Check In</span>
            </a>
          </button>
          
          <button name="button check point" class="shadow-md shadow-md bg-white rounded-lg h-40 h-40 hover:shadow-lg text-yellow-800">
            <a href="/">
              <span class="iconify mx-auto text-3xl" data-icon="bi:calendar2-check"></span>
              <span class="">Check Point</span>
            </a>
          </button>

          <button name="button check point" class="shadow-md shadow-md bg-white rounded-lg h-40 hover:shadow-lg sm:text-yellow-800 text-gray-700">
            <a href="/">
              <span class="iconify mx-auto text-5xl" data-icon="ph:users-four-light"></span>
              <span class="">Data Peserta</span>
            </a>
          </button>

          <button name="button check point" class="shadow-md shadow-md bg-white rounded-lg h-40 h-40 hover:shadow-lg text-yellow-800 sm:text-gray-700">
            <a href="/">
              <span class="iconify mx-auto text-5xl" data-icon="healthicons:i-schedule-school-date-time-outline"></span>
              <span class="">Session</span>
            </a>
          </button>
        </div>

        <div class="flex justify-center items-center mt-14 text-xs text-gray-600">
          <p>
          © 2021 Lumintu Event |
          </p>
          <a href="/" class="font-bold text-yellow-800 ml-1">
            Lumintu Logic
          </a> 
        </div>
      </section>
    `;
  },

  async afterRender() {

  },
};

export default FrontPage;

