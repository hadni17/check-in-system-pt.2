const activeSession = {
  async render() {
    return `
      <section class="w-full">
        <div class="flex items-center w-full">
            <a href="/#/">
                <span class="iconify text-4xl" data-icon="bi:arrow-left-short"></span>
            </a>
            <h1 class="mx-auto text-base"><b>Active Session</b></h1>
        </div>

        <!--BUTTON SESSION 01-->
        <div class="flex justify-center pt-6 py-4">
            <a href="/#/scan" class="bg-white py-4 rounded-md shadow-lg px-4">
                <div class="flex items-center justify-between gap-x-3 flex-row">
                    <div class="rounded-full h-16 w-16 " style="background: #05FF00;"></div>
                    <div class="text-left m-auto">
                        <p class="text-xs">9AM-11AM</p>
                        <p class="font-bold text-lg">Session 01</p>
                        <p class="text-sm truncate">Preserving Historical Objects</p>
                    </div>
                </div>
            </a>
        </div>
        <!--BUTTON SESSION 01 CLOSE-->

        <!--BUTTON SESSION 02-->
        <div class="flex justify-center py-4">
            <a href="/#/scan" class="bg-white py-4 rounded-md shadow-lg px-4">
                <div class="flex items-center justify-between gap-x-3 flex-row">
                    <div class="rounded-full h-16 w-16 " style="background: #05FF00;"></div>
                    <div class="text-left m-auto">
                        <p class="text-xs">13PM-15PM</p>
                        <p class="font-bold text-lg">Session 02</p>
                        <p class="text-sm truncate">Preserving Historical Objects</p>
                    </div>
                </div>
            </a>
        </div>
        <!--BUTTON SESSION 02 CLOSE-->

        <!--BUTTON SESSION 03-->
        <div class="flex justify-center py-4">
            <a href="/#/scan" class="bg-white py-4 rounded-md shadow-lg px-4">
                <div class="flex items-center justify-between gap-x-3 flex-row">
                    <div class="rounded-full h-16 w-16 " style="background: #05FF00;"></div>
                    <div class="text-left m-auto">
                        <p class="text-xs">16PM-18PM</p>
                        <p class="font-bold text-lg">Session 03</p>
                        <p class="text-sm truncate">Preserving Historical Objects</p>
                    </div>
                </div>
            </a>
        </div>
      </section>
    `;
  },
  async afterRender() {

  }
};

export default activeSession;
