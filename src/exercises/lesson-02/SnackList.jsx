export default function SnackList() {
  const snacks = [
    { name: 'Popcorn', rank: 4 },
    { name: 'Chips', rank: 3 },
    { name: 'Pretzels', rank: 2 },
    { name: 'Peanuts', rank: 1 },
  ];

  const snacksSorted = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {snacksSorted.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ol>
  );
}
