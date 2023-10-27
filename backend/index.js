// index.js
const express = require('express');
const { loggers, constants } = require('@asymmetrik/node-fhir-server-core');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');
const { VERSIONS } = constants;
const cors = require('cors');

// Create an instance of the Express application
const app = express();
const logger = loggers.get('default');

app.use(express.json());

app.use(cors());

const dbName = path.join(__dirname, 'patients.db');
let db;

(async () => {
	try {
		db = await initializeDatabase();
		createPatientsTable();

		// Import the patient service logic (assuming it's defined in './patient.service.js')
		const patientServiceRouter = require('./patient.service.js');

		// Mount the patient service router under a specific path
		app.use('/patient', patientServiceRouter(db));

		// Start the Express server
		const port = process.env.PORT || 4000;
		app.listen(port, () => {
			logger.info(`Starting the FHIR Server at localhost:${port}`);
		});
	} catch (error) {
		console.error(`Error initializing database: ${error.message}`);
		process.exit(1);
	}
})();

async function initializeDatabase() {
	try {
		const database = await open({
			filename: dbName,
			driver: sqlite3.Database,
		});
		console.log(`Connected to SQLite database: ${dbName}`);
		return database;
	} catch (error) {
		console.error(`Error connecting to database: ${error.message}`);
		throw error;
	}
}

async function createPatientsTable() {
	try {
		console.log('Creating patients table...');
		await db.exec(`
      CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY,
        MRN TEXT,
        name TEXT,
        gender TEXT,
        birthDate DATE,
        address TEXT,
        questionnaireResponses TEXT 
       );
     `);

		console.log('Patients table created');
	} catch (error) {
		console.error(`Error creating patients table: ${error.message}`);
	}
}
