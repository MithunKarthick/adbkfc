import React from 'react'
import {
    Label,
    Table,
    TableColumn,
    TableRow,
    TableCell
  } from "@ui5/webcomponents-react";

function ResultTable({result}) {
  return (
    <>
    <Table
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
          <TableColumn>
            <Label>MTD</Label>
          </TableColumn>
          <TableColumn>
            <Label>QTD</Label>
          </TableColumn>
          <TableColumn>
            <Label>YTD</Label>
          </TableColumn>
        </>
      }
      >
        {result.map((item, index) => (
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
  )
}

export default ResultTable