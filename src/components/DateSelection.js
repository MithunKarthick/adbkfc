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

function DateSelection({calculateADB}) {
  const [dates, setDates] = useState({
    keyDate: "",
    startOfMonth: "",
    startOfQuarter: "",
    startOfHalfYear: "",
    startOfYear: "",
  });

  const handleDatesChange = (e, field) => {
    setDates({ ...dates, [field]: e.target.value });
  };
  return (
    <>
      <Form onSubmit={calculateADB}>
        <FormGroup titleText="Calculate ADB">
          <FormItem label={<Label required="true">Key Date</Label>}>
            <DatePicker
              value={dates.keyDate}
              onChange={(e) => handleDatesChange(e, "keyDate")}
            ></DatePicker>
          </FormItem>
          <FormItem label={<Label>Start of Month</Label>}>
            <DatePicker
              value={dates.startOfMonth}
              onChange={(e) => handleDatesChange(e, "startOfMonth")}
            ></DatePicker>
          </FormItem>
          <FormItem label="Start of Quarter">
            <DatePicker
              value={dates.startOfQuarter}
              onChange={(e) => handleDatesChange(e, "startOfQuarter")}
            ></DatePicker>
          </FormItem>
          <FormItem label="Start of Half Year">
            <DatePicker
              value={dates.startOfHalfYear}
              onChange={(e) => handleDatesChange(e, "startOfHalfYear")}
            ></DatePicker>
          </FormItem>
          <FormItem label="Start of Year">
            <DatePicker
              value={dates.startOfYear}
              onChange={(e) => handleDatesChange(e, "startOfYear")}
            ></DatePicker>
          </FormItem>
          <FormItem>
            <Button type={ButtonType.Submit}>Calculate ADB</Button>
          </FormItem>
        </FormGroup>
      </Form>
    </>
  );
}

export default DateSelection;
