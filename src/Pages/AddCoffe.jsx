import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Title from '../components/Title';

const AddCoffe = () => {
   const navigate = useNavigate();

   function handleAddCoffee(e) {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const chef = form.chef.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const price = form.price.value;
      const photoURL = form.photo.value;

      const coffee = { name, chef, supplier, taste, category, details, price, photoURL }

      // add and save coffe in the database
      fetch("http://localhost:5000/add-coffee", {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(coffee)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.insertedId) {
               alert(`${name} has been added successfully`)
               form.reset();
               navigate('/');
            }
         })
   }

   return (
      <div className='bg-add-coffee bg-cover bg-center py-10 '>
         <div className='w-full flex items-left justify-center flex-col gap-3 max-w-6xl mx-auto  p-4 '>
            <Link to={'/'}><button className='btn font-rancho drop-shadow-lg rounded-sm shadow-sm mb-5 text-xl font-semibold'>Back to home</button></Link>
            <div className="card  w-full shrink-0 items-center mx-auto bg-[#F4F3F0] rounded-sm p-4 sm:py-10">
               <header className='mb-5'>
                  <Title title={'Add New Coffee'}></Title>
               </header>
               <form onSubmit={handleAddCoffee} className="card-body w-full max-w-3xl mx-auto">
                  {/* form input row 1 */}
                  <div className='grid sm:grid-cols-2 gap-3'>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Coffee Name" name='name' className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Chef</span>
                        </label>
                        <input type="text" placeholder="Enter Coffee Chef" name='chef' className="input input-bordered" required />
                     </div>
                  </div>
                  {/* form input row 2 */}
                  <div className='grid sm:grid-cols-2 gap-3'>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="Enter Coffee Supplier" name='supplier' className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Taste</span>
                        </label>
                        <input type="text" placeholder="Enter Coffee Taste" name='taste' className="input input-bordered" required />
                     </div>
                  </div>
                  {/* form input row 3 */}
                  <div className='grid sm:grid-cols-2 gap-3'>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Enter Coffee Category" name='category' className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Enter Coffee Details" name='details' className="input input-bordered" required />
                     </div>
                  </div>
                  {/* form input row 4 */}
                  <div className='grid sm:grid-cols-2 gap-3'>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Enter Coffee Price" name='price' className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Enter Photo URL" name='photo' className="input input-bordered" required />
                     </div>
                  </div>

                  <div className="form-control mt-6">
                     <button className="btn btn-primary bg-primary text-black border border-black hover:bg-primary/90 hover:border-black">Add Coffee</button>
                  </div>
               </form>
            </div>

         </div>
      </div>
   )
}

export default AddCoffe
