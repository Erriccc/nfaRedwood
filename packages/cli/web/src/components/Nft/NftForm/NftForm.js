import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const NftForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.nft?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.nft?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="clollected"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Clollected
        </Label>

        <CheckboxField
          name="clollected"
          defaultChecked={props.nft?.clollected}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="clollected" className="rw-field-error" />

        <Label
          name="owner"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Owner
        </Label>

        <TextField
          name="owner"
          defaultValue={props.nft?.owner}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="owner" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NftForm
