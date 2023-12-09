import React, { useState } from "react";
import {
  ThemeProvider,
  Form,
  FormGroup,
  FormItem,
  Input,
  InputType,
  Button,
  ButtonType,
  DatePicker,
  Label,
  Table,
  TableColumn,
  TableRow,
  TableCell,
} from "@ui5/webcomponents-react";
//For the submits property of the button to have effect, you must add the following import
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    ledger: "2L",
    companyCode: "1710",
    account: "1001000",
    postingDate: "",
    amount: 100,
  });
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (e) => {
    setTableData([...tableData, { ...formData }]);
    e.preventDefault();
  };

  const handleChange = (event, field) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  return (
    <ThemeProvider>
      <Form onSubmit={handleSubmit}>
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
      <Table>
        <TableColumn>
          <Label>Ledger</Label>
        </TableColumn>
        <TableColumn>
          <Label>Company Code</Label>
        </TableColumn>
        <TableColumn>
          <Label>GL Account</Label>
        </TableColumn>
        <TableColumn>
          <Label>Posting Date</Label>
        </TableColumn>
        <TableColumn>
          <Label>Amount</Label>
        </TableColumn>

        {console.log(tableData)}
        {tableData.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <Label>{item.ledger}</Label>
            </TableCell>
            <TableCell>
              <Label>{item.companyCode}</Label>
            </TableCell>
            <TableCell>
              <Label>{item.account}</Label>
            </TableCell>
            <TableCell>
              <Label>{item.postingDate}</Label>
            </TableCell>
            <TableCell>
              <Label>{item.amount}</Label>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </ThemeProvider>
  );
}
