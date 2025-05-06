import React from 'react';
import axios from 'axios';

class Todos extends React.Component {
    state = {
        name: 'todos',
        todos: [],
        isLoading: true,
        isError: '',
    };

    componentDidMount() {
        this.getTodos();
    }

    async getTodos() {
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            this.setState({ todos: data, isLoading: false });
            console.log(data);
        } catch (error) {
            this.setState({ isError: error });
        }
    }



    render() {
        if (this.state.isError) {
            return <div>{this.isError}</div>
        }
        if (this.state.isLoading) {
            return <p>Loading</p>
        }
        return (
            <React.Fragment>
                <section className='w-full h-screen flex justify-center items-center overflow-auto'>
                    {
                        this.state.todos ? (<div>
                            {this.state.todos.map(todo => {
                                return <li key={todo.id}>{todo.title}</li>
                            })}
                        </div>) : (<div>
                            <h1>Nothing!</h1>
                        </div>)
                    }
                </section>
            </React.Fragment>
        );
    }
}

export default Todos;