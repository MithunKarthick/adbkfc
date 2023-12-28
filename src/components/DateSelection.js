import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormItem,
  Button,
  ButtonType,
  DatePicker,
  Label,
} from "@ui5/webcomponents-react";
//For the submits property of the button to have effect, you must add the following import
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import calculateADB from "../utils/calculateADB";

function DateSelection({tableData,setResult}) {

  const [dates, setDates] = useState({
    keyDate: "",
    startOfMonth: "",
    startOfQuarter: "",
    startOfHalfYear: "",
    startOfYear: "",
  });

  const handleDatesChange = (e, field) => {
    const keyDate = new Date(e.target.value);
    //MTD
    keyDate.setDate(1);
    const startOfMonth = keyDate.toDateString()

    //QTD
    const quarter = {
      0: 0,
      1: 3,
      2: 6,
      3: 9
    }
    keyDate.setMonth(quarter[Math.floor(keyDate.getMonth()/3)])
    const startOfQuarter = keyDate.toDateString()
  
    //HYTD
    keyDate.setMonth(keyDate.getMonth() > 5 ? 6 : 0)
    const startOfHalfYear = keyDate.toDateString()

    //YTD
    keyDate.setMonth(0)
    const startOfYear = keyDate.toDateString()

    setDates({ ...dates, startOfMonth, startOfQuarter, startOfHalfYear, startOfYear });
  };

  const calculate = (e) => {
    e.preventDefault();
    const result = calculateADB(tableData, dates)
    setResult([...result]);
  };

  return (
    <div style={{minWidth: '40%', paddingLeft: "2rem"}}>
      <Form onSubmit={(e) => calculate(e) }>
        <FormGroup titleText="Calculate ADB">
          <FormItem label={<Label required="true">Key Date</Label>}>
            <DatePicker
              value={dates.keyDate}
              // formatPattern="dd/MM/yyyy"
              onChange={(e) => handleDatesChange(e, "keyDate")}
            ></DatePicker>
          </FormItem>
          <FormItem label={<Label>Start of Month</Label>}>
            <DatePicker
              value={dates.startOfMonth}
              // formatPattern="dd/MM/yyyy"
              onChange={(e) => handleDatesChange(e, "startOfMonth")}
            ></DatePicker>
          </FormItem>
          <FormItem label="Start of Quarter">
            <DatePicker
              value={dates.startOfQuarter}
              // formatPattern="dd/MM/yyyy"
              onChange={(e) => handleDatesChange(e, "startOfQuarter")}
            ></DatePicker>
          </FormItem>
          <FormItem label="Start of Half Year">
            <DatePicker
              value={dates.startOfHalfYear}
              // formatPattern="dd/MM/yyyy"
              onChange={(e) => handleDatesChange(e, "startOfHalfYear")}
            ></DatePicker>
          </FormItem>
          <FormItem label="Start of Year">
            <DatePicker
              value={dates.startOfYear}
              // formatPattern="dd/MM/yyyy"
              onChange={(e) => handleDatesChange(e, "startOfYear")}
            ></DatePicker>
          </FormItem>
          <FormItem>
            <Button type={ButtonType.Submit}>Calculate ADB</Button>
          </FormItem>
        </FormGroup>
      </Form>
    </div>
  );
}

export default DateSelection;
