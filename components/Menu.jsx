import style from '../styles/menu.module.css'

const Menu = ({visible}) => {

    const redirect=(url)=>{
        window.location.href = url
    }

    window.addEventListener("keydown", e => {
        if(e.key == 'i'){
            redirect('/infos')
        }
        if(e.key == 'r'){
            redirect('/')
        }
        if(e.key == 'f'){
            
        }
    })
    return (
        (visible)?
        <div className={style.menu}>
            <p>[I] INFORMATION</p>
            <p>[R] REJOUER</p>
        </div>
        :false
    );
};

export default Menu;