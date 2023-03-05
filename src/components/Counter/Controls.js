export default function Controls({ onIncrement, onDecrement }) {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onIncrement}>
        Увеличить на 1
      </button>
      <button type="button" onClick={onDecrement}>
        Уменьшить на 1
      </button>
    </div>
  );
}
