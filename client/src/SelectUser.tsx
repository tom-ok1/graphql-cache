function SelectUser({
  userId,
  onChange,
}: {
  userId: string;
  onChange: (userId: string) => void;
}) {
  return (
    <select value={userId} onChange={(event) => onChange(event.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  );
}

export default SelectUser;
