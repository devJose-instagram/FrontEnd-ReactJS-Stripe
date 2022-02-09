import React, { Component } from 'react';

class SectionTitleWindow extends Component {
    constructor(props) {
        super(props);

        this.title = props.title;
    }
    render() {
        return (
            <>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">{this.title}</h1>
                    {/*<a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>*/}
                </div>
            </>
        );
    }
}
export default SectionTitleWindow;