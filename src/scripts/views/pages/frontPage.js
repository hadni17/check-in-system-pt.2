const FrontPage = {
  async render() {
    return `
      <section class="text-center">
        Dashboard Admin


        <div class="grid sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-4 items-center w-full mt-9">
          <button name="button check in" class="shadow-md bg-gradient-to-b from-green-300 to-blue-300 hover:bg-gradient-to-b hover:from-green-400 hover:to-blue-400 rounded-md h-40 hover:shadow-lg text-blue-900">
            <span class="iconify mx-auto text-4xl" data-icon="la:user-check"></span>
            <span class="">Check In</span>
          </button>
          
          <button name="button check point" class="shadow-md bg-gradient-to-b from-yellow-300 to-yellow-400 hover:bg-gradient-to-b hover:from-yellow-400 hover:to-yellow-500 rounded-md h-40 hover:shadow-lg text-yellow-800">
            <span class="iconify mx-auto text-3xl" data-icon="bi:calendar2-check"></span>
            <span class="">Check Point</span>
          </button>

          <button name="button check point" class="shadow-md sm:bg-gradient-to-t sm:from-yellow-300 sm:to-yellow-400 sm:hover:bg-gradient-to-b sm:hover:from-yellow-400 sm:hover:to-yellow-500 hover:bg-gradient-to-b hover:from-green-400 hover:to-blue-400 bg-gradient-to-t from-green-300 to-blue-300 rounded-md h-40 hover:shadow-lg sm:text-yellow-800 text-blue-900">
            <span class="iconify mx-auto text-5xl" data-icon="ph:users-four-light"></span>
            <span class="">Data Peserta</span>
          </button>

          <button name="button check point" class="shadow-md sm:bg-gradient-to-t sm:from-green-300 sm:to-blue-300 sm:hover:bg-gradient-to-b sm:hover:from-green-400 sm:hover:to-blue-400 hover:bg-gradient-to-b hover:from-yellow-400 hover:to-yellow-500 bg-gradient-to-t from-yellow-300 to-yellow-400 rounded-md h-40 hover:shadow-lg sm:text-blue-900 text-yellow-800">
            <span class="iconify mx-auto text-5xl" data-icon="healthicons:i-schedule-school-date-time-outline"></span>
            <span class="">Session</span>
          </button>
        </div>

        <h5 class="mt-10 text-xs text-gray-600">Lumintu Logic</h5>
      </section>
    `;
  },

  async afterRender() {

  },
};

export default FrontPage;

