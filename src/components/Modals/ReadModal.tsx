import {ModalActions, ModalWrapper} from '.'

export const ReadModal = () => (
  <ModalWrapper
    id="readModal"
    size="xl"
  >
    <div className="mb-4 flex justify-between rounded-t sm:mb-5">
      <div className="text-lg text-gray-900 md:text-xl dark:text-white">
        <h3 className="font-semibold">Apple iMac 27”</h3>
        <p className="font-bold">$2999</p>
      </div>
      <button
        type="button"
        className="inline-flex rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-toggle="readModal"
      >
        <span className="sr-only">Close modal</span>
        <svg
          aria-hidden="true"
          className="size-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          />
        </svg>
      </button>
    </div>
    <dl>
      <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
        Details
      </dt>
      <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
        Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor...
      </dd>
      <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
        Category
      </dt>
      <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
        Electronics/PC
      </dd>
    </dl>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <ModalActions primaryLabel="Edit" />
        <button
          type="button"
          className="hover:text-primary-700 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Preview
        </button>
      </div>
      <ModalActions
        secondaryLabel="Delete"
        secondaryStyle="danger"
      />
    </div>
  </ModalWrapper>
)
