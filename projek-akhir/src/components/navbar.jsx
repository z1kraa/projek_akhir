export default function Navbar() {
  return (
      <div className="navbar bg-gray-800 p-4">
      <div className="flex-1">
        <a className="flex gap-2 items-center text-xl">
          <img className="w-10 h-8 rounded-full" src="/img/download__2_-removebg-preview.png"   />
          <p className="text-amber-400 font-bold">WikiFilm</p>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered bg-gray-600 w-24 md:w-auto" />
        </div>
      </div>
    </div>
  )
}