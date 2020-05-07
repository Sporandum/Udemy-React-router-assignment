import React, { Component } from 'react';

class Course extends Component {


    render() {
        const params = this.props.match.params;
        return (
            <div>
                <h1>{params.title}</h1>
                <p>You selected the Course with ID: {params.id}</p>
            </div>
        );
    }
}

export default Course;