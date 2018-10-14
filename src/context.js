import React,{Component} from 'react';
const Context=React.createContext();
export class Provider extends Component{
    state={
        contacts:[
            {
                id:178,
               name:"Vikas Gupta",
               email:"vikas@mail.com",
               phone:"222-222-2222"
            },
            {
                id:179,
                name:"Vikram Singh",
                email:"vikram@mail.com",
                phone:"333-333-3333"
            },
            {
                id:180,
                name:"Vinay Champ",
                email:"vinay@mail.com",
                phone:"444-444-4444"
            }
        ]
    }
    
    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const {Consumer} = Context.Consumer;