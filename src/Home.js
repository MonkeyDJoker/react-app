import React from 'react';
import './Home.css'


class HelloMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isHot: true };
        this.changeWeather = this.changeWeather.bind(this);
    }

    render() {
        const { isHot } = this.state
        return <div className='helloMessage' onClick={this.changeWeather}>Hello react, weather is {isHot ? 'Hot' : 'Cold'}</div>;
    }

    changeWeather() {
        const isHot = this.state.isHot;
        this.setState({ isHot: !isHot })
        console.log(isHot)
        // this.setState.isHot = !isHot;
    }

}

class HelloMessageSimple extends React.Component {

    state = { isHot: true }

    render() {
        const isHot = this.state.isHot;
        return (
            <div onClick={this.changeWeather}>
                I am {isHot ? 'Hot' : 'Cold'}
            </div>
        )
    }

    changeWeather = () => {
        const isHot = this.state.isHot;
        this.setState({ isHot: !isHot })
        console.log(isHot)
    }

}

class Person extends React.Component {

    render() {
        const { name, age, gender } = this.props;

        return (
            <ul>
                <li>Name:{name}</li>
                <li>Age:{age}</li>
                <li>Gender:{gender}</li>
            </ul>
        )
    }

}
class TypeName extends React.Component {

    constructor(props){
        super(props)
        this.input1 = React.createRef()
        this.input2 = React.createRef()

    }

    render() {
        return (
            <div>
                <input ref={this.input1} type="text" placeholder='Enter'/>
                <button onClick={this.button} >Please Enter</button>
                <input ref={this.input2} onBlur={this.leave} type="text" placeholder='Enter'/>
            </div>
        )
    }

    button = () => {
        const input1 = this.input1.current.value  
        alert(input1)
    }

    leave = ( event ) =>{
        // 用ref传value值
        const input2 = this.input2.current.value
        alert(input2)
        // 可以直接避免使用ref，用event可以直接传当前元素的value值
        console.log(event.target.value)
    }
}


class NamePassword extends React.Component{
    render(){
        return(
            <div>
                <form action='https://www.google.com/' onSubmit={this.submit}>
                    Name: <input ref={(c)=>{this.username = c}} type='text' placeholder='please enter name' name='username'></input>
                    Password: <input ref={(c)=>{this.password = c}} type='password' placeholder='please enter password' name='password'></input>
                    <button>submit</button>

                </form>
            </div>
        )
    }

    submit = (event)=>{
        // 阻止表单默认提交行为
        event.preventDefault()
        const username = this.username.value
        const password = this.password.value
        alert('name:' + username + 'password:' + password)
    }
}

class NamePassword2 extends React.Component{

    state = {
        username : '',
        password : ''
    }

    username = (event)=>{
        this.setState({username:event.target.value})
    }

    password = (event)=>{
        this.setState({password:event.target.value})
    }

    submit = (event)=>{
        event.preventDefault()
        const {username,password} = this.state
        alert( `this is username ${username} , this is password ${password}` )
    }

    render(){
        return(
            <div className='namePassword2'>
                <form onSubmit={this.submit} >
                    Name: <input onChange={this.username} type='text' name='username'></input>
                    password: <input onChange={this.password} type='password' name='password'></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


export { 
    HelloMessage, 
    Person, 
    HelloMessageSimple, 
    TypeName,
    NamePassword,
    NamePassword2
}
