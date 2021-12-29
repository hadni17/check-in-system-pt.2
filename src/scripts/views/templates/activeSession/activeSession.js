const sessionTemplate = (data) => `
  <div class="flex justify-center mx-auto rounded-xl mt-8">
    <a href="/#/scan/${data.session_id}" class="bg-white w-3/4 py-4 rounded-md shadow-lg px-4">
        <div class="text-center hover:bg-gray-100">
            <p class="text-base md:text-xl font-bold text-gray-800">${data.session_type}</p>
            <p class="text-xl md:text-base text-gray-900">${data.session_desc}</p>
            <p class="text-xs md:text-base text-black">${data.start_time}</p>
            <p class="text-xs md:text-base text-black">${data.session_speaker_name}</p>
        </div>
    </a>
  </div>
`;

export {
  sessionTemplate,
}