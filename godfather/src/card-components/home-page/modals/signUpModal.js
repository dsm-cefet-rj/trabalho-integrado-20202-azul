import { signUpUser } from '../../../store/slices/userSlice'
import { useDispatch } from 'react-redux'
import {userSchema} from './userSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

function SignUpModal() {
    const dispatch = useDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(userSchema)
    })

    const signUpSubmitHandler = formData => {
        dispatch(signUpUser(formData))
        alert('You have submitted your registration')
    }

    return(
        <form onSubmit={handleSubmit(signUpSubmitHandler)}>
            <div className="modal-body">
                <p>Username: </p>
                <input className="form-control" {...register("username")} />
                <span>{errors.username?.message}</span>
                <p>Password: </p>
                <input className="form-control" type="password" {...register("password")} />
                <span>{errors.password?.message}</span>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-success" >Register</button>
            </div>
        </form>
    )
}

export default SignUpModal
