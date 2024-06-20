import React from 'react';
import '../provRegForm.css';

const ProviderRegistrationForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const errorMessage = form.querySelector('.error-message');

        const providerName = form.elements.providerName.value.trim();
        const contactPerson = form.elements.contactPerson.value.trim();
        const contactEmail = form.elements.contactEmail.value.trim();
        const contactNumber = form.elements.contactNumber.value.trim();
        const website = form.elements.website.value.trim();
        const address = form.elements.address.value.trim();
        const description = form.elements.description.value.trim();
        const password = form.elements.password.value.trim();

        if (
            providerName === '' ||
            contactPerson === '' ||
            contactEmail === '' ||
            contactNumber === '' ||
            website === '' ||
            address === '' ||
            description === '' ||
            password === ''
        ) {
            errorMessage.textContent = 'Please fill in all fields.';
            return;
        }

        form.submit();
    };

    return (
        <div className='provider-reg-body'>

            <div className="container-provider">
                <h1 className="title-provider">Scholarship Provider Registration</h1>
                <form onSubmit={handleSubmit} id="providerForm">
                    <div className="form-group-provider">
                        <label htmlFor="providerName">Provider Name:</label>
                        <input type="text" id="providerName" name="providerName" required />
                    </div>

                    <div className="form-group-provider">
                        <label htmlFor="contactPerson">Contact Person:</label>
                        <input type="text" id="contactPerson" name="contactPerson" required />
                    </div>

                    <div className="form-group-provider">
                        <label htmlFor="contactEmail">Contact Email:</label>
                        <input type="email" id="contactEmail" name="contactEmail" required />
                    </div>

                    <div className="form-group-provider">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <div className="form-group-provider">
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input type="tel" id="contactNumber" name="contactNumber" pattern="[0-9]{10}" required />
                    </div>

                    <div className="form-group-provider">
                        <label htmlFor="website">Website:</label>
                        <input type="text" id="website" name="website" required />
                    </div>

                    <div className="form-group-provider">
                        <label htmlFor="address">Address:</label>
                        <textarea id="address" name="address" rows="4" required></textarea>
                    </div>

                    <div className="form-group-provider">
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" rows="4" required></textarea>
                    </div>

                    <button type="submit" className="btn-provider">Submit</button>
                </form>
                <div id="error-message" className="error-message"></div>
            </div>
        </div>
    );
};

export default ProviderRegistrationForm;
