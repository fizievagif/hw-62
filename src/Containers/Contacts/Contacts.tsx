import React from 'react';

const Contacts = () => {
  return (
    <div className="bg-warning w-50 mx-auto text-center p-4 mt-5">
      <h4 className="text-white">Связаться с нами</h4>
      <form>
        <div className="mx-auto">
          <input
            type="text"
            className="form-control d-block mx-auto w-75 mb-2"
            placeholder="enter your name"
            required
          />
          <input
            type="email"
            className="form-control d-block mx-auto w-75 mb-2"
            placeholder="enter your e-mail"
            required
          />
          <textarea
            name="contact"
            id="contact"
            className="form-control d-block mx-auto w-75 mb-3"
            placeholder="enter a message"
            required
          />
        </div>
        <button type="submit" className="btn bg-primary text-white">Предоставить на рассмотрение</button>
      </form>
    </div>
  );
};

export default Contacts;