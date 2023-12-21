
import React from 'react';
import './AddCoffee.css';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();
        const Name = event.target.coffee.value;
        const Quantity = event.target.quantity.value;
        const Supplier = event.target.supplier.value;
        const Taste = event.target.taste.value;
        const Category = event.target.category.value;
        const Details = event.target.details.value;
        const Photo = event.target.photo.value;

        const newCoffee = {Name,Quantity,Supplier,Taste,Category,Details,Photo}

        console.log(newCoffee);

        //send data to the server
        fetch('http://localhost:3000/coffee',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Successful',
                    text: 'Coffee added Successfully!!!',
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
                    <h3 className='text-3xl font-extrabold'>Add New Coffee</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, soluta? Modi praesentium nam, voluptatibus explicabo, consequatur a minima iste quia blanditiis totam culpa, ducimus repellat.</p>
                </div>

                <form onSubmit={handleAddCoffee}>
                    <div className='md:flex space-x-4'>
                        <div>
                            <label >Coffee Name</label><br />
                            <input type="text" name="coffee" placeholder='Enter Coffee name' className="input input-bordered w-full max-w-xs my-3 w-80" required/>
                        </div>
                        <div>
                            <label >Available Quantity</label><br />
                            <input type="text" name="quantity" placeholder='Enter Coffee Quantity' className="input input-bordered w-full max-w-xs my-3 w-80" required/>
                        </div>
                    </div>

                    <div className='flex space-x-4'>
                        <div>
                            <label >Supplier</label><br />
                            <input type="text" name="supplier" placeholder='Enter Coffee Supplier' className="input input-bordered w-full max-w-xs my-3 w-80" required/>
                        </div>
                        <div>
                            <label >Taste</label><br />
                            <input type="text" name="taste" placeholder='Enter Coffee Taste' className="input input-bordered w-full max-w-xs my-3 w-80" required/>
                        </div>
                    </div>

                    <div className='flex space-x-4'>
                        <div>
                            <label >Category</label><br />
                            <input type="text" name="category" placeholder='Enter Coffee name' className="input input-bordered w-full max-w-xs my-3 w-80" required/>
                        </div>
                        <div>
                            <label className='my-10px' >Details</label><br />
                            <input type="text" name="details" placeholder='Enter Coffee Chef' className="input input-bordered w-full max-w-xs my-3 w-80" required/>
                        </div>
                    </div>

                        <div>
                            <label >Photo</label><br />
                            <input type="url" name="photo" placeholder='Enter Photo Url' className="input input-bordered w-full max-w-xl my-3 " required/>
                        </div>

                        <input type="submit" value='Add Coffee'className="input input-bordered w-full max-w-xl my-3 bg-black text-white" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;