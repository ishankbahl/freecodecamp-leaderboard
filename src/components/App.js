import React,{Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component{
    constructor(){
        super();
        this.fetchData=this.fetchData.bind(this);
        this.state={
            last:{},
            top:{}
        }
    }

    fetchData(){
        fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent",{
            method:"GET"
        }).then((response)=>{
            console.log(JSON.stringify(response));
        });
    }

    render(){
        return(
            <div>
                <div className="panel panel-success">
                    <div className="panel-heading">freeCodeCamp Leaderboard</div>
                    <div className="panel-body">
                        <table className="table table-striped table-bordered">
                            {this.fetchData()}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;