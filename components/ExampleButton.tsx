type Props = {
  text: string;
  onClick: () => void;
};

const ExampleButton = ({ text, onClick }: Props) => {
  return (
    <button
      type="button"
      className="rounded-md border border-solid border-gray-300 bg-white p-2 hover:bg-gray-100"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ExampleButton;
