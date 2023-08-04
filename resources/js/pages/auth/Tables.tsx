import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "./../../components/auth/breadcrumb/Breadcrumb";
import BreadcrumbLink from "./../../components/auth/breadcrumb/BreadcrumbLink";
import reactImg from "./../../assets/react.svg"
import { Link } from "react-router-dom";

export default function Tables() {
    return (
        <>
            <Breadcrumb title="Tables">
                <>
                    <BreadcrumbLink name="Home" icon={faHome} />
                    <BreadcrumbLink name="Tables" disabled />
                </>
            </Breadcrumb>

            {/* filtering section */}
            <div className="grid gap-2 grid-cols-1 md:grid-cols-5 mb-2">
                <div>
                    <input
                        className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                        type="text"
                        placeholder="Search"
                    />
                </div>

                <div>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 mt-1">
                        <option value="">Filter By All Category</option>
                        <option value="39">Accessories</option>
                        <option value="12">Face</option>
                        <option value="43">Fashion &amp; Lifestyle</option>
                        <option value="2">Hair Care</option>
                        <option value="5">Makeup</option>
                        <option value="52">Men </option>
                        <option value="31">Skin Care</option>
                        <option value="1">Woman </option>
                    </select>
                </div>

                <div>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 mt-1">
                        <option value="">By All Sub Category</option>
                        <option value="40">Eyelash Glue</option>
                        <option value="41">False Eyelash</option>
                        <option value="60">Pencil Sharpener</option>
                    </select>
                </div>
            </div>

            {/* table section */}
            <div className="shadow overflow-x-auto border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-none">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium whitespace-nowrap text-gray-500 uppercase tracking-wider dark:bg-gray-800 dark:text-gray-400"
                            >
                                SL
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium whitespace-nowrap text-gray-500 uppercase tracking-wider dark:bg-gray-800 dark:text-gray-400"
                            >
                                Image
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium whitespace-nowrap text-gray-500 uppercase tracking-wider dark:bg-gray-800 dark:text-gray-400"
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium whitespace-nowrap text-gray-500 uppercase tracking-wider dark:bg-gray-800 dark:text-gray-400"
                            >
                                Slug
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium whitespace-nowrap text-gray-500 uppercase tracking-wider dark:bg-gray-800 dark:text-gray-400"
                            >
                                Parent
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium whitespace-nowrap text-gray-500 uppercase tracking-wider dark:bg-gray-800 dark:text-gray-400"
                            >
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-none">
                        <tr className="bg-white dark:bg-gray-700 dark:text-white">
                            <th
                                scope="row"
                                className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white"
                            >
                                1
                            </th>
                            <th className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                <img
                                    src={reactImg}
                                    alt="Image"
                                    className="rounded w-20 border border-blue-300"
                                />
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                Pencil Sharpener
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                pencil-sharpener
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                Accessories
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                <div className="space-x-2">
                                    <div className="space-x-2">
                                        <Link
                                            to="/auth/tables"
                                            className="underline text-blue-500 hover:no-underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            className="underline text-red-500 hover:no-underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-700 dark:text-white">
                            <th
                                scope="row"
                                className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white"
                            >
                                2
                            </th>
                            <th className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                <img
                                    src={reactImg}
                                    alt="Image"
                                    className="rounded w-20 border border-blue-300"
                                />
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                False Eyelash
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                false-eyelash
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                Accessories
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                <div className="space-x-2">
                                    <div className="space-x-2">
                                        <Link
                                            to="/auth/tables"
                                            className="underline text-blue-500 hover:no-underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            className="underline text-red-500 hover:no-underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-700 dark:text-white">
                            <th
                                scope="row"
                                className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white"
                            >
                                3
                            </th>
                            <th className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                <img
                                    src={reactImg}
                                    alt="Image"
                                    className="rounded w-20 border border-blue-300"
                                />
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                Eyelash Glue
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                eyelash-glue
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                Accessories
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-white">
                                <div className="space-x-2">
                                    <div className="space-x-2">
                                        <Link
                                            to="/auth/tables"
                                            className="underline text-blue-500 hover:no-underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            className="underline text-red-500 hover:no-underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* pagination section */}
            <div className="mt-2">
                <div>
                    <nav
                        role="navigation"
                        aria-label="Pagination Navigation"
                        className="flex items-center justify-between"
                    >
                        <div className="flex justify-between flex-1 sm:hidden">
                            <span>
                                <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md select-none">
                                    « Previous
                                </span>
                            </span>
                            <span>
                                <button
                                    type="button"
                                    className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                >
                                    Next »
                                </button>
                            </span>
                        </div>
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700 leading-5">
                                    <span className="mr-1">Showing</span>
                                    <span className="font-medium mr-1">1</span>
                                    <span className="mr-1">to</span>
                                    <span className="font-medium mr-1">15</span>
                                    <span className="mr-1">of</span>
                                    <span className="font-medium mr-1">60</span>
                                    <span>results</span>
                                </p>
                            </div>
                            <div>
                                <span className="relative z-0 inline-flex rounded-md shadow-sm">
                                    <span>
                                        <span
                                            aria-disabled="true"
                                            aria-label="&laquo; Previous"
                                        >
                                            <span
                                                className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default rounded-l-md leading-5"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </span>
                                    </span>
                                    <span>
                                        <span aria-current="page">
                                            <span className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 select-none">
                                                1
                                            </span>
                                        </span>
                                    </span>
                                    <span>
                                        <button
                                            type="button"
                                            className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                            aria-label="Go to page 2"
                                        >
                                            2
                                        </button>
                                    </span>
                                    <span>
                                        <button
                                            type="button"
                                            className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                            aria-label="Go to page 3"
                                        >
                                            3
                                        </button>
                                    </span>
                                    <span>
                                        <button
                                            type="button"
                                            className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                                            aria-label="Go to page 4"
                                        >
                                            4
                                        </button>
                                    </span>
                                    <span>
                                        <button
                                            type="button"
                                            rel="next"
                                            className="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                                            aria-label="Next &raquo;"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
