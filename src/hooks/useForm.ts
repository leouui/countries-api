import { useState } from "react"

interface props {
    initialValues?: {[key:string]:any},
    handleSubmit?:(values: {[key:string]:any}) => void 
}

export const useForm = ({initialValues = {},handleSubmit}:props = {}) => {
    const [formValues,setFormValues] = useState(initialValues)

    const onChange = ({target:{value,name}}:React.ChangeEvent<any>) => setFormValues(state => ({...state,[name]:value}))

    const onSubmitEvt = (e : React.FormEvent<any>) => {
        e.preventDefault()
        handleSubmit && handleSubmit(formValues)
    } 

    return {
        formValues,
        onChange,
        onSubmitEvt
    }
}