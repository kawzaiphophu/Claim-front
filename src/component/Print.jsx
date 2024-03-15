import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Printx from './Printx'; 

const Print = (rowData) => {
  if (!rowData || !rowData.name || !rowData.tel || !rowData.cTel || !rowData.nameProduct || !rowData.sn || !rowData.update_at || !rowData.from) {
    console.error('Invalid rowData:', rowData);
    return;
  }

  const printWindow = window.open('', '_blank');
  if (printWindow) { 
    printWindow.document.write('<html><head><title>ihave</title></head><body>'); 
    const htmlString = ReactDOMServer.renderToString(<Printx {...rowData} />); 
    printWindow.document.write(htmlString); // Write the HTML string to the new window
    printWindow.document.write('</body></html>'); // Close HTML tags
    printWindow.document.close(); // Close the document in the new window
    printWindow.print(); // Print the content of the new window
  } else {
    console.error('Failed to open print window.');
  }
};

export default Print;
