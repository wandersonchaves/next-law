export function FilterDropdown() {
  return (
    <>
      <button
        id="filterDropdownButton"
        data-dropdown-toggle="filterDropdown"
        className="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 md:w-auto dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="mr-2 size-4 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
        Filter
        <svg
          className="-mr-1 ml-1.5 size-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          />
        </svg>
      </button>
      <div
        id="filterDropdown"
        className="z-10 hidden w-56 rounded-lg bg-white p-3 shadow dark:bg-gray-700"
      >
        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
          Category
        </h6>
        <ul
          className="space-y-2 text-sm"
          aria-labelledby="filterDropdownButton"
        >
          <li className="flex items-center">
            <input
              id="apple"
              type="checkbox"
              value=""
              className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
            />
            <label
              htmlFor="apple"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Apple (56)
            </label>
          </li>
          <li className="flex items-center">
            <input
              id="fitbit"
              type="checkbox"
              value=""
              className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
            />
            <label
              htmlFor="fitbit"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Fitbit (56)
            </label>
          </li>
          <li className="flex items-center">
            <input
              id="dell"
              type="checkbox"
              value=""
              className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
            />
            <label
              htmlFor="dell"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Dell (56)
            </label>
          </li>
          <li className="flex items-center">
            <input
              id="asus"
              type="checkbox"
              value=""
              defaultChecked
              className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
            />
            <label
              htmlFor="asus"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Asus (97)
            </label>
          </li>
          <li className="flex items-center">
            <input
              id="logitech"
              type="checkbox"
              value=""
              defaultChecked
              className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
            />
            <label
              htmlFor="logitech"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Logitech (97)
            </label>
          </li>
          <li className="flex items-center">
            <input
              id="msi"
              type="checkbox"
              value=""
              defaultChecked
              className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
            />
            <label
              htmlFor="msi"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              MSI (97)
            </label>
          </li>
          <li className="flex items-center">
            <input
              id="bosch"
              type="checkbox"
              value=""
              defaultChecked
              className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
            />
            <label
              htmlFor="bosch"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Bosch (176)
            </label>
          </li>
          <li className="flex items-center">
            <input
              id="sony"
              type="checkbox"
              value=""
              className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
            />
            <label
              htmlFor="sony"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Sony (234)
            </label>
          </li>
          <li className="flex items-center">
            <input
              id="samsung"
              type="checkbox"
              value=""
              defaultChecked
              className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
            />
            <label
              htmlFor="samsung"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Samsung (76)
            </label>
          </li>
          <li className="flex items-center">
            <input
              id="canon"
              type="checkbox"
              value=""
              className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
            />
            <label
              htmlFor="canon"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Canon (49)
            </label>
          </li>
          <li className="flex items-center">
            <input
              id="microsoft"
              type="checkbox"
              value=""
              className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
            />
            <label
              htmlFor="microsoft"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Microsoft (45)
            </label>
          </li>
          <li className="flex items-center">
            <input
              id="razor"
              type="checkbox"
              value=""
              className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
            />
            <label
              htmlFor="razor"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Razor (49)
            </label>
          </li>
        </ul>
      </div>
    </>
  )
}
