import { ReactNode } from "react";
import styled from "styled-components"
import emptyStart from "../../assets/images/Star.svg"
import start from "../../assets/images/Star_fill.svg"

interface Coffee {
    id: number;
    name: string;
    image: string;
    price: string;
    rating: number;
    votes: number;
    popular: boolean;
    available: boolean;
}

interface AppCardProps {
    coffee: Coffee;
}
const AppCard: React.FC<AppCardProps> = ({ coffee }) => {
    return (
        <AppCardStyles>
            <div className="card">
                <div className="card-image">
                    <img src={coffee.image} alt={coffee.name} />
                        {coffee.popular ? 
                            (<div className="badge">
                                <span>Popular</span>
                            </div>) 
                            : ''
                        }
                </div>

                <div className="card-content">
                    <div className="content-info">
                        <span>{coffee.name}</span>
                        <p>{coffee.price}</p>
                    </div>
                    <div className="content-scale">
                        <div className="scale-left">
                            {coffee.rating ? 
                                (<img src={start} alt="raiting start"></img> ): 
                                (<img src={emptyStart} alt="no raiting start"></img>)
                            }
                            <span className="left-raiting">{coffee.rating}</span>
                            <span className="left-votes">({coffee.votes ? `${coffee.votes} votes` : 'No Raiting'})</span>
                        </div>
                        {coffee.available ? '' :  <span className="scale-soldOut">Sold out</span>}
                    </div>
                </div>
            </div>
        </AppCardStyles>
    )
}

export default AppCard

const AppCardStyles = styled.div `
    .card-image {
        position: relative;
    }
    .card-image img {
        border-radius: 12px;
        width:100%
    }
    .badge {
        position: absolute;
        display: flex;
        align-items: center;
        padding: .325rem 1rem;
        top: .5rem;
        left: .5rem;
        border-radius: 999px;
        background-color: #F6C768;
        color: #111315;
        font-size: 0.625rem;
        font-weight: bold;
    }
    .card-content {
        display: flex;
        flex-direction: column;
    }
    .content-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-weight: 700;
    }
    .content-info span {
        color: #FEF7EE;
        font-size: 16px;
        font-weight: bold;
    }
    .content-info p {
        font-size: 0.875rem;
        color: #1B1D1F;
        background-color: #BEE3CC;
        border-radius: 4px;
        padding: .325rem .565rem;
    }
    .content-scale {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        font-weight: bold;
    }
    .scale-left {
        display: flex;
        align-items: center;
    }
    .left-raiting {
        color: #FEF7EE;
        margin-right: 4px;
    }
    .left-votes {
        color: #6F757C;
    }
    .scale-soldOut {
        color: #ED735D;
    }

    @media (min-width: 1200px) {
        .card {
            max-width: 18rem;
        }
    }
`