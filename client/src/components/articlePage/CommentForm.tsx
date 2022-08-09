export default function CommentForm() {
  return (
    <form className="flex gap-6 p-10 rounded-xl justify-between items-start bg-[#f6f6f6]">
      <img
        src="/images/user.jpg"
        alt="user"
        className="w-20 min-w-[5rem] h-20 object-cover rounded-full"
      />
      <textarea
        placeholder="Add a comment"
        className="w-full resize-none h-48 bg-white px-8 py-5 rounded-lg text-2xl text-gray-500 border border-gray-300 border-solid focus:border-gray-800 transition-all duration-200"
      ></textarea>
      <input
        type="submit"
        value="SEND"
        className="bg-violet-700 rounded-xl shadow-lg shadow-violet-300 hover:shadow-none hover:bg-gray-800 transition-all duration-300 text-white text-2xl capitalize font-medium py-6 px-16 cursor-pointer tracking-wider"
      />
    </form>
  )
}
