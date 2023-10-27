import { useEffect } from 'react';
// import { oauth2 as SMART } from 'fhirclient';

import { useLocation, useNavigate } from 'react-router-dom';

import { epic_client_id, redirect_uri, fhirServerBaseUrl } from '../secret';

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	let code = null;
	code = searchParams.get('code');
	// eslint-disable-next-line no-undef
	const redirect = redirect_uri;
	// eslint-disable-next-line no-undef
	const clientId = epic_client_id;
	// const audience =
	// 	'https://fhir.epic.com/interconnect-fhir-oauth/api/fhir/DSTU2';
	const audience = fhirServerBaseUrl + '/';

	const handleSubmit = (e) => {
		e.preventDefault();
		const authLink = `${fhirServerBaseUrl}/oauth2/authorize?response_type=code&redirect_uri=${redirect}&client_id=${clientId}&aud=${audience}`;
		window.location.href = authLink;
	};

	useEffect(() => {
		if (code) {
			console.log({
				code: code,
			});

			const params = new URLSearchParams();
			params.append('grant_type', 'authorization_code');
			params.append('code', code);
			params.append('redirect_uri', redirect);
			params.append('client_id', clientId);
			params.append('state', '1234');

			// params.append('grant_type', 'authorization_code');
			// params.append('redirect_uri', this.redirect);
			// params.append('code', this.code);
			// params.append('client_id', this.clientId);
			// params.append('state', '1234');

			let tokenUrl = fhirServerBaseUrl + '/oauth2/token';

			fetch(tokenUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					// Accept: 'application/x-www-form-urlencoded',
				},
				body: params,
				// body: JSON.stringify({
				// 	grant_type: 'authorization_code',
				// 	code: code,
				// 	redirect_uri: redirect,
				// 	client_id: clientId,
				// }),
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.access_token) {
						localStorage.setItem('accessToken', data.access_token);
						localStorage.setItem('patient', data.patient);
						navigate('/survey');
						// fetch(`https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/DSTU2/Patient/${this.patient}`)
					}
					console.log({
						tokenData: data,
					});
				});
		} else {
			console.log('no code');
		}
	}, []);
	return (
		<section>
			<div className='login-container'>
				<form action='' className='login-form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<input
							type='submit'
							value='Login with FHIR-epic'
							className='btn-submit'
						/>
						{/* <a
							href={`https://fhir.epic.com/interconnect-fhir-oauth/oauth2/authorize?response_type=code&redirect_uri=${redirect}&client_id=${clientId}&state=1234&scope=fhirUser`}
						>
							Sign in with FHIR epic
						</a> */}
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;

///http://localhsot:3000/login?code=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZXh0Ijp7Im5lZWRfcGF0aWVudF9iYW5uZXIiOnRydWUsInNtYXJ0X3N0eWxlX3VybCI6Imh0dHBzOi8vbGF1bmNoLnNtYXJ0aGVhbHRoaXQub3JnL3NtYXJ0LXN0eWxlLmpzb24iLCJwYXRpZW50Ijoic21hcnQtMTY0MjA2OCJ9LCJjbGllbnRfaWQiOiI5NWIwNGI2YS0yOWRiLTRjYTctYjBmOS1kNTQxM2ZlZGM5MDkiLCJyZWRpcmVjdF91cmkiOiJodHRwOi8vbG9jYWxoc290OjMwMDAvbG9naW4iLCJzY29wZSI6ImxhdW5jaC9wYXRpZW50IG9wZW5pZCBmaGlyVXNlciIsInBrY2UiOiJhdXRvIiwiY2xpZW50X3R5cGUiOiJwdWJsaWMiLCJjb2RlX2NoYWxsZW5nZV9tZXRob2QiOiJTMjU2IiwiY29kZV9jaGFsbGVuZ2UiOiI2aWlac0hwNkJFSFhwMlhjbWtZUjlsdl84alVRby1WUEVQbFgxamFkeWhzIiwidXNlciI6IlByYWN0aXRpb25lci9zbWFydC1QcmFjdGl0aW9uZXItNzE2MTQ1MDIiLCJpYXQiOjE2OTc5MjQ0OTAsImV4cCI6MTY5NzkyNDc5MH0.RZWkGw7Ol6c21DAetlk6R-PRO4JTWHfd9Bii_eJHmpU&state=pQnShyE4sSENvfTf

//https://fhir.epic.com/interconnect-fhir-oauth/api/fhir/STU3

//api/FHIR/R4
