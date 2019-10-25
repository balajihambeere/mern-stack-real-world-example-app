import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSkills } from '../skill/skillActions';
import { addTopic } from './topicActions';
import marked from "marked";
import slug from "slug";
class AddTopicComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            section: "content",
            selectedId: null,
            title: "",
            metaDescription: "",
            keywords: "",
            content: ""
        }
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getSkills())
    }

    dropDownChanged = (event) => {
        this.setState({ selectedId: event.target.value });
    }
    
    openTabs = (event) => {
        this.setState({ section: event.target.name });
    }

    imageSection = (props) => {
        return <div className="w3-container">
            <h2>Images</h2>
            <p>images is the capital city of England.</p>
        </div>
    }

    contentSection = (props) => {
        const { content } = this.props;
        return <div>
            <div className="w3-row">
                <div className="w3-col m6">
                    <div><textarea className="w3-input w3-border" id="content" onChange={this.onTextChanged}
                        rows="30" style={{ resize: "none", backgroundColor: "#f3f3f3" }} />
                    </div>
                </div>
                <div className="w3-col m6">
                    <div className="w3-input w3-border">
                        <div style={{ height: "659px", overflowY: "scroll" }} dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
                    </div>
                </div>
            </div>
        </div>
    }

    previewSection = (props) => {
        return <div className="w3-container">
            <h2>Preview</h2>
            <p>preview is the capital city of England.</p>
        </div>
    }

    handleSubmit = (event) => {
        const { dispatch } = this.props;
        let item = {
            skillId: this.state.selectedId,
            title: this.state.title,
            metaDescription: this.state.metaDescription,
            keywords: this.state.keywords,
            content: this.state.content,
            slug: slug(this.state.title.toLowerCase())
        }
        Promise.resolve(dispatch(addTopic(item))).then(() => {
            this.props.history.push("/topics");
        })
    }

    onTextChanged = (event) => {
        if (event.target.id === "title") { this.setState({ title: event.target.value }) }
        if (event.target.id === "metaDescription") { this.setState({ metaDescription: event.target.value }) };
        if (event.target.id === "keywords") { this.setState({ keywords: event.target.value }) };
        if (event.target.id === "content") { this.setState({ content: marked(event.target.value) }) };
    }

    render() {
        const { skillsCollection } = this.props;
        return (
            <div>
                <div className="w3-content">
                    <label>Skill: </label>
                    <select value={this.selectedId} className="w3-select w3-border" onChange={this.dropDownChanged}>
                        <option  defaultValue="Choose your option">Choose your option</option>
                        {skillsCollection.data ? skillsCollection.data.map((item, index) =>
                            <option key={index} value={item._id}>{item.name}</option>
                        ) : ""}
                    </select>

                    <div>
                        <br />
                        <label>Title: </label>
                        <input className="w3-input w3-border" id="title" name="title" onChange={this.onTextChanged} type="text" />
                        <br />
                        <label>Meta Description:</label>
                        <textarea className="w3-input w3-border" id="metaDescription" name="metaDescription" onChange={this.onTextChanged} rows="4" style={{ resize: "none" }} />
                        <br />
                        <label>Keywords:</label>
                        <textarea className="w3-input w3-border" id="keywords" name="keywords" onChange={this.onTextChanged} rows="4" style={{ resize: "none" }} />
                        <br />
                    </div>
                </div>
                <div className="w3-container">
                    <div className="w3-bar" style={{ backgroundColor: "black", color: "#fff" }}>
                        <button name="content" className="w3-bar-item w3-button" onClick={this.openTabs}>Content</button>
                        <button name="image" className="w3-bar-item w3-button" onClick={this.openTabs}>Images</button>
                        {/* <button name="preview" className="w3-bar-item w3-button" onClick={this.openTabs}>Preview</button> */}
                    </div>
                    {
                        this.state.section === "content" ? this.contentSection(this.state.content) : ""
                    }
                    {
                        this.state.section === "image" ? this.imageSection() : ""
                    }
                    {/* {
                        this.state.section === "preview" ? this.previewSection() : ""
                    } */}
                    <div className="w3-margin-top w3-center">
                        <button className="w3-btn w3-round-xxlarge" onClick={this.handleSubmit}
                            style={{ backgroundColor: "green", color: "#fff" }}>Submit</button>
                    </div>
                </div>

            </div>
        )
    }
}

AddTopicComponent.propTypes = {
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

export default connect(mapStateToProps)(AddTopicComponent)