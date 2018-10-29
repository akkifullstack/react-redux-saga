import React, { Component } from 'react';
import { connect } from 'react-redux'
import ImagePostForm from './postimage';
import { submitPostForm } from '../../../redux/actions/image';






class ImageFormView extends Component {

    handleSubmit = values => {
        console.log(values, 'value')
        this.props.submitPostForm(values);
    }

    render() {
        return (
            <React.Fragment>
                <ImagePostForm
                    onSubmit={this.handleSubmit}
                />
            </React.Fragment>
        )
    }
}



const mapStateToProps = state => ({
    image: state.image
})


const mapdispatchToProps = dispatch => ({
    submitPostForm: (values) => dispatch(submitPostForm(values))
})

export default connect(mapStateToProps, mapdispatchToProps)(ImageFormView)