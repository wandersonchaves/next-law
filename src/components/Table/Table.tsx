import Link from 'next/link'

interface TableProps {
  headers: string[]
  data: Array<Record<string, React.ReactNode>>
  actions?: (
    row: Record<string, React.ReactNode>,
    rowIndex: number,
  ) => React.ReactNode
}

export const Table: React.FC<TableProps> = ({headers, data, actions}) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className="px-4 py-3"
                >
                  {header}
                </th>
              ))}
              {actions && (
                <th
                  scope="col"
                  className="px-4 py-3"
                >
                  <span className="sr-only">Actions</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b dark:border-gray-700"
              >
                {headers.map((headerKey, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-3"
                  >
                    {row[headerKey]}
                  </td>
                ))}
                {actions && (
                  <td className="flex items-center justify-end px-4 py-3">
                    {actions(row, rowIndex)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav
        className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>
          of
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <Link
              href="#"
              className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="size-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </Link>
          </li>
          <li>
            <Link
              href="#"
              aria-current="page"
              className="text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 z-10 flex items-center justify-center border px-3 py-2 text-sm leading-tight dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              100
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="size-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
