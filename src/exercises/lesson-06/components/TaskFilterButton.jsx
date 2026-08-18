export default function TaskFilterButton({ filter, setFilter }) {
  return (
    <button onClick={() => setFilter(filter.toLowerCase())}>{filter}</button>
  );
}
