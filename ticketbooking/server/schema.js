let mongoose = require('mongoose');
    autoIncrement = require('mongoose-autoincrement');
    Schema = mongoose.Schema;

    bookTicketSchema = new Schema({
    booking_date: { type: Date, 'default': new Date() },
    source:String,
    destination:String,
    charge:String,
}, {collection:'book_ticket', timestamps:true });

bookTicketSchema.plugin(autoIncrement, { model: 'BOOK_TICKET_MODEL', field: 'id' });
mongoose.model('BOOK_TICKET_MODEL', bookTicketSchema);
