import React from 'react';
import contactImage from '../../../images/contact.jpg'

const Contact = () => {
    return (
        <section class="mb-16">
            <div class="hero " style={{
                backgroundImage: `url(${contactImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="">
                        <h2 class="text-4xl text-center mb-4 mt-3 font-bold">Contact Me</h2>

                        <div class="card w-full shadow-2xl bg-base-100">
                            <form action="https://formsubmit.co/1a4e138bcfd8d48264a3cf790afcf7ef" method="POST"
                                class="card-body w-[300px] md:w-[400px] lg:w-[500px]">
                                <div class="form-control text-black">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="Your Name"
                                        class="input input-bordered" />
                                </div>
                                <div class="form-control text-black">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="Email" class="input input-bordered" />

                                </div>
                                <div class="form-control text-black">
                                    <label class="label">
                                        <span class="label-text">Description</span>
                                    </label>
                                    <textarea name="message" class="textarea textarea-bordered"
                                        placeholder="Bio"></textarea>
                                </div>
                                <div class="form-control mt-6">
                                    <button type="submit" class="btn btn-primary text-black">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;