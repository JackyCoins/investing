// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { Form, Select, Button } from "antd";
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

const FormOfCreateApplication = props => (
  <ElementWrapper>
    <Form onSubmit={props.handleSubmit}>
      <FormItem required style={formItemStyle} label="Клиент">
        <Select
          name="clientId"
          value={props.values.clientId}
          onChange={value => {
            props.onChange("clientId", value);
          }}
        >
          {props.clients.map(client => (
            <Option key={client.id} value={client.id}>
              {client.firstname} {client.lastname}
            </Option>
          ))}
        </Select>
      </FormItem>
      <FormItem required label="Акции" style={formItemStyle}>
        <Select
          mode="multiple"
          name="stockIds"
          value={props.values.stockIds}
          onChange={value => {
            props.onChange("stockIds", value);
          }}
        >
          {props.stocks.filter(stock => stock.title).map(stock => (
            <Option key={stock.id} value={stock.id}>
              {stock.title}
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

FormOfCreateApplication.propTypes = {
  clients: PropTypes.array.isRequired,
  stocks: PropTypes.array.isRequired,
  values: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  createApplicationAction: PropTypes.func.isRequired
};

export default compose(
  withFormik({
    mapPropsToValues: () => ({
      clientId: "",
      stockIds: []
    }),
    handleSubmit: (values, { props }) => {
      const data = {
        clientId: values.clientId || "",
        stockIds: values.stockIds || []
      };

      props.createApplicationAction(data);
    }
  }),
  withHandlers({
    onChange: props => (name, value) => {
      props.setValues({ ...props.values, [name]: value });
    }
  })
)(FormOfCreateApplication);
