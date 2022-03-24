import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = props => {

    const { title, question } = props;


    return (
        <div>
            <p>title -- {title}</p>
            <p>question --- {question}</p>
        </div>
    )

}

export default Quiz