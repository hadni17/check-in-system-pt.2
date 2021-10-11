const scanPage = {
  async render() {
    return `
      <section class="mx-auto w-full">
        <div class="flex items-center">
          <button>
            <a href="/#/">
              <span class="iconify text-4xl" data-icon="bi:arrow-left-short"></span>
            </a>
          </button>
          <h1 class="text-xl font-semibold mx-auto" style="font-family: 'Montserrat', sans-serif;">QR Scan</h1>
        </div>

        <! -- Scanner -->
        <div class="relative w-5/6 p-6 mt-16 shadow rounded-xl bg-white mx-auto">
          <video id="preview" class="w-full rounded-xl shadow-lg" >

          </video>
          <p class="mt-3" style="font-family:'Lora', serif;text-align: center;font-size: 11px;">Arahkan QR kedalam kotak, dong!</p>
        </div>


        <div class="w-5/6 mt-5 mx-auto">
           <div class="bg-white flex items-center rounded-xl shadow-xl mx-auto py-3">
               <input class="text-sm rounded-xl w-full px-6 text-gray-700 leading-tight focus:outline-none" id="text" type="text" placeholder="Search Your Participant ID">
             <div class="">
               <button class="text-white rounded-full hover:bg-blue-400 focus:outline-none w-9 h-9 mr-4 flex items-center justify-center">
                   <span class="iconify text-black text-2xl" data-icon="bx:bx-search-alt"></span>
               </button>
              </div>
           </div>
       </div>

      </section>
    `;
  },

  async afterRender() {
    const elementReviewVideo = document.getElementById('preview');
    const scanner = new Instascan.Scanner({ video: elementReviewVideo});

    Instascan.Camera.getCameras().then((camera) => {
      if(camera.length > 0) {
        scanner.start(camera[0]);
      } else {
        alert('No Camera Found!')
      }
    });

    scanner.addListener('scan', (result) => {
      document.getElementById('text').value = result;
    })
  }
};

export default scanPage;
