const Question = ({ question, onUserResponse }) => {
  const { id, title, options } = question;

  const handleChange = (event) => {
    onUserResponse(id, event.target.value);
  };
  return (
    <div className="mb-4">
      <label className="form-label">
        {id}. {title}?
      </label>
      <br />
      {options?.map((option) => (
        <div className="form-check form-check-reverse form-check-inline">
          <input
            className="form-check-input"
            id={`inlineRadioDefault${id}`}
            name={`question${id}`}
            type="radio"
            value={option}
            onChange={handleChange}
          />
          <label className="form-check-label" for={`inlineRadioDefault${id}`}>
            {option}
          </label>
        </div>
      ))}
      {!options && (
        <div>
          <textarea
            class="form-control"
            rows="4"
            cols="50"
            onChange={handleChange}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default Question;
