import React, { useState, useRef } from "react";
import { ThemeProvider, Title, FlexBox, ResponsiveGridLayout } from "@ui5/webcomponents-react";
import KeySelection from "./KeySelection";
import DateSelection from "./DateSelection";
import PostingTable from "./PostingTable";
import ResultTable from "./ResultTable";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    ledger: "2L",
    companyCode: "1710",
    account: "1001000",
    postingDate: "",
    amount: 100,
  });
  const [tableData, setTableData] = useState([]);
  const [result, setResult] = useState([]);

  const calculateADB = (e) => {
    let adb = [...tableData];
    adb.array.forEach((item) => {
      return item;
    });
    setResult([...tableData]);
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
        <KeySelection
          setFormData={setFormData}
          setTableData={setTableData}
          tableData={tableData}
          formData={formData}
        />
        <PostingTable setTableData={setTableData} tableData={tableData} />
      </FlexBox>
      <FlexBox
        alignItems="Stretch"
        direction="Row"
        justifyContent="Start"
        wrap="NoWrap"
      >
        <DateSelection calculateADB={calculateADB} />
        <ResultTable result={result} />
      </FlexBox>
    </ThemeProvider>
  );
}
