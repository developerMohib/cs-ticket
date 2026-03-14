const TicketCard = ({ ticket, handleTicket }) => {
  return (
    <button onClick={() => handleTicket(ticket.id)}>
      <div className="rounded-lg shadow p-4 border hover:shadow-md bg-white transition">

        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-800">
            {ticket.title}
          </h3>

          <p className={`px-3 py-1 text-xs rounded-full
          ${ticket.status === "Open" ? "bg-green-100 text-green-700" :
              "bg-yellow-100 text-yellow-700"}`}>

            <span
              className={`inline-block w-2 h-2 rounded-full
    ${ticket.status === "Open" ? "bg-green-500" : "bg-yellow-500"}
  `}
            ></span>

{"  "}            {ticket.status} </p>
        </div>

        <p className="text-sm text-gray-500 mb-3 line-clamp-2 text-start">
          {ticket.description}
        </p>

        <div className="flex justify-between text-xs text-gray-400 items-center">
          <span>{ticket.id}</span>
          <p className={`text-xs font-semibold
        ${ticket.priority === "HIGH" && "text-red-500"}
        ${ticket.priority === "MEDIUM" && "text-yellow-500"}
        ${ticket.priority === "LOW" && "text-green-500"}
      `}>
            {ticket.priority} PRIORITY
          </p>
          <span>{ticket.customer}</span>
          <span> D {ticket.createdAt}</span>
        </div>
      </div>
    </button>
  );
};

export default TicketCard;