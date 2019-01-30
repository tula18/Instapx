import React from 'react';


class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.comment);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("comment[body]", this.state.body)
        this.props.action(formData)
            .then(() => {
                this.props.history.push("/feed")
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <textarea className="post-caption" placeholder="Add a comment..." onChange={this.update("body")} />
                    </div>
                    <div>
                        <input className="post-submit-button" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
};

export default Comment;