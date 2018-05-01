// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Select, Button } from "antd";
import { withFormik } from "formik";

// Import styles
import { widthFormItemElementSize } from "../../../../styles";

// Import components
import ElementWrapper from "../../../Common/ElementWrapper";

const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;

const selectImageResolution = (
  <Select defaultValue=".png">
    <Option value=".png">.png</Option>
    <Option value=".jpg">.jpg</Option>
  </Select>
);

const formItemStyle = {
  width: `${widthFormItemElementSize}px`
};

const FormOfCreateStock = props => (
  <ElementWrapper>
    <Form onSubmit={props.handleSubmit}>
      <FormItem required style={formItemStyle} label="Название компании">
        <Input name="title" value={props.values.title} onChange={props.handleChange} />
      </FormItem>
      <FormItem style={formItemStyle} label="Логотип">
        <Input name="logo" value={props.values.logo} onChange={props.handleChange} addonAfter={selectImageResolution} />
      </FormItem>
      <FormItem style={formItemStyle} label="Доходность за 6 месяцев">
        <Input type="number" name="lucrativenessPerSixMonths" value={props.values.lucrativenessPerSixMonths} onChange={props.handleChange} />
      </FormItem>
      <FormItem style={formItemStyle} label="Изменение за день">
        <Input name="earnings" type="number" value={props.values.earnings} onChange={props.handleChange} />
      </FormItem>
      <FormItem style={formItemStyle} required label="Цена">
        <Input
          name="price"
          type="number"
          value={props.values.price}
          onChange={props.handleChange}
        />
      </FormItem>
      <FormItem required label="Валюта" style={formItemStyle}>
        <Select name="currency" value={props.values.currency} onChange={props.handleChange}>
          <Option value="RUB">Рублей</Option>
          <Option value="USD">Долларов</Option>
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

FormOfCreateStock.propTypes = {
  values: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  createStockAction: PropTypes.func.isRequired
};

export default withFormik({
  mapPropsToValues: props => ({
    title: "",
    logo: "",
    lucrativenessPerSixMonths: 0,
    earnings: 0,
    price: 0,
    currency: "RUB"
  }),
  validate: values => {},
  handleSubmit: (values, { props }) => {
    const data = {
      title: values.title || "",
      logo: values.logo || "",
      lucrativenessPerSixMonths: +values.lucrativenessPerSixMonths || 0,
      earnings: +values.earnings || 0,
      price: {
        value: +values.price || 0,
        currency: values.currency || "RUB"
      }
    };

    props.createStockAction(data)
  }
})(FormOfCreateStock);
