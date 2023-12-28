import React from "react";
import {
  Form,
  FormGroup,
  FormItem,
  Input,
  InputType,
  Button,
  ButtonType,
  DatePicker,
  Label,
} from "@ui5/webcomponents-react";
//For the submits property of the button to have effect, you must add the following import
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

export default function KeySelection({formData, setFormData, tableData, setTableData}) {

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    setTableData([...tableData, { ...formData }]);
    e.preventDefault();
  };

  return (
      <div style={{ minWidth: "40%", paddingLeft: "2rem" }}>
        <Form onSubmit={(e) => handleSubmit(e) }>
          <FormGroup titleText="Simulate GL Postings">
            <FormItem label={<Label>Ledger</Label>}>
              <Input
                name="ledger"
                type={InputType.Text}
                value={formData.ledger}
                onInput={(e) => handleChange(e, "ledger")}
              />
            </FormItem>
            <FormItem label={<Label>Company Code</Label>}>
              <Input
                name="companyCode"
                type={InputType.Number}
                value={formData.companyCode}
                onInput={(e) => handleChange(e, "companyCode")}
              />
            </FormItem>
            <FormItem label="GL Account">
              <Input
                name="account"
                type={InputType.Number}
                value={formData.account}
                onInput={(e) => handleChange(e, "account")}
              />
            </FormItem>
            <FormItem label="Posting Date">
              <DatePicker
                value={formData.postingDate}
                // formatPattern="dd/MM/yyyy"
                onChange={(e) => handleChange(e, "postingDate")}
              ></DatePicker>
            </FormItem>
            <FormItem label="Amount">
              <Input
                name="amount"
                type={InputType.Number}
                value={formData.amount}
                onInput={(e) => handleChange(e, "amount")}
              />
            </FormItem>
            <FormItem>
              <Button type={ButtonType.Submit}>Post</Button>
            </FormItem>
          </FormGroup>
        </Form>
      </div>
  );
}
