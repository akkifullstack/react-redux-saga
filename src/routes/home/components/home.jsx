import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadImages } from '../../../redux/actions/home';



class HomeView extends Component {
    constructor(props){
        super(props);
    }


    componentDidMount = () =>{
        this.props.loadImages()
    }


    render(){
        return (
            <React.Fragment>
                <h1>Images</h1>
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


export default connect(mapStateToProps, {loadImages})(HomeView);