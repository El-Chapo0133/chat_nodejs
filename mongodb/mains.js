let mongodb = require('mongodb');
var url = "mongodb://localhost:27017/";


class MyDb {
	constructor() {
		this.myDb;
		this.mongoClient = mongo.MongoClient;
	}
	connect() {
		this.MongoClient.connect(url, (err, db) => {
			if (err)
				throw(err);
			this.myDb = db.db("main");
		});
	}
	async createCollections(name) {
		this.connect();
		this.myDb.createCollection(name, (err, res) => {
			if (err)
				throw(err);
			return;
		})
	}
	async insertOne(user) {
		this.connect();
		this.myDb.collection("main").insertOne(user, (err, res) => {
			if (err)
				throw(err);
			this.myDb.close();
			return;
		})
	}
	async insertMany(users) {
		this.connect();
		this.myDb.collection("main").insertMany(users, (err, res) => {
			if (err)
				throw(err);
			this.myDb.close();
			return;
		})
	}
	async find(query) {
		this.connect();
		this.myDb.collection("main").fund(query).toArray((err, result) => {
			if (err)
				throw(err);
			this.myDb.close();
			return result;
		});
	}
}

module.exports = MyDb;