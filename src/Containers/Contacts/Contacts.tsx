import React from 'react';

const Contacts = () => {
  return (
    <div className="bg-warning w-50 mx-auto text-center p-4">
      <h4 className="text-white">Связаться с нами</h4>
      <form>
        <div className="mx-auto">
          <input type="text" className="d-block mx-auto w-75 mb-2"/>
          <input type="email" className="d-block mx-auto w-75 mb-2"/>
          <textarea name="contact" id="contact" className="d-block mx-auto w-75 mb-3"/>
        </div>
        <button className="btn bg-success text-white">Предоставить на рассмотрение</button>
      </form>
    </div>
  );
};

export default Contacts;