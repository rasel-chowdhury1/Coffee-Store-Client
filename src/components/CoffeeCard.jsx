import React from 'react';

const CoffeeCard = ({coffee}) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='m-5'><img src={coffee.Photo} alt="Album"/></figure>
            <div className="flex justify-between w-full mx-2 ">
                <div className='grid content-center'>
                    <h2 className="card-title">Name: {coffee.Name}</h2>
                    <p>Details: {coffee.Details}</p>
                    <p>Quantity: {coffee.Quantity}</p>
                </div>
                <div className="join join-vertical">
                    <button className="btn join-item my-2 mb-2 btn-primary">Veiw</button>
                    <button className="btn join-item my-2 mb-2 btn-accent">Edit</button>
                    <button className="btn join-item my-2 mb-2 btn-secondary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;