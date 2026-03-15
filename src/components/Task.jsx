import { useEffect, useState } from 'react';
import TicketCard from './TicketCard';
import Loader from './Loader';
import bgImage from "../assets/vector1.png";
import { toast } from 'react-toastify';


const Task = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeTickets, setActiveTickets] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);
    const notify = (message) => toast(message);


    useEffect(() => {
        const fetchTickets = async () => {
            setLoading(true);
            const res = await fetch("/tickets.json");
            const data = await res.json();
            setTickets(data);
            setLoading(false);
        };
        fetchTickets();
    }, []);

    const handleTicketBooked = (ticket) => {
        if (!activeTickets.find(t => t.id === ticket.id)) {
            notify("Ticket is booked now");
            setActiveTickets([...activeTickets, ticket]);
        }
    };

    const handleComplete = (bookTicket) => {
        setLoading(true)
        // Add to resolved
        notify("Resolve the ticket")
        setResolvedTasks([...resolvedTasks, bookTicket]);

        // Remove from active list (right side)
        setActiveTickets(activeTickets.filter(t => t.id !== bookTicket.id));

        // Remove from main list (left side)
        setTickets(tickets.filter(t => t.id !== bookTicket.id));
        setLoading(false)
    };

    if (loading) return <Loader />;

    return (
        <div className='py-8 container mx-auto px-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* In Progress */}
                <div className="relative overflow-hidden rounded-xl p-10 text-center text-white bg-gradient-to-br from-[#6338f1] via-[#8253ff] to-[#a361ff]">

                    {/* Left Side Vector */}
                    <div
                        className="absolute inset-y-0 left-0 w-1/2 bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'left center' }}
                    />

                    {/* Right Side Vector (Flipped) */}
                    <div
                        className="absolute inset-y-0 right-0 w-1/2 bg-no-repeat bg-contain scale-x-[-1]"
                        style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'left center' }}
                    />

                    <div className="relative z-10">
                        <p className="text-xl font-medium opacity-90">In-Progress</p>
                        <h2 className="relative z-10 text-5xl font-bold">{activeTickets.length}</h2>
                    </div>
                </div>

                {/* Resolved */}
                <div className="relative overflow-hidden rounded-xl p-10 text-center text-white bg-gradient-to-br from-[#4ade80] via-[#22c55e] to-[#06846e]">

                    {/* Left Side Vector */}
                    <div
                        className="absolute inset-y-0 left-0 w-1/2 bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'left center' }}
                    />

                    {/* Right Side Vector (Flipped) */}
                    <div
                        className="absolute inset-y-0 right-0 w-1/2 bg-no-repeat bg-contain scale-x-[-1]"
                        style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'left center' }}
                    />

                    <div className="relative z-10">
                        <p className="text-xl font-medium opacity-90">Resolved</p>
                        <h2 className="relative z-10 text-5xl font-bold">{resolvedTasks.length}</h2>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6 mt-10">
                {/* Ticket List (Left Side) */}
                <div className="col-span-12 lg:col-span-9">
                    <h1 className="font-semibold my-4 text-xl">Customer Tickets <span className='text-xs'>{tickets.length}</span> </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {tickets.length > 0 ? (tickets?.map(ticket => (
                            <TicketCard
                                key={ticket.id}
                                ticket={ticket}
                                handleTicket={() => handleTicketBooked(ticket)}
                            />
                        ))) : (<p className="text-sm text-gray-400">No Tickets in progress yet.</p>)}
                    </div>
                </div>

                {/* Task Status Panel (Right Side) */}
                <div className="col-span-12 lg:col-span-3 bg-gray-50 rounded-lg p-4 h-fit sticky top-4">
                    <h2 className="font-semibold mb-4">Task Status</h2>

                    <div className="space-y-3">
                        <p className="text-sm font-bold mb-1">ACTIVE TASK</p>
                        {activeTickets.length > 0 ? (
                            activeTickets.map(tick => (
                                <div key={tick.id} className="p-4 bg-white rounded-lg shadow-sm">
                                    <p className="text-sm mb-4 font-medium">{tick.title}</p>
                                    <button
                                        onClick={() => handleComplete(tick)}
                                        className="bg-green-600 hover:bg-green-700 transition text-white w-full py-2 rounded-md font-medium"
                                    >
                                        Complete Task
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="border-dashed rounded-lg text-center text-gray-400">
                                <p className="text-sm">Select a ticket to add to Task Status</p>
                            </div>
                        )}
                    </div>

                    <h3 className="mt-8 font-semibold flex justify-between">
                        <span>Resolved Tasks</span>
                        <span className="text-green-600">{resolvedTasks.length}</span>
                    </h3>
                    <div className="mt-2 space-y-2">
                        {resolvedTasks.length > 0 ? (
                            resolvedTasks.map(task => (
                                <div key={task.id} className="text-xs p-2 bg-green-50 border border-green-100 rounded text-green-700 flex justify-between">
                                    <span>{task.title}</span>
                                    <span>✓</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-gray-400">No resolved tasks yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;