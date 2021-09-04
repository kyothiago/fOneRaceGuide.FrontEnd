import React, { useState, useEffect, forwardRef } from 'react';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import logoImg from "../../assets/f1-new-logo.png";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const axios = require("axios");
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


function App() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Cód. do Circuito", field: "circuitId" },
    { title: "Nome do Circuito", field: "circuitName" },
    { title: "Localidade", field: "Location.locality" },
    { title: "País", field: "Location.country" },
    { title: "URL do Circuito", field: 'url' }
  ]

  useEffect(() => {
    let circuitos = [];
    axios.get("http://ergast.com/api/f1/circuits.json?limit=80")
    .then(resp=> { circuitos = resp.data.MRData.CircuitTable.Circuits;
        setData(circuitos)})
    },[])  

  return (
    <div className="profile-container">
        <header>
            <img src={logoImg} alt="F1 Race Guide"/>
                <Link className="button" to="/Home">
                   Retornar para Home
                </Link>
        </header>

    <MaterialTable
        title="Relatório de Circuitos"
        data={data}
        columns={columns}
        icons={tableIcons}
        options={{
            paging:true,
            pageSize:20,
            pageSizeOptions: [20,40,60,80],
        }}
      /> 
    </div>
  );
}
export default App;