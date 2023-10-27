import React, { useState, useEffect } from "react";
import { backendUrl } from "../secret";

const PatientForm = ({ responses, userData }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    birthDate: "",
    MRN: "",
    address: "",
    questionnaireResponses: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(responses);

    let formDataVar = { ...userData };
    formDataVar.address = "";
    formDataVar.questionnaireResponses = responses;

    setIsLoading(true);
    try {
      const response = await fetch(backendUrl + "/patient/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataVar),
      });

      const data = await response.json();
      console.log(data);
      alert("Patient created successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false);
    clearForm();
  };
  const clearForm = () => {
    setFormData({
      name: "",
      age: "",
      gender: "",
      birthDate: "",
      address: "",
      MRN: "",
      questionnaireResponses: [],
    });
  };

  useEffect(() => {
    if (userData) {
      console.log(userData);
      setFormData({
        name: userData.name,
        age: userData.age,
        gender: userData.gender,
        birthDate: userData.birthDate,
        address: "",
        MRN: userData.MRN,
        questionnaireResponses: [],
      });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={userData?.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        disabled={true}
      />
      <input
        type="text"
        placeholder="Age"
        value={userData?.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        disabled={true}
      />
      <input
        type="text"
        placeholder="Gender"
        value={userData?.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        disabled={true}
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={userData?.birthDate}
        onChange={(e) =>
          setFormData({ ...formData, birthDate: e.target.value })
        }
        disabled={true}
      />
      <input
        type="text"
        placeholder="MRN"
        value={userData?.MRN}
        onChange={(e) =>
          setFormData({ ...formData, birthDate: e.target.value })
        }
        disabled={true}
      />
      <button type="submit">{isLoading ? "Submitting..." : "Submit"}</button>
    </form>
  );
};

export default PatientForm;
