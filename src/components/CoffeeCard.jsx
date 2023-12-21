import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,coffeess,setCoffeess}) => {

    const {_id,Photo,Name,Details,Quantity} = coffee;

    const handleDeleteButton = id =>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( (result)=>{
            if(result.isConfirmed){

                fetch(`http://localhost:3000/coffee/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your coffee has been deleted',
                            'success',
                        )
                       
                        const remaining = coffeess.filter(cof => cof._id !== id);
                        setCoffeess(remaining);
                    }
                    
                })
            }
        })
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='m-5'><img src={Photo} alt="Album"/></figure>
            <div className="flex justify-between w-full mx-2 ">
                <div className='grid content-center'>
                    <h2 className="card-title">Name: {Name}</h2>
                    <p>Details: {Details}</p>
                    <p>Quantity: {Quantity}</p>
                </div>
                <div className="join join-vertical">
                    <button className="btn join-item my-2 mb-2 btn-primary">Veiw</button>
                    <Link to={`/updateCoffee/${_id}`}>
                       <button className="btn join-item my-2 mb-2 btn-accent">Edit</button>
                    </Link>
                    <button onClick={()=>handleDeleteButton(_id)} className="btn join-item my-2 mb-2 btn-secondary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;