const participantName = (data) => `
  <div class="w-9/12">
    <p class="text-gray-400 pt-4 font-medium text-xs">PARTICIPANT NAME</p>
    <p class="font-bold text-lg truncate">${data.customer_id.customer_name}</p>
  </div>

  <!--NOTIFY CHECKED-->
  <div class="py-1 px-2 rounded-lg text-white text-center text-xs bg-green-500">Checked</div>
`;

const participantId = (data) => `
  <p class="text-gray-400 pt-4 font-medium text-xs">ID PARTICIPANT</p>
  <p class="font-bold text-md py-2">${data.customer_id.customer_id}</p>
`;

const description =(data) =>`
   <p class="text-gray-400 pt-4 font-medium text-xs">TICKET TYPE</p>
   <p class="font-bold text-xs py-2">${data.ticket_id.ticket_type}</p>
`;

const registration = (data) => `
  <p class="font-bold text-xs py-2">${data.min.validated_on}</p>
`;

const merchandise = (data) => `
  <div class="form-check text-xs block">
    <input class="form-check-input" type="checkbox" value="${data.id_merch_eligible.id_merch.nama_merch}" id="flexCheckDefault">
      <label class="form-check-label pl-2 font-medium truncate" for="flexCheckDefault">
          ${data.id_merch_eligible.id_merch.nama_merch}
      </label>
  </div>
`;

export {
  participantName,
  participantId,
  description,
  registration,
  merchandise
};
