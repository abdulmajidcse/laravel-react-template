import { faCloudArrowUp, faHome } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../../components/auth/breadcrumb/Breadcrumb";
import BreadcrumbLink from "../../components/auth/breadcrumb/BreadcrumbLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Forms() {
  return (
    <>
      <Breadcrumb title="Forms">
        <>
          <BreadcrumbLink name="Home" icon={faHome} />
          <BreadcrumbLink name="Forms" disabled />
        </>
      </Breadcrumb>

      {/* profile information */}
      <section className="bg-white dark:bg-white/5 rounded shadow-lg p-3 mb-5">
        <header>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Profile Information
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Update your account's profile information and email address.
          </p>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <fieldset className="mt-6 space-y-6">
            <div>
              <label
                className="block font-medium text-sm text-gray-700 dark:text-gray-300"
                htmlFor="name_2"
              >
                Name
              </label>
              <input
                className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                id="name_2"
                name="name"
                type="text"
                autoComplete="name"
              />
            </div>
            <div>
              <label
                className="block font-medium text-sm text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-blue-700 dark:bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
              >
                Save
              </button>
            </div>
          </fieldset>
        </form>
      </section>

      {/* change password */}
      <section className="bg-white dark:bg-white/5 rounded shadow-lg p-3 mb-5">
        <header>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Update Password
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Ensure your account is using a long, random password to stay secure.
          </p>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <fieldset className="mt-6 space-y-6">
            <div>
              <label
                className="block font-medium text-sm text-gray-700 dark:text-gray-300"
                htmlFor="current_password"
              >
                Current Password
              </label>
              <input
                className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                id="current_password"
                name="current_password"
                type="password"
                autoComplete="current-password"
              />
            </div>
            <div>
              <label
                className="block font-medium text-sm text-gray-700 dark:text-gray-300"
                htmlFor="new_password"
              >
                New Password
              </label>
              <input
                className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                id="new_password"
                name="password"
                type="password"
                autoComplete="new-password"
              />
            </div>
            <div>
              <label
                className="block font-medium text-sm text-gray-700 dark:text-gray-300"
                htmlFor="password_confirmation"
              >
                Confirm Password
              </label>
              <input
                className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                autoComplete="new-password"
              />
            </div>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-blue-700 dark:bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
              >
                Save
              </button>
            </div>
          </fieldset>
        </form>
      </section>

      {/* category create form */}
      <section className="bg-white dark:bg-white/5 rounded shadow-lg p-3 mb-5">
        <header>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Create Category
          </h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            You can create 3 Level category like main category, sub category and
            child category.
          </p>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <div className="my-1 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label
                className="block font-medium text-sm text-gray-700 dark:text-gray-300"
                htmlFor="parent_id_1"
              >
                Category
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 mt-1"
                id="parent_id_1"
                defaultValue={2}
              >
                <option value="">Select a Category</option>
                <option value={39}>Accessories</option>
                <option value={12}>Face</option>
                <option value={43}>Fashion &amp; Lifestyle</option>
                <option value={2}>Hair Care</option>
                <option value={5}>Makeup</option>
                <option value={52}>Men </option>
                <option value={31}>Skin Care</option>
                <option value={1}>Woman </option>
              </select>
            </div>
            <div>
              <label
                className="block font-medium text-sm text-gray-700 dark:text-gray-300"
                htmlFor="parent_id_2"
              >
                Sub Category
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 mt-1"
                id="parent_id_2"
              >
                <option value="">Select a Sub Category</option>
                <option value="4">Conditioner </option>
                <option value="17">Hair Serum</option>
                <option value="3">Shampoo</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label
              className="block font-medium text-sm text-gray-700 dark:text-gray-300"
              htmlFor="name_1"
            >
              Name
            </label>
            <input
              className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
              id="name_1"
              type="text"
              autoComplete="name"
            />
          </div>
          <div className="mb-3">
            <label
              className="block font-medium text-sm text-gray-700 dark:text-gray-300"
              htmlFor="slug"
            >
              Slug (Whitespace auto replace with '-')
            </label>
            <input
              className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
              id="slug"
              type="text"
              autoComplete="slug"
            />
          </div>
          <div className="mb-3">
            <label
              className="block font-medium text-sm text-gray-700 dark:text-gray-300"
              htmlFor="image_1549584327"
            >
              Image (Size should be (200x200)px)
            </label>
            <input
              className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
              id="image_1549584327"
              type="file"
              autoComplete="image"
            />
          </div>
          <div className="mb-3 flex justify-center">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Only for example!
            </button>
          </div>
          <div className="mb-3">
            <label className="block font-medium text-sm text-gray-700 dark:text-gray-300">
              Product Images
            </label>
            <div className="my-1 grid grid-cols-1 md:grid-cols-4 gap-2"></div>
            <div className="text-center border-dashed border-2 rounded-md border-slate-500 px-3 py-10 cursor-pointer">
              <label
                className="block font-medium text-sm text-gray-700 dark:text-gray-300"
                htmlFor="product_images"
              >
                <div className="space-y-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faCloudArrowUp}
                    className="text-4xl text-slate-500"
                  />
                  <p className="font-semibold">Click to upload</p>
                  <p>Size should be (900x900)px</p>
                </div>
                <input
                  className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm hidden"
                  id="product_images"
                  type="file"
                  multiple
                />
              </label>
            </div>
          </div>

          <div className="mb-3">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-blue-700 dark:bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
