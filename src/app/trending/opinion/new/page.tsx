export default function Opinion() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-2xl font-semibold mb-6">Opinion</div>
      <form className="flex flex-col gap-2 p-4 rounded-lg border ">
        <div className="flex flex-col">
          <label htmlFor="title" className=" font-medium">
            Title
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="title"
            name="title"
          />
        </div>
        <div className="flex flex-col">
          <textarea
            placeholder="Share your opinion here"
            className="border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            id="opinion"
            name="opinion"
          />
        </div>
        <button type="submit" className="border bg-gray-200 p-2">
          Submit
        </button>
      </form>
    </div>
  );
}
