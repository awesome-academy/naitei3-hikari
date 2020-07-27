import React, {Component} from 'react';
import Modal from 'react-responsive-modal';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';

class ModalPopup extends Component {
    state = {
        Basic: false,
        longContent: false,
        Vertically: false,
        Tooltips: false,
        Grid: false,
        VaryingMdo: false,
        VaryingFat: false,
        VaryingBootstrap: false,
        sizeLarge: false,
        sizeSmall: false,
    };

    onOpenModal = (key) => {
        console.log(key);
        this.setState({ [key]: true });
    };

    onCloseModal = (key) => {
        this.setState({ [key]: false });
    };

    render() {
        const { Basic, longContent, Vertically, Tooltips, Grid, VaryingMdo, VaryingFat, VaryingBootstrap, sizeLarge, sizeSmall } = this.state;
        return (
            <div>
                <Breadcrumb title="Modal" parent="Base" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Static Example</h5>
                                </div>
                                <div className="card-body">
                                    <div className="modal-dialog modal-lg mt-0 mb-0" id="example" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog mt-0 mb-0" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">New message</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Send message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Basic Modal</h5>
                                </div>
                                <div className="card-body btn-showcase">
                                    <button type="button" onClick={() => this.onOpenModal(`Basic`)} className="btn btn-primary" >Simple</button>
                                    <Modal open={Basic} onClose={() => this.onCloseModal('Basic')} center={false} >
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" onClick={() => this.onCloseModal('Basic')} >Close</button>
                                            <button type="button" className="btn btn-secondary" onClick={() => this.onCloseModal('Basic')} >Save changes</button>
                                        </div>
                                    </Modal>

                                    <button type="button" onClick={() => this.onOpenModal(`longContent`)} className="btn btn-secondary">
                                        Scrolling long content
                                    </button>
                                        <Modal open={longContent} onClose={() => this.onCloseModal('longContent')}>
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                            </div>
                                            <div className="modal-body">
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" onClick={() => this.onCloseModal('longContent')}>Close</button>
                                                <button type="button" className="btn btn-primary" onClick={() => this.onCloseModal('longContent')}>Save changes</button>
                                            </div>
                                        </Modal>

                                    <button type="button" className="btn btn-success" onClick={() => this.onOpenModal(`Vertically`)}>
                                        Vertically centered
                                    </button>
                                    <Modal open={Vertically} onClose={() => this.onCloseModal('Vertically')}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">Modal title</h5>
                                        </div>
                                        <div className="modal-body">
                                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => this.onCloseModal('Vertically')}>Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() => this.onCloseModal('Vertically')}>Save changes</button>
                                        </div>
                                    </Modal>
                                    <button type="button" className="btn btn-info" onClick={() => this.onOpenModal(`Tooltips`)}>
                                        Tooltips and popovers
                                    </button>
                                    <Modal open={Tooltips} onClose={() => this.onCloseModal('Tooltips')}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">Modal title</h5>
                                        </div>
                                        <div className="modal-body">
                                            <h5>Popover in a modal</h5>
                                            <p>This <a href="#" role="button" className="btn btn-secondary popover-test" title="" data-content="Popover body content is set in this attribute." data-container="#exampleModalPopovers" data-original-title="Popover title">button</a> triggers a popover on click.</p>
                                            <hr />
                                                <h5>Tooltips in a modal</h5>
                                                <p><a href="#" className="tooltip-test" title="" data-container="#exampleModalPopovers" data-original-title="Tooltip">This link</a> and <a href="#" className="tooltip-test" title="" data-container="#exampleModalPopovers" data-original-title="Tooltip">that link</a> have tooltips on hover.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => this.onCloseModal('Tooltips')}>Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() => this.onCloseModal('Tooltips')}>Save changes</button>
                                        </div>
                                    </Modal>

                                    <button type="button" className="btn btn-warning" onClick={() => this.onOpenModal(`Grid`)}>
                                        Using the grid
                                    </button>
                                    <Modal open={Grid} onClose={() => this.onCloseModal('Grid')}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">Modal title</h5>
                                        </div>
                                        <div className="modal-body grid-showcase">
                                            <div className="container-fluid bd-example-row">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <span>.col-md-4</span>
                                                    </div>
                                                    <div className="col-md-4 ml-auto">
                                                        <span>.col-md-4 .ml-auto</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3 ml-auto"><span>.col-md-3 .ml-auto</span></div>
                                                    <div className="col-md-2 ml-auto"><span>.col-md-2 .ml-auto</span></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 ml-auto"><span>.col-md-6 .ml-auto</span></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-9">
                                                        <span>Level 1: .col-sm-9</span>
                                                        <div className="row">
                                                            <div className="col-8 col-sm-6">
                                                                <span>Level 2: .col-8 .col-sm-6</span>
                                                            </div>
                                                            <div className="col-4 col-sm-6">
                                                                <span>Level 2: .col-4 .col-sm-6</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => this.onCloseModal('Grid')}>Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() => this.onCloseModal('Grid')}>Save changes</button>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Varying modal content</h5>
                                </div>
                                <div className="card-body btn-showcase">
                                    <button type="button" className="btn btn-primary" onClick={() => this.onOpenModal(`VaryingMdo`)}>Open modal for @mdo</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => this.onOpenModal(`VaryingFat`)}>Open modal for @fat</button>
                                    <button type="button" className="btn btn-success" onClick={() => this.onOpenModal(`VaryingBootstrap`)}>Open modal for @getbootstrap</button>

                                    <Modal open={VaryingMdo} onClose={() => this.onCloseModal('VaryingMdo')}>
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel2">New message</h5>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="recipient-name" className="col-form-label" >Recipient:</label>
                                                    <input type="text" className="form-control"  Value="@fat" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                                    <textarea className="form-control" id="message-text"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => this.onCloseModal('VaryingMdo')}>Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() => this.onCloseModal('VaryingMdo')}>Send message</button>
                                        </div>
                                    </Modal>
                                    <Modal open={VaryingFat} onClose={() => this.onCloseModal('VaryingFat')}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">New message</h5>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="recipient-name" className="col-form-label" >Recipient:</label>
                                                    <input type="text" className="form-control" id="recipient-name" Value="@Mat" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                                    <textarea className="form-control" ></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => this.onCloseModal('VaryingFat')}>Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() => this.onCloseModal('VaryingFat')}>Send message</button>
                                        </div>
                                    </Modal>
                                    <Modal open={VaryingBootstrap} onClose={() => this.onCloseModal('VaryingBootstrap')}>
                                        <div className="modal-header">
                                            <h5 className="modal-title">New message</h5>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="recipient-name" className="col-form-label" >Recipient:</label>
                                                    <input type="text" className="form-control" Value="@getbootstrap" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                                    <textarea className="form-control" ></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => this.onCloseModal('VaryingBootstrap')}>Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() => this.onCloseModal('VaryingBootstrap')}>Send message</button>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Sizes modal</h5>
                                </div>
                                <div className="card-body btn-showcase">
                                    <button type="button" className="btn btn-primary" onClick={() => this.onOpenModal(`sizeLarge`)}>Large modal</button>
                                    <Modal size="lg" open={sizeLarge} onClose={() => this.onCloseModal('sizeLarge')}>
                                        <div className="modal-header">
                                            <h4 className="modal-title" id="myLargeModalLabel">Large modal</h4>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                    </Modal>

                                    <button type="button" className="btn btn-secondary" onClick={() => this.onOpenModal(`sizeSmall`)}>Small modal</button>
                                    <Modal open={sizeSmall} onClose={() => this.onCloseModal('sizeSmall')}>
                                        <div className="modal-header">
                                            <h4 className="modal-title" id="mySmallModalLabel">Small modal</h4>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ModalPopup;