import React, { Component } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import axios from 'axios';
import FileUpload from '../../utils/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;

const style = [
    { key: 1, value: "Modern" },
    { key: 2, value: "Traditional" },
    { key: 3, value: "Contemporary" }
]

class AddNewProject extends Component {

    state = {
        name: '',
        description: '',
        style: 1,
        images: [],
        price: 0
    }

    handleChangeName = (event) => {
        this.setState({ name: event.currentTarget.value })
    }

    handleChangePrice = (event) => {
        this.setState({ price: parseInt(event.currentTarget.value, 10) })
    }

    handleChangeDecsription = (event) => {
        // console.log(event.currentTarget.value)
        this.setState({ description: event.currentTarget.value })
    }

    handleChangeStyle = (event) => {
        this.setState({ style: event.currentTarget.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (!this.state.name || !this.state.description ||
            !this.state.style || !this.state.images
            || !this.state.price) {
            return alert('Please first fill all the fields')
        }

        const variables = {
            name: this.state.name,
            description: this.state.description,
            images: this.state.images,
            style: this.state.style,
            price: this.state.price
        }

        axios.post('http://localhost:5000/archi-dashboard/projects/add-new-project', variables)
            .then(res => console.log(res.data));
               
                this.setState({
                    name: '', 
                    description: '',
                    images: [],
                    style: '',
                    price: ''
                    
            })
    }

    updateFiles = (newImages) => {
        this.setState({ images: newImages })
    }


    render() {
        return (
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} > Upload Project</Title>
            </div>

            <Form onSubmit={this.onSubmit}>
               
               <FileUpload refreshFunction={this.updateFiles} />

                <br /><br />
                <label>Name</label>
                <Input
                    onChange={this.handleChangeName}
                    value={this.state.name}
                />
                <br /><br />
                <label>Description</label>
                <TextArea
                    onChange={this.handleChangeDecsription}
                    value={this.state.description}
                />
                <br /><br />
                <label>Price($)</label>
                <Input
                    type="number"
                    onChange={this.handleChangePrice}
                    value={this.state.price}
                />
                <br /><br />
                <select onChange={this.handleChangeStyle}>
                    {style.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />

                <Button type="primary" size="large" onClick={this.onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
        )
    }
}

export default AddNewProject
