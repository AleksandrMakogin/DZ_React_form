
import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


class Form extends React.Component{

     constructor(){
         super()
         this.state ={

           FirstName : '',
           LastName  : '',
           Age : '',
           Select : '',
           Restraction : true, 
           RestractionAlergic : true,
           Gender : ''
         }
     }

     HandlerForm = (event)=>{
       this.setState({
           [event.target.name] : event.target.value
       })
     }

     handelCheckBox =(event)=>{
      this.setState({
        [event.target.name] : event.target.checked
    })
     }



    render(){
       
       const {FirstName,LastName,Age, Select, Restraction, RestractionAlergic} = this.state
        return(
          <div className="d-flex justify-content-evenly">
            <div className="Form" >
               <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">FirstName</label>
                  <input type="text" class="form-control" placeholder="FirstName"  aria-describedby="emailHelp" name="FirstName" value={FirstName} onChange={this.HandlerForm}/>
                  
                </div>
               <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">LastName</label>
                 <input type="text" placeholder="Lastname" class="form-control"  name="LastName" value={LastName} onChange={this.HandlerForm}/>
                </div>
                <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Age</label>
                 <input type="text" placeholder="Age" class="form-control"  name="Age" value={Age} onChange={this.HandlerForm}/>
                </div>
               <div class="mb-3 form-check d-flex justify-content-between">
                <div>
                  <input class="form-check-input" type="radio" name="Gender" value="Mужчина"  onChange={this.HandlerForm} id="flexRadioDefault1"/>
                  <label class="form-check-label" for="flexRadioDefault1">Male </label>  
                </div>
                <div>
                  <input class="form-check-input" type="radio" name="Gender" value="Женщина" onChange={this.HandlerForm} id="flexRadioDefault2" />
                  <label class="form-check-label" for="flexRadioDefault2">
                  Famale
                  </label>
                </div>
               
               </div>
               <div>
                 <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="Select" value={Select} on onChange={this.HandlerForm}>
                    <option selected>Выберете направление доставки</option>
                    <option value="Киев">Киев</option>
                    <option value="Харьков">Харьков</option>
                    <option value="Харьков">Днепр</option>
                  </select>
               </div>

               <div class="form-check  justify-content-start mt-3">
                   <div>
                     <input class="form-check-input" type="checkbox" name="Restraction" checked={Restraction}  onChange={this.handelCheckBox}  id="flexCheckDefault"/>
                     <label class="form-check-label" for="flexCheckDefault">
                     Наличие сахарного диабета
                     </label>
                   </div>
                   <div>
                      <input class="form-check-input" type="checkbox"  name="RestractionAlergic" checked ={RestractionAlergic} onChange={this.handelCheckBox} id="flexCheckChecked" />
                      <label class="form-check-label" for="flexCheckChecked">
                        наличие алергическич реакций
                      </label>
                   </div>
               </div>
              
                 <button type="submit" onClick={this.OutOut} class="btn btn-primary mt-4">Submit</button>
              </form>

              

            </div>
        
             <div className="OutPut">
              <div  class=" d-flex flex-column bd-highlight mb-3">
                 <div class="p-2 bd-highlight"><b>Ваше Имя: </b>{this.state.FirstName}</div>
                 <div class="p-2 bd-highlight"><p><b>Ваше Фамииля: </b>{this.state.LastName}</p></div>
                 <div class="p-2 bd-highlight"><p><b>Ваше Возраст: </b>{this.state.Age}</p></div>
                 <div class="p-2 bd-highlight"><p><b>Ваш Регион: </b>{this.state.Select}</p></div>
                 <div class="p-2 bd-highlight"><p><b>Ваш Пол: </b>{this.state.Gender}</p></div>
                 <div class="p-2 bd-highlight"><p><b>Наличие Сахарного Диабета: </b>{this.state.Restraction ? "есть" : "нет"}</p></div>
                 <div class="p-2 bd-highlight"><p><b>Наличие Алергии: </b>{this.state.RestractionAlergic ? "есть" : "нет"}</p></div>
             </div>
             </div>
                       
         </div>
        )
    }
}
export default Form