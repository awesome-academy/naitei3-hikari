import React, {Component} from 'react';

import CKEditors from "react-ckeditor-component";


// import Custom Componenets
import Breadcrumb from '../common/breadcrumb.component';

class CKEditornpage extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.onChange = this.onChange.bind(this);
        this.afterPaste = this.afterPaste.bind(this);
        this.state = {
            content: 'hello world',
        }
    }


    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }

    onChange(evt) {
        var newContent = evt.editor.getData();
        this.setState({
            content: newContent
        })

    }


    onBlur(evt){
        console.log("onBlur event called with event info: ", evt);
    }

    afterPaste(evt){
        console.log("afterPaste event called with event info: ", evt);
    }

    render() {
        return (
            <div>
                <Breadcrumb title="CK Editor" parent="Editor"/>
                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Ck editor</h5>
                                </div>
                                <div className="card-body">
                                    <CKEditors
                                        activeClass="p10"
                                        content={this.state.content}
                                        events={{
                                            "blur": this.onBlur,
                                            "afterPaste": this.afterPaste,
                                            "change": this.onChange
                                        }}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Container-fluid Ends*/}
            </div>
        )
    }
}


export default CKEditornpage;
