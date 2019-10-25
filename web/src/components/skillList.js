
import React, { Component } from 'react';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSkills } from '../containers/skill/skillActions';

class SkillListComponent extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getSkills());
    }

    render() {
        const { skillsCollection } = this.props;

        return (skillsCollection.data ? <table className="w3-table w3-striped w3-border" key={new Date().toDateString()} >
            <tbody>
                <tr style={{ backgroundColor: "#381c3e", color: "#fff" }}>
                    <th>Name</th>
                    <th>Tile</th>
                    <th>Action</th>
                </tr>
                {
                    skillsCollection.data.map((item, index) =>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.title}</td>
                            <td>
                                <button onClick={(e) => { this.props.editSkill(e, item) }}>Edit</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table> : <div></div>)
    }
}


SkillListComponent.propTypes = {
    skillsCollection: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    let skillsCollection = {};
    if (state.skillReducer.skillsCollection !== undefined) {
        skillsCollection = state.skillReducer;
        return skillsCollection;
    } else {
        return { skillsCollection }
    }
}

export default connect(mapStateToProps)(SkillListComponent)
