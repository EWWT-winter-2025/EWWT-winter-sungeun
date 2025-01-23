import './Header.css'

const Header=()=>{
    return(
        <div className='header'>
            
           <div className='header-logo'>
            <img src="https://ifh.cc/g/zFqpxT.png"/>
           </div>

           <div className='header-menu'>
            <ul>
                <li>이화이언</li>
                <li>라이프</li>
                <li>캠퍼스</li>
                <li>이벤트</li>
                <li>콘텐츠</li>
            </ul>
            <img src="https://www.ewhaian.com/assets/img/key_P_L.svg"/>
           </div>

        </div>
    )
}

export default Header