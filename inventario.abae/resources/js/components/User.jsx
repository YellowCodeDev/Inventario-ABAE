// resources/js/components/User.jsx

import React from 'react';

function User(props) {
    const { name, email } = props; // Puedes pasar propiedades como argumentos

    return (
        <div className="user">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            {/* Otros elementos del componente */}
        </div>
    );
}

export default User;
