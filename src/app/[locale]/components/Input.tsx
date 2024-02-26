interface InputProps {
  text: string;
}

const Input: React.FC<InputProps> = ({ text }) => {
  return (
    <input
      type="text"
      placeholder={text}
      className="w-full bg-yellow-300 placeholder-gray-800 py-2 px-4 rounded-lg mb-4 outline-none"
    />
  );
};

export default Input;
