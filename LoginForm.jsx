import "./LoginForm.css";
const LoginForm = () => {
    return (
        <div>
            <div className="login-form">
                
                    <input className="id-pw" type="text" placeholder="아이디"/>
                    <input className="id-pw" type="password" placeholder="비밀번호"/>
                
                <div className="checkbox">
                    <div><input type="checkbox"/>아이디기억</div>
                    <div><input type="checkbox"/>로그인유지</div>
                </div>
                
                <button className="login-btn">로그인</button>
            </div>
           
        </div>
    )
}

export default LoginForm;