const InstrumentsJsx = ({name, id, desc}) => {
    
    const src =  `https://randomuser.me/api/portraits/lego/${id}.jpg`
   

    return (
        <picture>
            <img src={src} alt='name'/>
            {name}
            {desc}
        </picture>
    )
}

export default InstrumentsJsx
