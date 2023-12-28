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
    <div style={{height:"50%", width: '100%', paddingRight: '2rem'}}>
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
          {/* <TableColumn>
            <Label>Posting Date</Label>
          </TableColumn> */}
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
                {/* <TableCell>
                  <Label>{item.postingDate}</Label>
                </TableCell> */}
                <TableCell>
                  <Label>{item.amount}</Label>
                </TableCell>
                <TableCell>
                  <Label>{item.MTD}</Label>
                </TableCell>
                <TableCell>
                  <Label>{item.QTD}</Label>
                </TableCell>
                <TableCell>
                  <Label>{item.YTD}</Label>
                </TableCell>
              </TableRow>
            ))}
      </Table>
    </div>
  )
}

export default ResultTable