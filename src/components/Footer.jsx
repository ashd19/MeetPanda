import { MoveUpRight, Mail, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://meetpanda.in/img/home/primary-logo.svg"
                width={56}
                height={56}
                alt="MeetPanda logo"
                className="block"
              />
              <h2 className="text-3xl font-extrabold tracking-tight">
                MeetPanda
              </h2>
            </div>

            <p className="text-gray-600 max-w-md mb-6">
              MeetPanda transforms your meetings with AI-powered agendas,
              automated notes, and action tracking — so your team stays focused
              and your deals move forward.
            </p>

            <button className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md">
              Login
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <a
                  href="#"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  Privacy Policy <MoveUpRight />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  Terms of Service <MoveUpRight />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  Security <MoveUpRight />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  Contact Us <MoveUpRight />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  Blog <MoveUpRight />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm"
                aria-label="Email"
              >
                <Mail />
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative paw in the bottom-right  */}
      {/* <div>
    </div>   
    */}
    </footer>
  );
}

export default Footer;
