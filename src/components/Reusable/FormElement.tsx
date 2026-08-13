interface FormElementProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormElement = ({ label, type, id, placeholder, onChange }: FormElementProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-label-caps py-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className="italic w-full"
          id={id}
          placeholder={placeholder}
        />
      ) : (
        <input
          className="italic w-full"
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </div>
  );
}
  
export default FormElement;
