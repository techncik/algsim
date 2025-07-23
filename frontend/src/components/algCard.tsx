import "../styles/AlgCard.css"
import pic from "../image-placeholder-500x500-1.jpeg"

function AlgCard() {

    return (
        <>
            <div className="container">
                <div className="title">
                    title
                </div>
                <div className="thumbnail">
                    <img src={pic} alt="placeholder-image" className="placeholder" />
                    <div className="complexity">
                        O(n^2)
                    </div>
                </div>
            </div>
        </>
    )

}

export default AlgCard