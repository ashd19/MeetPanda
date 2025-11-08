function Navbar() {
  return (
    <div className="z-999    p-3 md:p-5 bg-transparent flex justify-between items-center">
     
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://meetpanda.in/img/home/primary-logo.svg"
            width={32}
            height={32}
            alt="MeetPanda logo"
            className="block"
          />
          <h2 className="text-3xl font-extrabold tracking-tight">MeetPanda</h2>
        </div>

        <a href="#" className="mb-3 ml-5">
          Blog
        </a>
      </div>

      <button className="relative group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-sm text-sm cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-300 bg-gradient-to-br from-indigo-500 to-indigo-600 text-primary-foreground shadow-xs hover:opacity-90 h-9 px-4 py-2 font-medium text-white md:mb-0 m-4">
        LogIn
      </button>
    </div>
  );
}

export default Navbar;
