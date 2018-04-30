// Import libraries
import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Select, Button } from "antd";
import { withFormik } from "formik";

const FormItem = Form.Item;
const Option = Select.Option;

const FormOfCreateStock = props => (
  <Form onSubmit={props.handleSubmit}>
    <FormItem label="Название компании">
      <Input name="title" value={props.values.title} onChange={props.handleChange} />
    </FormItem>
    <FormItem label="Логотип">
      <Input name="logo" value={props.values.logo} onChange={props.handleChange} />
    </FormItem>
    <FormItem label="Доходность за 6 месяцев">
      <Input name="lucrativenessPerSixMonths" value={props.values.lucrativenessPerSixMonths} onChange={props.handleChange} />
    </FormItem>
    <FormItem label="Изменение за день">
      <Input name="earnings" value={props.values.earnings} onChange={props.handleChange} />
    </FormItem>
    <div>
      <FormItem label="Цена">
        <Input
          name="price"
          type="number"
          value={props.values.price}
          onChange={props.handleChange}
        />
        <Select name="price" value={props.values.price} onChange={props.handleChange}>
          <Option value="RUB">Рублей</Option>
          <Option value="USD">Долларов</Option>
        </Select>
      </FormItem>
    </div>
    <FormItem>
      <Button type="primary" htmlType="submit">
        Добавить
      </Button>
    </FormItem>
  </Form>
);

FormOfCreateStock.propTypes = {
  values: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default withFormik({
  values: {
    title: "",
    logo: "",
    lucrativenessPerSixMonths: 0,
    earnings: 0,
    price: {
      currency: "RUB",
      value: 0
    }
  },
  validate: (values, props) => {},
  handleSubmit: () => {}
})(FormOfCreateStock);
