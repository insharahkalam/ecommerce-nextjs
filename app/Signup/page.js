// src/app/signup/page.js
import Link from "next/link";

 function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Signup Form</h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 mt-4 mb-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 my-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 my-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 my-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 my-2 text-white py-2 rounded-3 hover:bg-blue-700 transition"
          >
            Signup
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/Login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>

       
      </div>
    </div>
  );
}
  export default Signup