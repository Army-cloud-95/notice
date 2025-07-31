import React,{useState} from 'react';

const Form = () => {

      const [purpose, setPurpose] = useState("");
      const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        volunteerRole: '',
        message: ''
      });

  const isSelected = (value) => purpose === value;

  const handleInputChange = (e) =>{
    setFormData({
        ...formData, 
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Form submitted:', {...formData, purpose});
  }

    return (
        <div id="form" className=" min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
            <div className=" text-center mb-12">
                <h1 className="text-5xl md:text-5xl text-gray-800 mb-4 leading-tight font-bold">
                    Get Involved With 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                         Ek-Prayass
                    </span>
                    </h1>
                    <p className="text-yellow-600 text-xl font-medium italic mb-4" >
                        “Your small effort can bring a big change.”
                        </p>
                <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
                    Whether you want to volunteer, donate, or collaborate — we’d love to hear from you!
                </p>
            </div>
            {/* Form Containter */}

            <div className="bg-white rounded-3xl p-8 shadow-2xl md:p-12 border border-yellow-200">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6" >
                        <div className="space-y-2">
                            <label className="block text-gray-700 font-semibold text-lg">
                                Full Name <span className="text-red-500">*</span></label>

                            <input
                            type="text" 
                            name='fullName'
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder='Enter your full name'
                            required
                            className=" px-4 py-3 border-2 border-yellow-300 rounded-xl  w-full focus:outline-none  focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200  transition-all duration-300 text-gray-700 placeholder-gray-400"
                            />
                        </div>


                        <div className="space-y-2">
                            <label className="block text-gray-700 font-semibold text-lg">
                                Email <span className="text-red-500">*</span></label>
                            <input
                            name='email'
                            type="email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Enter your email'
                            required
                           className=" px-4 py-3 border-2 border-yellow-300 rounded-xl  w-full focus:outline-none  focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200  transition-all duration-300 text-gray-700 placeholder-gray-400"
                            />
                        </div>
                        </div> 

                        <div className="space-y-2">
                            <label className="block text-gray-700 font-semibold text-lg">
                                Phone Number <span className="text-gray-400 text-sm">(Optional)</span>
                            </label>
                            <input
                                type='tel'
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder='Enter your phone number'
                                className="w-full px-4 py-3 border-2 border-yellow-300 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">“How would you like to connect with us?”</h3>
                                <p className="text-gray-600 text-lg">Choose your preferred way to contribute</p>
                            </div>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {["Volunteer","Donate","Collaborate"].map((option) => (
                                        <button
                                            key={option}
                                            type="button"
                                             className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                                                isSelected(option)
                                                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-white border-2 border-yellow-500"
                                                    : "bg-white text-yellow-600 border-2 border-yellow-400 hover:bg-yellow-50"
                                                }`}
                                            onClick={()=>setPurpose(option)}>
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        
                        {purpose === "Volunteer" && (
                            <div className="space-y-2 bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                                <label className="block text-gray-700 font-semibold text-lg">Choose Volunteer Role</label>
                                <select 
                                name="volunteerRole"
                                value={formData.volunteerRole}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-yellow-300 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 text-gray-700 bg-white">
                                      <option value="">Select a role...</option>
                                    <option value="Event Management">Event Management</option>
                                    <option value="Public Relations">Public Relations</option>
                                    <option value="Content Writing">Content Writing</option>
                                    <option value="Public Speaking">Public Speaking</option>
                                    <option value="Social Media Management">Social Media Management</option>
                                    <option value="Graphic Design & Photography">Graphic Design & Photography</option>
                                    <option value="MIME & SKIT">MIME & SKIT</option>
                                </select>
                            </div>  
                        )}

                        <div className="space-y-2">
                            <label className="block text-gray-700 font-semibold text-lg">Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="5"
                                className="w-full px-4 py-3 border-2 border-yellow-300 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none"
                                placeholder="Tell us more about how you'd like to get involved, your skills, experience, or any questions you have..."
                                required
                            />        
                        </div > 

                        <div className="text-center pt-6">
                            <button 
                                type="submit"
                                className="group px-10 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                                <span className="relative z-10">Join Us Now</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                </form>
               </div> 
               <div className="text-center mt-8">
                    <p className="text-gray-600 text-lg">
                        Thank you for your interest in making a difference! 🌟
                    </p>
                </div>
               </div>
            </div>
       
    )
}
export default Form;