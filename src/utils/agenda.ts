import Agenda from "agenda";

const agenda = new Agenda({
 db: {address: process.env.DATABASE_URL!, collection: "jobs"},
});

export default agenda;
