import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addSkill, updateSkill } from './skillActions';
import SkillListComponent from "../../components/skillList";
import slug from "slug";

class SkillComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            _id: "",
            title: "",
            isEdit: false
        }
    }


    onTextChanged = (event) => {
        if (event.target.id === "title") { this.setState({ title: event.target.value }) };
        if (event.target.id === "name") { this.setState({ name: event.target.value }) };
    }

    handleSubmit = async (event) => {
        const { dispatch } = this.props
        if (this.state.isEdit) {
            let item = {
                _id: this.state._id,
                name: this.state.name,
                title:  this.state.title,
                slug: slug(this.state.title.toLowerCase())
            }
            dispatch(updateSkill(item));
            this.setState({
                isEdit: false,
                name: "",
                title: "",
            });
        } else {
            let item = {
                name: this.state.name,
                title: this.state.title,
                slug: slug(this.state.title.toLowerCase())
            }
            dispatch(addSkill(item));
            this.setState({
                isEdit: false,
                name: "",
                title: "",
            });
        }
    }

    editSkill = (event, item) => {
        this.setState({
            _id: item._id,
            name: item.name,
            title: item.title,
            isEdit: true
        });
    }

    render() {
        return (
            <div>
                <div className="w3-content">
                    <br />
                    <div className="w3-row">
                        <div className="w3-col m5">
                            <label>Skill: </label>
                            <input className="w3-input w3-border" id="name" name="name"
                                value={this.state.name}
                                onChange={this.onTextChanged} type="text" />
                        </div>
                        <div className="w3-col m5 w3-margin-left">
                            <label>Title: </label>
                            <input className="w3-input w3-border" id="title" name="title"
                                value={this.state.title}
                                onChange={this.onTextChanged} type="text" />
                        </div>

                        <div className="w3-center w3-col m1 w3-margin-left" style={{ marginTop: "21px" }}>
                            <button className="w3-btn w3-round-xxlarge" onClick={this.handleSubmit}
                                style={{ backgroundColor: "green", color: "#fff" }}>Submit</button>
                        </div>
                    </div>

                    <br />
                    <SkillListComponent key={this.state._id} editSkill={this.editSkill} />
                    <br />
                </div>


            </div>
        )
    }
}

SkillComponent.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(SkillComponent)