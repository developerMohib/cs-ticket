import { useEffect, useState } from 'react';
import TicketCard from './TicketCard';
import Loader from './Loader';

const Task = () => {

    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchTickets = async () => {
            const res = await fetch("/tickets.json");
            setLoading(true)
            const data = await res.json();
            setTickets(data);
            setLoading(false)
        };

        fetchTickets();
    }, []);

    const handleTicket = (id) => {
        console.log(id)
    }



    if (loading) return <Loader />
    return (
        <div className='py-8'>
            <div className="grid grid-cols-12 gap-6">
                {/* Ticket List */}
                <div className="col-span-9">
                    <h1>Customer Tickets</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                        {tickets?.map(ticket => (
                            <TicketCard handleTicket={handleTicket} key={ticket.id} ticket={ticket} />
                        ))}
                    </div>
                </div>
                {/* Task Status Panel */}
                <div className="col-span-3 rounded-lg shadow px-4">

                    <h2 className="font-semibold mb-4">Task Status</h2>

                    <div className="space-y-3">
                        <div className="p-3 border rounded">
                            <p className="text-sm mb-2">Payment Failed - Card Declined</p>
                            <button className="bg-green-600 text-white w-full py-2 rounded">
                                Complete
                            </button>
                        </div>

                        <div className="p-3 border rounded">
                            <p className="text-sm mb-2">Incorrect Billing Address</p>
                            <button className="bg-green-600 text-white w-full py-2 rounded">
                                Complete
                            </button>
                        </div>
                    </div>

                    <h3 className="mt-6 font-semibold">Resolved Task</h3>
                    <p className="text-sm text-gray-400">No resolved tasks yet.</p>

                </div>
            </div>
        </div>
    );
};

export default Task;