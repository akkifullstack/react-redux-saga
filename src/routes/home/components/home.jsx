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
        this.props.loadImages()
    }


    render() {
        const result = this.props.images.result;

        return (
            <React.Fragment>
                <h1>Images</h1>
                {result && result.map((image) => (
                    <div style={{display:'inline-block'}} key={image.id}><img src={image.link} width="100" height="100"/></div>
                ))}                
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