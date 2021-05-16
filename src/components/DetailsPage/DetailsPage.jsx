import {useHistory} from 'react-router-dom';

function getDetails() {

    const history = useHistory();

    const handleClick = () => {
     history.push('/')
    }

    return (
<>
<header>
    <h1>Selected Film Details</h1>
</header>
<button onClick={handleClick}>Back to Home Page</button>
</>
    )
}

export default getDetails;