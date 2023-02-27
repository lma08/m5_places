import { data } from './data';
import { useState } from 'react';
import './App.css';

function App() {
    const [places, setPlaces] = useState(data);

    const removeItem = (id) => {
        let newPlaces = places.filter ((item) => item.id !== id);
        setPlaces (newPlaces)
    }

    const [showText, setShowText]=useState(false)

    const showTextClick = (text) => {
        text.showMore = !text.showMore
        setShowText(!showText)
    }

    return (
        <div>
            <div className='container'>
                <h1>Top {places.length} must visit places in Toronto</h1>
            </div>
                {places.map ((element => {
                    const {id, name, description, image1, showMore} = element;

                    return(
                        <div key={id}>
                            <div className='container'>
                                <h2>{id}. {name}</h2>
                            </div>
                            <div className='container'>
                                <img src={image1} alt='place' width='450px'/>
                            </div>
                            <div className='container'>
                                <h4>{showMore ? description: description.substring(0,220)+'...'} <button className='more' onClick={() => showTextClick(element)}>
                                        {showMore ? 'Show less' : 'Show more'}
                                    </button>
                                </h4>
                            </div>
                            <div className='container'>
                                <button className='btn' onClick={() => removeItem(id)}>Remove</button>
                            </div>
                        </div>
                    )
                }))}
            <div className='container'>
                <button className='btnAll' onClick={() => setPlaces([])}>Delete All</button>
            </div>
        </div>
    )
}

export default App;
