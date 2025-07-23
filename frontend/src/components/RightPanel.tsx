import "../styles/Panels.css"
import AlgCard from "./algCard"

function RightPanel () {

    return (
        <>
            <div className="right-panel">
                <div className="alg-list-container">
                    <div className="choose-alg-heading">
                        Choose an algorithm
                    </div>
                    <div className="alg-list-grid">
                        <AlgCard></AlgCard>
                        <AlgCard></AlgCard>
                     
                        
                        
                    </div>
                    <div className="alg-filter-container">
                        alg filter
                    </div>
                    <div className="alg-search-container">
                        alg search
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightPanel