import "./Preview.css"
let Preview=()=>{
    return(
        <div className="preview-container">
            <div className="preview-img-container">
                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1536184191i/41721428._UY500_SS500_.jpg"></img>
            </div>
            <div className="preview-listing">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus veritatis laboriosam magni ullam facere nobis nihil maiores id velit reprehenderit dolores, iste ad corporis illo ratione doloribus aperiam iusto laborum est dolor magnam distinctio! Repellat sapiente eveniet vitae incidunt a doloremque cum tenetur, minima qui quas, repudiandae pariatur dolore.</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Preview;