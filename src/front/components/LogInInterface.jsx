export const Login = () => {
    return(
        <div>
            <h1>
                LOG IN
            </h1>
            <div>
                <input className="email" placeholder="enter email">
                    Email
                </input>
            </div>
            <div>    
                <input className="password" placeholder="enter password">
                    Password
                </input>
            </div>
            <button className="btn btn-primary">
                SUBMIT
            </button>
        </div>
    )
}
