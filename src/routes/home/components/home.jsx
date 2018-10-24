import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadImages } from '../../../redux/actions/home';



class HomeView extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        console.log(this.props)
        this.props.loadImages()
    }


    render() {
        const result = this.props.images.result;

        console.log(result)

        // const { result: data } = this.props.images
        return (
            <React.Fragment>
                <h1>Images</h1>
                
                {/* {this.props.images.result.map((image => (<div><img src={image.link} alt={image.title}/></div>)))} */}
            </React.Fragment>
        )
    }
}




HomeView.propTypes = {
    images: PropTypes.object.isRequired,
    loadImages: PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
    return {
        images: state.home.images
    }
}

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);