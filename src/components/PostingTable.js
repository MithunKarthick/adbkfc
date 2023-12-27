import React, {useState} from "react";
import {
  Button,
  Label,
  Table,
  TableColumn,
  TableRow,
  TableCell,
  Toolbar,
} from "@ui5/webcomponents-react";

function PostingTable({tableData, setTableData}) {
  const [selected, setSelected] = useState([]);
  const handleDelete = (e) => {
    let newArray = tableData.filter(
      (_, index) => !selected.includes(index.toString())
    );
    setTableData([...newArray]);
  };

  const handleSelect = (e) => {
    const selectedIndices = e.detail.selectedRows.map((item) =>
      item.getAttribute("data-sap-ui")
    );
    setSelected([...selectedIndices]);
  };

  return (
    <>
      <Toolbar>
        <Button onClick={handleDelete}>Delete</Button>
      </Toolbar>
      <Table
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
    </>
  );
}

export default PostingTable;
