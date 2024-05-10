export default function PostLike() {
  return (
    <button
      onClick={() => {
        alert("hello island");
      }}
      className="rounded-md bg-blue-500 px-3 py-1 text-white"
    >
      Like
    </button>
  );
}
