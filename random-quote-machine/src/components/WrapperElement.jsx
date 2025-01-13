import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAction } from '../redux/actions';

const WrapperElement = ({ colors, handleNewQuote }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.quote);

    useEffect(() => {
        dispatch(fetchAction());
    }, [dispatch]);

    const tweetQuote = () => {
        const quoteText = `"${data.quote}"`;
        const authorName = `- ${data.author}`;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}%20${encodeURIComponent(authorName)}`;
        window.open(tweetUrl, '_blank');
    };



    return (
        <div
            id="quote-box"
            style={{
                color: colors.a,
                transition: 'color 0.2s ease',
            }}
            className='bg-light w-50 h-50 rounded p-5 d-flex flex-column overflow-auto'
        >
            <div className='flex-grow-1'>
                <p id="text" className='text-center fs-1'>
                    "{data.quote}"
                </p>
                <p id="author" className='text-end mt-5 fs-4'>
                    - {data.author}
                </p>
            </div>
            <div className='d-flex justify-content-between'>
                <a
                    id="tweet-quote"
                    style={{
                        backgroundColor: colors.a,
                        transition: 'background-color 0.2s ease',
                    }}
                    className='btn py-2'
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(data.quote)}%20${encodeURIComponent(data.author)}`}
                >
                    <i className="fs-4 fa-solid fa-x text-light" style={{
                        backgroundColor: colors.a,
                        transition: 'background-color 0.2s ease',
                    }}>
                    </i>
                </a>
                <button
                    id="new-quote"
                    style={{
                        backgroundColor: colors.a,
                        transition: 'background-color 0.2s ease',
                    }}
                    onClick={() => {
                        handleNewQuote();
                        dispatch(fetchAction());
                    }}
                    type='button'
                    className='btn text-light'
                    onMouseOver={(e) => { e.target.style.backgroundColor = colors.b }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = colors.a }}
                >
                    New quote
                </button>
            </div>
        </div>
    );
};

export default WrapperElement;
