import React from "react";

class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {car:'Volkswagen',girls:20,time:new Date()}
    }

    add = ()=>{
        this.setState({girls:this.state.girls + 1})
    }

    static getDerivedStateFromProps(props, state){
        return null
    }

    componentDidMount(){
       setInterval(
        ()=>{
            this.setState({time:new Date()})
        },(1000)
       )
    }


    render(){
        const {car,time} = this.state

        return(
            <div>
                <div>
                    This is Header! with {car}
                </div>
                <div>
                    <B {...this.state}/>
                </div>
                <button onClick={this.add} >Increase Girls</button>
                <div> Time is {time.toTimeString()} </div>
            </div>
        )
    }
}

class B extends React.Component{

    render(){
        return(
            <div>
                This is class B {this.props.car} with {this.props.girls} girls
            </div>
        )
    }
}

export default Header