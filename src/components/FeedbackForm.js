import React, { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
    const [state, setState] = useState({
        name: '',
        email: '',
        feedbackType: 'Öneri',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        setSubmitted(true);
    };

    return (
        <div className="container mt-5">
            <h2>Öneri ve Şikayet Formu</h2>
            {submitted ? (
                <div className="alert alert-success" role="alert">
                    Geri bildiriminiz için teşekkürler!
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Adınız</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={state.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-posta Adresiniz</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={state.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="feedbackType" className="form-label">Geri Bildirim Türü</label>
                        <select
                            className="form-select"
                            id="feedbackType"
                            name="feedbackType"
                            value={state.feedbackType}
                            onChange={handleChange}
                            required
                        >
                            <option>Öneri</option>
                            <option>Şikayet</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Mesajınız</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="3"
                            value={state.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Gönder</button>
                </form>
            )}
        </div>
    );
}

export default FeedbackForm;
