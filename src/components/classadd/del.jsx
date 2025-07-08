import { Component } from "react";
import BasicExample from "../useState/cardComponent";


class CardAddDel extends Component{
    state={
        employeeData:[]
    }
    Handler=()=>{
        const name=["Ranjith","Aarthi",'Rahul Nani','Ammulu Reddy','Nikitha Reddy','Sirisha Reedy','Oshiyn']
        const roles=["Front-end Developer","Back-End Developer","React-Developer","Java-Developer","Python-Developer"]
        const updatedNames=name[Math.floor(Math.random()*name.length)]
        const updatedRoles=roles[Math.floor(Math.random()*roles.length)]
        const updatedSalary=Math.floor(Math.random()*5000)+1000

        const newData={
            name:updatedNames,
            salary:updatedSalary,
            role:updatedRoles
        }

        const newData1=[...this.state.employeeData,newData]

        this.setState({
            employeeData:newData1
        })
    }

    removeHandler=(index)=>{
        const filterData=this.state.employeeData.filter((_,id)=>id!==index)
        this.setState({
            employeeData:filterData
        })
    }
    render(){
        return(
            <>
           <>
  <button onClick={this.Handler}>Add Card</button>

  {this.state.employeeData.length > 0 ? (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {this.state.employeeData.map((emp, index) => (
        <BasicExample
          key={index}
          title={`Name: ${emp.name}`}
          ind={index}
          role={`Role: ${emp.role}`}
          salary={`Salary: ${emp.salary}`}
          removeHandler={this.removeHandler}
        />
      ))}
    </div>
  ) : (
    <h3>No Cards Found</h3>
  )}
</>

            </>

        )
    }
}
export default CardAddDel