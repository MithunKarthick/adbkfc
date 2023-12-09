import React, { useState } from 'react';
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
  Label
} from '@ui5/webcomponents-react';
//For the submits property of the button to have effect, you must add the following import
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';

export default function RegisterForm() {
  const postings = {
    Ledger: '0L',
    companyCode: '1710',
    account: '1001000',
    PostingDate: new Date(),
    Amount: 100
  };

  const [ledger, setLedger] = useState('0L');
  const [companyCode, setCompanyCode] = useState('1710');
  const [account, setAccount] = useState('1001000');
  const [postingDate, setPostingDate] = useState('');
  const [amount, setAmount] = useState('100');

  const handleSubmit = (e) => {
    const values = {
      ledger: ledger,
      companyCode: companyCode,
      account: account,
      postingDate: postingDate,
      amount: amount
    };
    alert(JSON.stringify(values, null, 2));
    console.log(values);
    //prevent page reload
    e.preventDefault();
  };
  const handleLedgerInput = (e) => {
    setLedger(e.target.value);
  };
  const handleCompanyCodeInput = (e) => {
    setCompanyCode(e.target.value);
  };
  const handleAccountInput = (e) => {
    setAccount(e.target.value);
  };
  const handlePostingDateChange = (e) => {
    setPostingDate(e.detail.value);
  };
  const handleAmountInput = (e) => {
    setAmount(e.target.value);
  };

  return (
    <ThemeProvider>
      <Form onSubmit={handleSubmit}>
        <FormGroup titleText="Simulate GL Postings">
          <FormItem label={<Label>Ledger</Label>}>
            <Input name="ledger" type={InputType.Text } value={ledger} onInput={handleLedgerInput} />
          </FormItem>
          <FormItem label={<Label>Company Code</Label>}>
            <Input name="companyCode" type={InputType.Number} value={companyCode} onInput={handleCompanyCodeInput} />
          </FormItem>
          <FormItem label="GL Account">
          <Input name="account" type={InputType.Number} value={account} onInput={handleAccountInput} />
          </FormItem>
          <FormItem label="Posting Date">
            <DatePicker value={postingDate} onChange={handlePostingDateChange}></DatePicker>
          </FormItem>
          <FormItem label="Amount">
          <Input name="amount" type={InputType.Number} value={amount} onInput={handleAmountInput} />
          </FormItem>
          <FormItem>
            <Button type={ButtonType.Submit}>Submit</Button>
          </FormItem>
        </FormGroup>
      </Form>
    </ThemeProvider>
  );
}