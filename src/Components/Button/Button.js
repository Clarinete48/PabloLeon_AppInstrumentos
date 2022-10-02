import './Button.css'

const Button = ({ Label, background, action }) => {
    return <button
    className='Button'
    style={{
        background: background,
        color: 'white'
    }}
    onClick={action}
    >
        
        {Label}</button>
}

export default Button