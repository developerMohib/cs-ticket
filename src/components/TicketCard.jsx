const TicketCard = ({ ticket }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border hover:shadow-md transition">

      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-800">
          {ticket.title}
        </h3>

        <span className={`px-3 py-1 text-xs rounded-full
          ${ticket.status === "Open" ? "bg-green-100 text-green-700" :
          "bg-yellow-100 text-yellow-700"}`}>
          {ticket.status}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-3 line-clamp-2">
        {ticket.description}
      </p>

      <div className="flex justify-between text-xs text-gray-400">
        <span>{ticket.id}</span>
        <span>{ticket.customer}</span>
        <span>{ticket.createdAt}</span>
      </div>

      <p className={`text-xs mt-2 font-semibold
        ${ticket.priority === "HIGH" && "text-red-500"}
        ${ticket.priority === "MEDIUM" && "text-yellow-500"}
        ${ticket.priority === "LOW" && "text-green-500"}
      `}>
        {ticket.priority} PRIORITY
      </p>

    </div>
  );
};

export default TicketCard ;