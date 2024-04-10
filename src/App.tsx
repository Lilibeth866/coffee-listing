import React, { useEffect, useState } from 'react';
import AppCard from './shared/components/AppCard';
import styled from 'styled-components';
import bg from './assets/images/bg-cafe.jpg'
import vector from './assets/images/vector.svg'
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

function App() {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  useEffect( ()=> {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(response => response.json())
      .then(data => {
        setCoffees(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  console.log(coffees);
  return (
    <AppStyles>
      <div className="App">
        <div className='img-background'>
          <img src={bg} alt="" />
        </div>
        <div className='main-content'>
            <img className='content-bg-vector' src={vector} alt='background vector'></img>
          <div className='content-header'>
            <div className='header-title'>
              Our Collection
            </div>
            <div className='header-description'>
              Introducing our Coffee Collection, a selection of unique coffees <br />
              from different roast types and origins, expertly roasted in small <br />
              batches and shipped fresh weekly.
            </div>
            <div className='header-buttons'>
              <button type='button' className='btn btn-allProductos'>All Products</button>
              <button type='button' className='btn btn-availableNow'>Available Now</button>
            </div>
          </div>
          <div className='cards'>
            {coffees.map(coffee => (
              <AppCard key={coffee.id} coffee={coffee}></AppCard>
            ))}
          </div>
        </div>
      </div>
    </AppStyles>
  );
}

export default App;

const AppStyles = styled.div`
  .main-content {
    position: relative;
    z-index: 2;
    margin: 6rem auto;
    padding: 5rem 2rem;
    background-color: #1B1D1F;
    border-radius: 14px;
    width: 300px;
  }
  .img-background {
    position: absolute;
    width:100%;
    top:0;
    z-index: 1;
  }
  .img-background img {
    height: 320px;
    width: 100%;
    object-fit: cover;
  }
  .content-header {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    font-weight: 600;
  }
  .content-bg-vector {
    position: absolute;
    right: 27%;
    top: 2rem;
  }
  .header-title {
    font-size: 2rem;
    color: #FEF7EE;
  }
  .header-description {
    font-size: 1rem;
    color: #6F757C;
  }
  .header-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }
  .btn {
    padding: .5rem .8rem;
    background-color: #6F757C;
    border-radius: 8px;
    border: unset;
    color: #FEF7EE;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
  }
  .btn-availableNow {
    background-color: #1B1D1F;
    color: #FEF7EE;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .main-content {
      margin: 10rem auto;
      padding: 6rem 5rem;
      width: 580px;
    }
    .cards {
      grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    }
  }

  @media (min-width: 992px) {
    .main-content {
      width: 800px;
      padding: 4rem;
    }
    .cards {
      grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    }
  }
  @media (min-width: 1200px) {
    .main-content {
      width: 900px;
      padding: 6rem 8rem;
    }
  }
`
