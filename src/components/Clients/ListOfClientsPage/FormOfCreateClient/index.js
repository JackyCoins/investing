// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";
import { withFormik } from "formik";

// Import styles
import { widthFormItemElementSize } from "../../../../styles";

// Import components
import ElementWrapper from "../../../Common/ElementWrapper";

const FormItem = Form.Item;

const formItemStyle = {
  width: `${widthFormItemElementSize}px`
};

const FormOfCreateStock = props => (
  <ElementWrapper>
    <Form onSubmit={props.handleSubmit}>
      <FormItem required style={formItemStyle} label="Имя">
        <Input name="firstname" value={props.values.firstname} onChange={props.handleChange} />
      </FormItem>
      <FormItem style={formItemStyle} label="Фамилия">
        <Input name="lastname" value={props.values.lastname} onChange={props.handleChange} />
      </FormItem>
      <FormItem style={formItemStyle}>
        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </FormItem>
    </Form>
  </ElementWrapper>
);

FormOfCreateStock.propTypes = {
  values: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  createClientAction: PropTypes.func.isRequired
};

export default withFormik({
  mapPropsToValues: props => ({
    firstname: "",
    lastname: ""
  }),
  validate: values => {},
  handleSubmit: (values, { props }) => {
    const data = {
      firstname: values.firstname || "",
      lastname: values.lastname || ""
    };

    props.createClientAction(data)
  }
})(FormOfCreateStock);
