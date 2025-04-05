import {ModalActions, ModalWrapper} from '.'

export const DeleteModal = () => (
  <ModalWrapper
    id="deleteModal"
    size="md"
  >
    <div className="relative text-center">
      <svg
        className="mx-auto mb-3.5 size-11 text-gray-400 dark:text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
        />
      </svg>
      <p className="mb-4 text-gray-500 dark:text-gray-300">
        Are you sure you want to delete this item?
      </p>
      <ModalActions
        primaryLabel="Yes, I'm sure"
        primaryStyle="danger"
        secondaryLabel="No, cancel"
      />
    </div>
  </ModalWrapper>
)
