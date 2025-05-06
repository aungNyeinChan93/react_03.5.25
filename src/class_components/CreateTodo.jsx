import axios from 'axios';
import React from 'react';


class CreateTodo extends React.Component {

    state = {
        title: '',
        body: '',
        userId: '',
    };

    formSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => console.log(response.data))
            .catch(err => console.log(err.message))
    }

    render() {
        const { body, title, userId } = this.state;
        return (
            <React.Fragment>
                <section className='flex justify-center items-center w-full h-screen bg-cyan-200'>
                    <div>
                        <form onSubmit={this.formSubmit} className='flex justify-center flex-col items-center space-y-6 bg-gray-300 p-4 rounded'>
                            <input className='border border-red-600 mx-3' type="text" name="title" placeholder='title' value={title} onChange={(e) => this.setState({ title: e.target.value })} />
                            <input className='border border-red-600 mx-3' type="text" name="body" placeholder='body' value={body} onChange={(e) => this.setState({ body: e.target.value })} />
                            <input className='border border-red-600 mx-3' type="text" name="userId" placeholder='userId' value={userId} onChange={(e) => this.setState({ userId: e.target.value })} />
                            <button type='submit'> Create Todo </button>
                        </form>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default CreateTodo;