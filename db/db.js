const Ticket = require('../models/Tickets');

class myDb {
    constructor(){
        this.tickets = []
    }
    //create new tickets
    /**
     * create and save a new ticket
     * @param {string} username 
     * @param {number} price 
     * @return Ticket
     */
    create(username, price){
        const tickets = new Ticket(username, price);
        this.tickets.push(tickets);
        return tickets;
    }

    /**
     * create multiple tickets for a user
     * @param {string} username 
     * @param {number} price 
     * @param {number} quantity 
     */
    bulkCreate(username, price, quantity){
        const result = [];
        for(let i = 0; i < quantity; i++){
            const ticket = this.create(username, price);
            result.push(ticket);
        }
        return result;

    }
    //return all tickets
    find(){
        this.tickets
    }
    //return one tickets
    /**
     * 
     * @param {} ticketId 
     * @returns 
     */
    findById(ticketId){
        const ticket = this.tickets.find(
            ticket => ticket.id === ticketId
        );
        return ticket;
    }
    /**
     * find by user all given username
     * @param {string} username 
     */
    findByUsername(username){
        const tickets = this.tickets.filter(
            /**
             * 
             * @param {Ticket} ticket 
             * @returns 
             */
            ticket => ticket.username === username
            )
            return tickets;
    }

    draw(){

    }
}

const myDb = new myDb();
module.exports = myDb;
