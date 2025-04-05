import {
  ModalActions,
  ModalFormGrid,
  ModalHeader,
  ModalInput,
  ModalSelect,
  ModalTextArea,
  ModalWrapper,
} from '.'

export const CreateModal = () => (
  <ModalWrapper id="createModal">
    <ModalHeader
      title="Add "
      modalId="createModal"
    />
    <form action="#">
      <ModalFormGrid>
        <ModalInput
          name="name"
          label="Name"
          placeholder="Type  name"
          required
        />
        <ModalInput
          name="brand"
          label="Brand"
          placeholder=" brand"
          required
        />
        <ModalInput
          name="price"
          label="Price"
          placeholder="$2999"
          type="number"
          required
        />
        <ModalSelect
          name="category"
          label="Category"
          options={[
            {label: 'Select category', value: ''},
            {label: 'TV/Monitors', value: 'TV'},
            {label: 'PC', value: 'PC'},
            {label: 'Gaming/Console', value: 'GA'},
            {label: 'Phones', value: 'PH'},
          ]}
        />
        <ModalTextArea
          name="description"
          label="Description"
          placeholder="Write  description here"
        />
      </ModalFormGrid>
      <ModalActions
        primaryLabel="Add new "
        primaryIcon="add"
        primaryType="submit"
      />
    </form>
  </ModalWrapper>
)
