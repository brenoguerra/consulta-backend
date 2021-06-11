import { connect, connection } from 'mongoose'

class Database {
  constructor() {
    connect(process.env.MONGO_URI!, {
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    connection.once('open', () => console.log('Mongo connected'))
  }
}

export default new Database()
