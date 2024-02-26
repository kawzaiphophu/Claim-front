import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Printx from './Printx';

const Print = (rowData) => {
  if (!rowData || !rowData.name || !rowData.tel || !rowData.cTel || !rowData.nameProduct || !rowData.sn || !rowData.update_at || !rowData.from) {
    console.error('Invalid rowData:', rowData);
    return;
  }
  const printWindow = window.open('', '_blank');
  printWindow.document.open();
  const htmlString = ReactDOMServer.renderToString(<Printx name={rowData.name} />);
  printWindow.document.write(htmlString);
  printWindow.document.close();
  printWindow.print();
};

export default Print;
