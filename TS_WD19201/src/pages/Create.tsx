// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { useForm, SubmitHandler } from "react-hook-form";
// import axios from "axios";
// import { ProductInput } from '../type/product';
// import { useNavigate } from "react-router-dom"; // chuyển hướng khi nhán thêm mơuis

// function Create(){
//       const {
//         register,
//         handleSubmit,
//         formState: {errors}
        
//       }= useForm<ProductInput>();
//      const navigate = useNavigate();

//       const onSubmit:SubmitHandler<ProductInput> = async (data) =>{
//         try{
//             await axios.post(" http://localhost:3000/products",data);

//             navigate("/"); //chuyển hướng về trang danh sách
//         }catch(error)   { /* empty */ }
        
      
        
//       }

//     return (


//         <div>
//                    <h1>Trang thêm mới</h1>

//                    <form action="" onSubmit={handleSubmit(onSubmit)}>

//                     <div> 
//                     <label htmlFor="" className="from-label">Name</label>
//                     <input type="text" className="from-control" 
//                     id="name" 
//                      {...register("name",{
//                         required: "name"
//                     })}
//                     />
//                     {errors?.name &&(
//                         <p className="text- danger">{errors?.name?.message
//                         }
//                         </p>
//                     )}
                   
//                       </div>

//                       <div> 
//                     <label htmlFor="">Name</label>
//                     <input type="text" id="price" 
//                      />
//                       </div>


//                       <div> 
//                     <label htmlFor="">Name</label>
//                     <input type="text" />
//                       </div>

//                       <div> 
//                     <label htmlFor="">Name</label>
//                     <input type="text" />
//                       </div>


//                       <div> 
//                     <label htmlFor="">Name</label>
//                     <input type="text" />
//                       </div>
                    
//                    </form>
//              <button type="submit" >Thêm</button>

//         </div>
//     );
// };
// export default Create;