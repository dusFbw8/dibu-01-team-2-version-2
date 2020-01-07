import React, {
    Component
} from 'react'

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            email: "",
            passWord: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const {
            name,
            value
        } = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);

    }

    render() {
        return ( <
            div className = "jumbotron bg-dark" >
            <
            input onChange = {
                this.handleChange
            }
            name = "username"
            value = {
                this.state.username
            }
            className = "m-2"
            type = "text"
            placeholder = " username" / > < br / >
            <
            input onChange = {
                this.handleChange
            }
            name = "email"
            value = {
                this.state.email
            }
            className = "m-2"
            type = "text"
            placeholder = " email" / > < br / >
            <
            input onChange = {
                this.handleChange
            }
            name = "password"
            value = {
                this.state.paasWord
            }
            className = "m-2"
            type = "password"
            placeholder = " password" / > < br / >

            <
            button onClick = {
                this.handleSubmit
            } > Register < /button>   <
            /div>

        );
    }
}