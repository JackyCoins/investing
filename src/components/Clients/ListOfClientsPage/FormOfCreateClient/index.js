// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, DatePicker, Select } from "antd";
import { withFormik } from "formik";
import { compose, withHandlers } from "recompose";

// Import styles
import { widthFormItemElementSize } from "../../../../styles";

// Import components
import ElementWrapper from "../../../Common/ElementWrapper";

const FormItem = Form.Item;
const Option = Select.Option;

const formItemStyle = {
  width: `${widthFormItemElementSize}px`
};

const FormOfCreateClient = props => (
  <ElementWrapper>
    <Form onSubmit={props.handleSubmit}>
      <FormItem required style={formItemStyle} label="Имя">
        <Input
          name="firstname"
          value={props.values.firstname}
          onChange={event => {
            props.onChange("firstname", event.target.value)
          }}
        />
      </FormItem>
      <FormItem required style={formItemStyle} label="Фамилия">
        <Input
          name="lastname"
          value={props.values.lastname}
          onChange={event => {
            props.onChange("lastname", event.target.value)
          }}
        />
      </FormItem>
      <FormItem style={formItemStyle} label="Отчество">
        <Input
          name="middlename"
          value={props.values.middlename}
          onChange={event => {
            props.onChange("middlename", event.target.value)
          }}
        />
      </FormItem>
      <FormItem required style={formItemStyle} label="День рождения">
        <DatePicker
          name="birthday"
          value={props.values.birthday}
          onChange={props.onChange.bind(null, "birthday")}
        />
      </FormItem>
      <FormItem required label="Город" style={formItemStyle}>
        <Select
          name="city"
          value={props.values.city}
          onChange={value => {
            props.onChange("city", value);
          }}
        >
          {props.cities.filter(city => city.title).map(city => (
            <Option key={city.id} value={city.id}>
              {city.title}
            </Option>
          ))}
        </Select>
      </FormItem>
      <FormItem style={formItemStyle}>
        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </FormItem>
    </Form>
  </ElementWrapper>
);

FormOfCreateClient.propTypes = {
  values: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  createClientAction: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

FormOfCreateClient.defaultProps = {
  cities: [],
  values: {}
}

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      firstname: "",
      lastname: "",
      middlename: "",
      birthday: "",
      city: null
    }),
    handleSubmit: (values, { props }) => {
      const data = {
        firstname: values.firstname || "",
        lastname: values.lastname || "",
        middlename: values.middlename || "",
        birthday: values.birthday || null,
        city: values.city !== null ? values.city : null
      };

      props.createClientAction(data);
    }
  }),
  withHandlers({
    onChange: props => (name, value) => {
      props.setValues({ ...props.values, [name]: value });
    }
  })
)(FormOfCreateClient);
