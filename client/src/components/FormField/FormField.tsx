import "./FormField.css";

interface Props {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: () => void;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
}

export default function FormField({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}: Props) {
  return (
    <div>
      <div className="d-flex align-items-center gap-2 mb-2">
        <label htmlFor={name} className="d-block fs-5 text-black">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="Button-outline-sm mx-2"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        style={{
          width: "100%",
          margin: "20px 0",
          padding: "10px 2px",
          border: "1px solid #a0aeba",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}
