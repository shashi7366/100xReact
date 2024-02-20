import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools"

function SignUpForm(){

    const form=useForm();

    const {register,control,handleSubmit,formState}=form;
    const {errors}=formState;

    function onSubmit(data){
        console.log("form submitted");
    }

    return<div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
            <label htmlFor="username">username</label>
            <input type="text" id="username" {...register("username",{
                required:{
                    value:true,
                    message:"this field is mandatory"
                }
            })} />
            <p className="error">{errors.username?.message}</p>
            </div>

            <div>
            <label htmlFor="email">email</label>
            <input type="text" id="email" {...register("email",{
                required:{
                    value:true,
                    message:"this field is mandatory"
                },
                pattern:{
                    value:/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm,
                    message:"email format is invalid"
                },
                validate:{
                    notAdmin:(fieldValue)=>{
                        return !(fieldValue==='shashi@gmail.com')||"this email is blacklisted"
                    },
                    blacklistedDomain:(fieldValue)=>{
                        return !(fieldValue.endsWith("gmail.com"))||"this domain is blacklisted"
                    }
                }
            })}/>
            <p className="error">{errors.email?.message}</p>
            </div>

            <div>
            <label htmlFor="channel">channel</label>
            <input type="text" id="channel" {...register("channel",{
                required:{
                    value:true,
                    message:"this field is mandatory"
                },
                
            })}/>
            <p className="error">{errors.channel?.message}</p>
            </div>

            <div>
                <button>submit</button>
            </div>

        </form>
        <DevTool control={control} />
    </div>
}

export default SignUpForm;