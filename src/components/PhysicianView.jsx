import React, { useState, useEffect, useRef } from 'react';
import { backendUrl } from '../secret';

const PhysicianView = () => {
	const [patients, setPatients] = useState([]);
	const [patientsBU, setPatientsBU] = useState([]);
	const [selectedPatient, setSelectedPatient] = useState(null);
	const [searchInput, setSearchInput] = useState('');

	const [patient2BEdit, setPatient2BEdit] = useState({});

	const nameRef = useRef();
	const birthDateRef = useRef();
	const mrnRef = useRef();
	const genderRef = useRef();
	const [editMode, setEditMode] = useState(false);

	useEffect(() => {
		fetchPatients();
	}, []);

	const createPatient = async (newPatient) => {
		try {
			const response = await fetch(backendUrl + '/patient/create', {
				method: 'POST',
				body: JSON.stringify(newPatient),
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});
			const data = await response.json();
			console.log({ data });
			if (data) {
				alert('Patient created successfully');
				fetchPatients();
			}
		} catch (error) {
			console.error('Error creating patient:', error);
		}
	};
	
	const handleSubmitCreate = async (e) => {
		e.preventDefault();
		const newPatient = {
			name: nameRef.current.value,
			birthDate: birthDateRef.current.value,
			gender: genderRef.current.value,
			// Add other fields as needed
		};
		await createPatient(newPatient);
		clearForm();
	};

	const fetchPatients = async () => {
		try {
			const response = await fetch(backendUrl + '/patient/patients');
			const data = await response.json();
			console.log({ data });
			setPatients(data);
			setPatientsBU(data);
		} catch (error) {
			console.error('Error fetching patients:', error);
		}
	};

	const selectPatient = (patient) => {
		setSelectedPatient(patient);
	};

	const updatePatient = (patient) => {
		console.log({ ...patient });
		// console.log(`Updating patient with ID ${patient.id}`);
		// Add logic to update patient
		setPatient2BEdit({ ...patient });
		nameRef.current.value = patient.name;
		birthDateRef.current.value = patient.birthDate;
		genderRef.current.value = patient.gender;
		mrnRef.current.value = patient.MRN;
	};

	const deletePatient = async (patientId) => {
		console.log(`Deleting patient with ID ${patientId}`);
		const answer = confirm('Do you want to delete this patient?');

		const response = await fetch(backendUrl + '/patient/delete/' + patientId, {
			method: 'DELETE',

			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});
		const jsonResponse = await response.json();
		if (jsonResponse.message === 'Patient delete successfully') {
			alert(jsonResponse.message);
			fetchPatients();
		}
		// Add logic to delete patient
	};

	const handleSearchChange = (e) => {
		setSearchInput(e.target.value);

		const prevPatients = patientsBU;
		const filtered = prevPatients.filter((p) =>
			p.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		setPatients(filtered);
		// Add logic to filter patients based on search input
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const payload = {
			name: nameRef.current.value,
			birthDate: birthDateRef.current.value,
			gender: genderRef.current.value,
		};
		console.log({ payload });

		const response = await fetch(
			backendUrl + '/patient/update/' + patient2BEdit.MRN,
			{
				method: 'PUT',
				body: JSON.stringify(payload),
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
		);
		const jsonResponse = await response.json();
		if (jsonResponse.message === 'Patient updated successfully') {
			alert(jsonResponse.message);
			clearForm();
			fetchPatients();
		}
		console.log({ jsonResponse });
	};

	const clearForm = () => {
		nameRef.current.value = '';
		birthDateRef.current.value = '';
		mrnRef.current.value = '';
		genderRef.current.value = '';
	};

	return (
		<div>
			<h1>Physician View</h1>
			<input
				type='text'
				placeholder='Search Patients'
				value={searchInput}
				onChange={handleSearchChange}
			/>

			<form action='' onSubmit={handleSubmit}>
			<h2>Create a new patient</h2>
			<input type='text' ref={nameRef} placeholder="Name" />
			<br />
			<input type='date' ref={birthDateRef} placeholder="Birth Date" />
			<br />
			<input type='text' ref={genderRef} placeholder="Gender" />
			<br />
			<button type='submit'>Create</button>
				<h2>Update the patient data</h2>
				<input type='text' ref={nameRef} />
				<br />
				<input
					type='date'
					ref={birthDateRef}
					value={patient2BEdit?.birthDate}
				/>
				<br />
				<input type='text' ref={genderRef} />
				<br />
				<input type='text' ref={mrnRef} disabled />
				<br />
				<button type='submit'>Submit</button>
			</form>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>BirthDate</th>
						<th>Gender</th>
						<th>MRN</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{patients.map((patient) => (
						<tr key={patient.id}>
							<td>{patient.name}</td>
							<td>{patient.age}</td>
							<td>{patient.gender}</td>
							<td>{patient.MRN}</td>
							<td>
								<button onClick={() => selectPatient(patient)}>View</button>
								<button onClick={() => updatePatient(patient)}>Update</button>
								<button onClick={() => deletePatient(patient.id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{selectedPatient && (
				<div>
					<h2>Selected Patient Details</h2>
					<p>Name: {selectedPatient.name}</p>
					<p>Age: {selectedPatient.age}</p>
					<p>Gender: {selectedPatient.gender}</p>
					<p>MRN: {selectedPatient.MRN}</p>
					<button onClick={() => updatePatient(selectedPatient)}>Update</button>
					<button onClick={() => deletePatient(selectedPatient.id)}>
						Delete
					</button>


				</div>
			)}
		</div>
	);
};

export default PhysicianView;
