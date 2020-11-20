
import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Navbar from "./components/navbar";


const App = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        {first: "Solana", last: "Rowe", title: "apprentice"},
        {first: "Britney", last: "Spears", title: "manager"},
        {first: "Beyonce", last: "Knowles", title: "performer"}
    ]);

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    return (
      
        <div className="ag-theme-alpine" style={ { height: 400, width: 600 } }>
          <Navbar />
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn field="first" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="last" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="title" sortable={true} filter={true}></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

render(<App />, document.getElementById('root'));