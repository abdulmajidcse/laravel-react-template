export default function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-800 rounded-t shadow-lg mt-5">
        <div className="px-3 pt-2 pb-8">
          <hr className="mt-3 mb-10 border-gray-200 dark:border-gray-700" />
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-400">
              &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
            </p>
            <div className="flex mt-3 -mx-2 sm:mt-0">
              <p className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="font-bold">Version</span> 1.0.0
              </p>
              {/* <a
    href="#"
    class="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
    aria-label="Reddit"
  >
    Teams
  </a>
  <a
    href="#"
    class="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
    aria-label="Reddit"
  >
    Privacy
  </a>
  <a
    href="#"
    class="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
    aria-label="Reddit"
  >
    Cookies
  </a> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
