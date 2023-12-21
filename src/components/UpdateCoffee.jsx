import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    
    const coffee = useLoaderData();
    const {_id,Photo,Name,Details,Quantity,Supplier,Taste,Category} = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const Name = event.target.coffee.value;
        const Quantity = event.target.quantity.value;
        const Supplier = event.target.supplier.value;
        const Taste = event.target.taste.value;
        const Category = event.target.category.value;
        const Details = event.target.details.value;
        const Photo = event.target.photo.value;

        const updateCoffee = {Name,Quantity,Supplier,Taste,Category,Details,Photo}

        console.log(updateCoffee);

        //send data to the server
        fetch(`http://localhost:3000/updateCoffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Successful',
                    text: 'Coffee Updated Successfully!!!',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })                  
            }
        })
        
        event.target.reset();
    }

    return (
        <div className='AddCoffee'>
            <div className='Coffee'>
                <div className="Coffee-Content">
                    <h3 className='text-3xl font-extrabold'>Update Coffee</h3>
                </div>

                <form onSubmit={handleUpdateCoffee}>
                    <div className='md:flex space-x-4'>
                        <div>
                            <label >Coffee Name</label><br />
                            <input type="text" name="coffee" defaultValue={Name} placeholder='Enter Coffee name' className="input input-bordered w-full max-w-xs my-3 w-80" required/>
                        </div>
                        <div>
                            <label >Available Quantity</label><br />
                            <input type="text" name="quantity" defaultValue={Quantity} placeholder='Enter Coffee Quantity' className="input input-bordered w-full max-w-xs my-3 w-80" required/>
                        </div>
                    </div>

                    <div className='flex space-x-4'>
                        <div>
                            <label >Supplier</label><br />
                            <input type="text" name="supplier" defaultValue={Supplier} placeholder='Enter Coffee Supplier' className="input input-bordered w-full max-w-xs my-3 w-80" required/>
                        </div>
                        <div>
                            <label >Taste</label><br />
                            <input type="text" name="taste" defaultValue={Taste} placeholder='Enter Coffee Taste' className="input input-bordered w-full max-w-xs my-3 w-80" required/>
                        </div>
                    </div>

                    <div className='flex space-x-4'>
                        <div>
                            <label >Category</label><br />
                            <input type="text" name="category" defaultValue={Category} placeholder='Enter Coffee name' className="input input-bordered w-full max-w-xs my-3 w-80" required/>
                        </div>
                        <div>
                            <label className='my-10px' >Details</label><br />
                            <input type="text" name="details" defaultValue={Details} placeholder='Enter Coffee Chef' className="input input-bordered w-full max-w-xs my-3 w-80" required/>
                        </div>
                    </div>

                        <div>
                            <label >Photo</label><br />
                            <input type="url" name="photo" defaultValue={Photo} placeholder='Enter Photo Url' className="input input-bordered w-full max-w-xl my-3 " required/>
                        </div>

                        <input type="submit" value='Update Coffee'className="input input-bordered w-full max-w-xl my-3 bg-black text-white" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;