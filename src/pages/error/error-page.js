import {Link} from 'react-router-dom';

function Error() {
    return (
      <div>
        Erro - Página não encontrada.
        <Link to="react-app"> Home </Link>
      </div>
    );
}
  
  
  export default Error;