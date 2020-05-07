import React, { Component } from 'react';

class Course extends Component {

    state = {
        courseTitle: ''
    }

    componentDidMount() {
        this.getTitle();
    }

    componentDidUpdate() {
        this.getTitle();
    }
    
    getTitle() {
        const query = new URLSearchParams(this.props.location.search);
        const title = query.get('title');
        if (this.state.courseTitle !== title) {
            this.setState({courseTitle: title});
        }
    }


    render() {
        const params = this.props.match.params;
        console.log(this.props);
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {params.id}</p>
            </div>
        );
    }
}

export default Course;