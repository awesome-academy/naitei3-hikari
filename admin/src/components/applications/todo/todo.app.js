import React, {Component} from 'react';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';

import {
    getList,
    filterWithCategory,
    filterWithLabel,
    filterWithStatus,
    addNewItem,
    markAllItems,
    removeItem,
    selectedItem
} from '../../../actions/todo.actions';


class TodoApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category:'',
            markAll:false,
            status:'',
            task:'',
            categories:'photos',
            labels:'Marriage',
            addTask:'',
            Color: 'secondary'
        }
    }


    componentDidMount() {
        this.props.getList();
    }

    handleCategory = (ctgry) => {
        this.setState({
            category:ctgry
        })
        this.props.filterWithCategory(ctgry);
    }

    handleLabel = (e) => {
        var badges = document.querySelectorAll('.badge-pill');
        badges.forEach(function(badge){
            badge.classList.remove('active');
        });
        e.target.classList.add('active');
        this.props.filterWithLabel(e.target.innerHTML)
    }

    handleStatus = (sts) => {
        this.setState({
            status:sts
        })
        this.props.filterWithStatus(sts);
    }

    handleDelete = (itemId) => {
        this.props.removeItem(itemId);
    }

    handleStatusUpdate = (itemId, itemStatus) => {
        if(itemStatus == 'completed')
            this.props.selectedItem(itemId, 'pending');
        else
            this.props.selectedItem(itemId, 'completed');
    }

    markAllStatus = () => {
        this.setState(prevState => ({
            markAll: !prevState.markAll
        }));

        this.props.markAllItems(this.state.markAll);
    }

    openTaskWrapper = () => {
            this.setState({ addTask: 'visible'})
    }
    closeTaskWrapper = () => {
            this.setState({ addTask: ''})
    }

    onTaskChanged = (e) =>{
        this.setState({
            task: e.currentTarget.value
        });
    }
    onCategoryChanged = (e) =>{
        this.setState({
            categories: e.currentTarget.value
        });
    }
    onLabelChanged = (e, color) =>{
        this.setState({
            labels: e.currentTarget.value,
            Color: color
        });
    }
    addNewTask = () => {
        if(this.state.task === '') {
            document.querySelector('.task-msg').classList.remove('taskmag-hide')
            document.querySelector('.task-msg').classList.add('taskmag-show')
        }else{
            this.props.addNewItem(this.state.task, this.state.categories, this.state.labels, this.state.Color)
            this.setState({ addTask: ''})
            this.setState({ task: ''})
            document.getElementById('newtask').value = '';
            document.querySelector('.task-msg').classList.add('taskmag-hide')
            document.querySelector('.task-msg').classList.remove('taskmag-show')
        }
    }

    render() {
        const {
            todoItems,
            allTodoItems
        } = this.props.TodoApp;

        return (
        (todoItems) ?
            <div>
                <Breadcrumb title="To-do App" parent="To Do" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-9 xl-60">
                            <div className="card">
                                <div className="card-header">
                                    <h5>To-Do</h5>
                                </div>
                                <div className="card-body">
                                    <div className="todo">
                                        <div className="todo-list-wrapper">
                                            <div className="todo-list-container">
                                                <div className="mark-all-tasks">
                                                    <div className="mark-all-tasks-container">
                                                        <span className="mark-all-btn" role="button" id="mark-all-finished">
                                                            <span className="btn-label">Mark all as finished</span>
                                                            <span className="action-box completed" onClick={() => this.markAllStatus()}>
                                                                {this.state.markAll &&
                                                                <i className="icon"><i className="icon-check"></i></i> }
                                                            </span>
                                                        </span>
                                                        <span className="mark-all-btn move-down" role="button" id="mark-all-incomplete">
                                                            <span className="btn-label">Mark all as Incomplete</span>
                                                            <span className="action-box">
                                                                <i className="icon"><i className="icon-check"></i></i>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="todo-list-body custom-scrollbar">
                                                    <ul id="todo-list">
                                                        {todoItems.filter((item) => item.status !== 'deleted').map((item, i) =>
                                                            <li className={"task " + item.status} key={i}>
                                                            <div className="task-container">
                                                                <div className="table-responsive">
                                                                    <table className="table table-bordernone">
                                                                        <tbody>
                                                                        <tr>
                                                                            <td><h4 className="task-label mb-0">{item.title}</h4></td>
                                                                            <td className="task-categories">{item.category}</td>
                                                                            <td className="task-badge"><span className={"badge badge-pill badge-"+item.labelColor}>{item.label}</span></td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                <span className="task-action-btn">
                                                                    <span className="action-box large delete-btn" title="Delete Task" onClick={() => this.handleDelete(item.id)}>
                                                                        <i className="icon"><i className="icon-trash"></i></i>
                                                                    </span>
                                                                    <span className="action-box large complete-btn" title="Mark Complete" onClick={() => this.handleStatusUpdate(item.id, item.status)}>
                                                                        <i className="icon"><i className="icon-check"></i></i>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </li>
                                                        )}
                                                    </ul>
                                                </div>
                                                <div className="todo-list-footer">
                                                    <div className="add-task-btn-wrapper">
                                                        <span className={"add-task-btn new-"+this.state.addTask}>
                                                            <div href="" className="btn btn-primary" onClick={() => this.openTaskWrapper()}>
                                                                   <i className="icon-plus"></i> Add new task
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div className={"new-task-wrapper "+this.state.addTask}>
                                                        <span className="text-danger task-msg taskmag-hide">Please Write Task First</span>
                                                        <textarea
                                                            id="newtask"
                                                            name="task"
                                                            placeholder="Enter new task here. . ."
                                                            defaultValue={this.state.task}
                                                            onChange={this.onTaskChanged}
                                                        />
                                                        <h6>Categories</h6>
                                                        <input
                                                            type="radio"
                                                            name="category"
                                                            id="category"
                                                            defaultChecked={true}
                                                            value="photos"
                                                            onChange={this.onCategoryChanged}
                                                            className="mr-1"
                                                        /><label htmlFor="category" className="mr-3">Photos</label>
                                                        <input
                                                            type="radio"
                                                            name="category"
                                                            id="category"
                                                            value="videos"
                                                            onChange={this.onCategoryChanged}
                                                            className="mr-1"
                                                        /><label htmlFor="category" className="mr-3">Videos</label>
                                                        <input
                                                            type="radio"
                                                            name="category"
                                                            id="category"
                                                            value="stories"
                                                            onChange={this.onCategoryChanged}
                                                            className="mr-1"
                                                        /><label htmlFor="category" className="mr-3">Stories</label>
                                                        <h6 className="mt-todo">Labels</h6>
                                                        <input
                                                            type="radio"
                                                            name="label"
                                                            id="label"
                                                            value="Marriage"
                                                            onChange={(e) => this.onLabelChanged(e, 'secondary')}
                                                            defaultChecked={true}
                                                            className="mr-1"
                                                        /><label htmlFor="label" className="mr-3">Marriage</label>
                                                        <input
                                                            type="radio"
                                                            name="label"
                                                            id="label"
                                                            value="Event"
                                                            onChange={(e) => this.onLabelChanged(e, 'primary')}
                                                            className="mr-1"
                                                        /><label htmlFor="label" className="mr-3">Event</label>
                                                        <input
                                                            type="radio"
                                                            name="label"
                                                            id="label"
                                                            value="Personal"
                                                            onChange={(e) => this.onLabelChanged(e, 'info')}
                                                            className="mr-1"
                                                        /><label htmlFor="label" className="mr-3">Personal</label>
                                                        <br />
                                                        <span className="btn btn-success mr-1 add-new-task-btn" id="add-task" onClick={() => this.addNewTask()}>Add Task</span>
                                                        <span className="btn btn-danger  cancel-btn" id="close-task-panel" onClick={() => this.closeTaskWrapper()} >Close</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="notification-popup hide">
                                            <p>
                                                <span className="task"></span>
                                                <span className="notification-text"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <script type="tect/template" id="task-template">
                                        <li className="task">
                                            <div className="task-container">
                                                <div className="table-responsive">
                                                    <table className="table table-bordernone">
                                                        <tbody>
                                                        <tr>
                                                            <td><h4 className="task-label mb-0"></h4></td>
                                                            <td className="task-categories"></td>
                                                            <td className="task-badge"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <span className="task-action-btn">
                                                    <span className="action-box large delete-btn" title="Delete Task" >
                                                        <i className="icon"><i className="icon-trash"></i></i>
                                                    </span>
                                                    <span className="action-box large complete-btn" title="Mark Complete">
                                                        <i className="icon"><i className="icon-check"></i></i>
                                                    </span>
                                                </span>
                                            </div>
                                        </li>
                                    </script>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 xl-40">
                            <div className="card">
                                <div className="card-body">
                                    <div className="todo-options">
                                        <h6>Status</h6>
                                        <ul>
                                            <li>
                                                <a href="#" onClick={() => this.handleStatus('')}><span className="m-r-5"><i className="fa fa-repeat"></i></span> All Tasks<span className="badge badge-pill pull-right mr-0">{allTodoItems.filter((item) => item.status !== 'deleted').length}</span></a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={() => this.handleStatus('pending')}><span className="m-r-5"><i className="fa fa-refresh"></i></span> Pending Tasks<span className="badge badge-pill pull-right mr-0">{allTodoItems.filter((item) => { return (item.status === 'pending' && item.status !== 'deleted') }).length}</span></a>
                                            </li>
                                            <li>
                                                <a href="#" onClick={() => this.handleStatus('completed')}><span className="m-r-5"><i className="fa fa-check-square-o"></i></span> Completed Tasks<span className="badge badge-pill pull-right mr-0">{allTodoItems.filter((item) => { return (item.status === 'completed' && item.status !== 'deleted') }).length}</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="todo-options">
                                        <h6>Categories</h6>
                                        <div className="form-group custom-radio-ml mb-0">
                                            <div className="radio radio-primary">
                                                <input type="radio" name="radio" id="radio1" defaultChecked={this.state.category ==="photos"} onClick={() => this.handleCategory('photos')} />
                                                    <label htmlFor="radio1">Photos</label>
                                            </div>
                                            <div className="radio radio-primary">
                                                <input type="radio" name="radio" id="radio2" defaultChecked={this.state.category ==="videos"} onClick={() => this.handleCategory('videos')} />
                                                    <label htmlFor="radio2">Videos</label>
                                            </div>
                                            <div className="radio radio-primary">
                                                <input type="radio" name="radio" id="radio3" defaultChecked={this.state.category ==="stories"} onClick={() => this.handleCategory('stories')} />
                                                    <label htmlFor="radio3" className="mb-0">Stories</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="todo-options">
                                        <h6>Labels</h6>
                                        <div className="badges-todo">
                                            <h6><span className="badge badge-pill badge-secondary" data-value="Marriage" onClick={this.handleLabel.bind(this)}>Marriage</span></h6>
                                            <h6><span className="badge badge-pill badge-primary" data-value="Event" onClick={this.handleLabel.bind(this)}>Event</span></h6>
                                            <h6><span className="badge badge-pill badge-info" data-value="Personal" onClick={this.handleLabel.bind(this)}>Personal</span></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : <div className="loading"></div>
        )
    }
}

const mapStateToProps = ({TodoApp}) => {
    return { TodoApp };
}

export default connect(
    mapStateToProps,{
        getList,
        filterWithCategory,
        filterWithLabel,
        filterWithStatus,
        addNewItem,
        markAllItems,
        removeItem,
        selectedItem
    }
)(TodoApp);
