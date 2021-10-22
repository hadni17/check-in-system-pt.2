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

        <!-- qr scan -->
         <div class="card relative w-4/5 p-6 mt-5 border rounded-xl bg-white mx-auto overflow-hidden">
            <div id="preview" class="rounded-xl w-full mx-auto text-sm"></div>
            <p class="mt-3" style="font-family:'Lora', serif;text-align: center;font-size: 11px;">arahkan QR kedalam kotak.</p>
         </div>

         <div class="mt-8">
             <div class="bg-white flex w-4/5 items-center rounded-xl shadow-xl mx-auto">
                 <input class="rounded-xl w-full py-1 px-6 text-gray-700 leading-tight focus:outline-none" id="cam-qr-result" type="text" placeholder="Search Your Participant ID">
               <div class="p-4">
                 <button class="text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                    <span class="iconify text-2xl text-gray-700" data-icon="bx:bx-search-alt"></span>
                 </button>
                </div>
             </div>
         </div>

      </section>
    `;
  },

  async afterRender() {
    const elementReviewVideo = document.getElementById('preview');
    
    // const html5QrCode =  new Html5Qrcode('preview');

    function onScanSuccess(decodedText, decodedResult) {
      // handle the scanned code as you like, for example:
      alert(decodedText);
      console.log(`Code matched = ${decodedText}`, decodedResult);
    }
    
    function onScanFailure(error) {
      // handle scan failure, usually better to ignore and keep scanning.
      // for example:
      console.warn(`Code scan error = ${error}`);
    }

    const html5QrcodeScanner = new Html5QrcodeScanner(
      "preview", { fps: 10, qrbox: 200 }, /* verbose= */ true);
    
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    
  }
};

export default scanPage;
