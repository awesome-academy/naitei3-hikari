import React, {Component} from 'react';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

// css files
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

//json file
var data = require('../../../assets/json/company');


class BasicTable extends Component {

    constructor(props) {
        super(props);
        this.state ={data};
    }

    render() {

        var data = this.state.data;
        const { SearchBar } = Search;
        const columns = [{
            dataField: 'name',
            text: 'Name',
            sort: true
        }, {
            dataField: 'gender',
            text: 'Gander',
            sort: true
        }, {
            dataField: 'company',
            text: 'Company',
            sort: true
        },{
            dataField: 'age',
            text: 'Age',
            sort: true
        }];

        const defaultSorted = [{
            dataField: 'name',
            order: 'asc'
        }];

        const pageButtonRenderer = ({
                                        page,
                                        active,
                                        disable,
                                        title,
                                        onPageChange
                                    }) => {
            const handleClick = (e) => {
                e.preventDefault();
                onPageChange(page);
            };
            var classname = '';
                classname = 'btn btn-primary';
            return (
                <li className="page-item pl-1" key={page}>
                    <a href="#" onClick={ handleClick } className={ classname }>{ page }</a>
                </li>
            );
        };

        const options = {
            pageButtonRenderer
        };


        return (
            <div>
                <Breadcrumb title="Data Tables" parent="Table" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card mb-0">
                                <div className="card-header">
                                    <h5>basic datatable</h5><span>DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function:<code>$().DataTable();</code>.</span><span>Searching, ordering and paging goodness will be immediately added to the table, as shown in this example.</span>
                                </div>
                                <div className="card-body datatable-react">
                                        <ToolkitProvider
                                            keyField="name"
                                            data={ data }
                                            columns={ columns }
                                            search
                                        >
                                            {
                                                props => (
                                                    <div >
                                                        <SearchBar { ...props.searchProps } />
                                                        <BootstrapTable
                                                            { ...props.baseProps }
                                                            defaultSorted={ defaultSorted }
                                                            pagination={ paginationFactory(options) } />
                                                    </div>
                                                )
                                            }
                                        </ToolkitProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

            </div>
        )
    }
}


export default BasicTable;
