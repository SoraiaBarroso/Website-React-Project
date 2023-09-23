import "./Faq.css"

const GridItem = ({img, title}) => {
    return (
        <div data-aos="zoom-in" className="grid-item">
            <img src={img} alt="rocket"></img>
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis leo at dapibus dictum.</p>
        </div>
    )
}

export default GridItem;