import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTopics } from './topicActions';

class TopicComponent extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getTopics())
    }

    render() {
        const { topics } = this.props;
        return (topics ? <div className="w3-content">
            <br />
            <table className="w3-table w3-striped w3-border" key={new Date().toDateString()} >
                <tbody>
                    <tr style={{ backgroundColor: "#381c3e", color: "#fff" }}>
                        <th>Tile</th>
                        <th>Action</th>
                    </tr>
                    {
                        topics.data.map((item, index) =>
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table> </div> : <div></div>)
    }
}

TopicComponent.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    if (state.topicReducer !== undefined) {
        return state.topicReducer;
    }
}

export default connect(mapStateToProps)(TopicComponent)