import {
  ModalActions,
  ModalFormGrid,
  ModalHeader,
  ModalInput,
  ModalSelect,
  ModalTextArea,
  ModalWrapper,
} from '.'

export const UpdateModal = () => (
  <ModalWrapper id="updateModal">
    <ModalHeader
      title="Update "
      modalId="updateModal"
    />
    <form action="#">
      <ModalFormGrid>
        <ModalInput
          name="name"
          label="Name"
          defaultValue="iPad Air Gen 5th Wi-Fi"
        />
        <ModalInput
          name="brand"
          label="Brand"
          defaultValue="Google"
        />
        <ModalInput
          name="price"
          label="Price"
          defaultValue="399"
          type="number"
        />
        <ModalSelect
          name="category"
          label="Category"
          options={[
            {label: 'Electronics', value: 'Electronics'},
            {label: 'TV/Monitors', value: 'TV'},
            {label: 'PC', value: 'PC'},
            {label: 'Gaming/Console', value: 'GA'},
            {label: 'Phones', value: 'PH'},
          ]}
        />
        <ModalTextArea
          name="description"
          label="Description"
          defaultValue="Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor..."
        />
      </ModalFormGrid>
      <ModalActions
        primaryLabel="Update"
        secondaryLabel="Delete"
        secondaryStyle="danger"
      />
    </form>
  </ModalWrapper>
)
