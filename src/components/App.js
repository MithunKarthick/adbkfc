import React, { useState, useRef } from "react";
import {
  ThemeProvider,
  Title,
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
  Toolbar,
  FlexBox,
} from "@ui5/webcomponents-react";
//For the submits property of the button to have effect, you must add the following import
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

export default function RegisterForm() {
  // const tableRef = useRef();
  const [formData, setFormData] = useState({
    ledger: "2L",
    companyCode: "1710",
    account: "1001000",
    postingDate: "",
    amount: 100,
  });
  const [tableData, setTableData] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleSubmit = (e) => {
    setTableData([...tableData, { ...formData }]);
    e.preventDefault();
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleDelete = (e) => {
    let newArray = tableData.filter(
      (_, index) => !selected.includes(index.toString())
    );
    setTableData([...newArray]);
  };

  const handleSelect = (e) => {
    const selectedIndices = e.detail.selectedRows.map((item) => {
      item.getAttribute("data-sap-ui");
    });
    setSelected([...selectedIndices]);
  };

  return (
    <ThemeProvider>
      <Title>Averge Daily Balance Key Figure Calculation</Title>
      <FlexBox
        alignItems="Stretch"
        direction="Row"
        justifyContent="Start"
        wrap="NoWrap"
      >
        <div style={{ minWidth: "40%" }}>
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
        </div>
        <div>
          <Toolbar>
            <Button onClick={handleDelete}>Delete</Button>
          </Toolbar>
          <Table
            // ref={tableRef}
            mode="MultiSelect"
            onSelectionChange={handleSelect}
            growing="Scroll"
            columns={
              <>
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
              </>
            }
          >
            {tableData.map((item, index) => (
              <TableRow data-sap-ui={index} key={index}>
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
        </div>
      </FlexBox>
    </ThemeProvider>
  );
}
