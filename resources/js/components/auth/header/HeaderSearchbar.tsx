import { Tooltip, Modal } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function HeaderSearchbar() {
  const [searchModalOpenIs, setSearchModalOpenIs] = useState<boolean>(false);
  const searchModalOpen = () => setSearchModalOpenIs(true);
  const searchModalClose = () => setSearchModalOpenIs(false);

  return (
    <>
      <Tooltip content="Search here">
        <button
          type="button"
          className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={searchModalOpen}
        >
          <span className="sr-only">Search</span>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </Tooltip>

      {/* search modal */}
      <Modal
        dismissible={true}
        show={searchModalOpenIs}
        onClose={searchModalClose}
      >
        <Modal.Body className="bg-white rounded shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg text-sm py-1.5 px-2 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white z-10"
            onClick={searchModalClose}
          >
            <FontAwesomeIcon icon={faClose} className="text-lg" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="relative bg-dark-700 pt-8 px-8 pb-16">
            <div className="relative w-full overflow-hidden transition-all duration-500 focus-within:border-gray-600">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute bottom-2 left-1 text-gray-500"
              />
              <input
                type="text"
                className="flex-1 w-full pl-8 pr-4 py-1 tracking-wide text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white/50 bg-transparent focus:outline-none border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600"
                placeholder="Search here"
              />
            </div>
            {/* search modal open message */}
            <div className="mt-8 max-h-32 text-center text-gray-700 dark:text-white/50">
              <p>Enter a search term to find results.</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
