import {useNavigate} from "react-router-dom";
import {Button} from '../../components/base/Button'
import useAxios from '../../hooks/useAxios'

export default function DeleteButton(props) {
  let navigate = useNavigate();

  const url = '/recipes/' + props.recipe.id + '/'  

  const { dispatch, response, loading, error } = useAxios({
    method: 'DELETE',
    url,
  }, performAction)

  function performAction(res, err) {
    if(err === null && res === '') {
      props.handleUpdate();
      navigate('/', {replace: true});
    } else {
      window.alert(err.message);
    }
  }

  return (
    <Button primary onClick={
      () => { 
        if (window.confirm('Are you sure you wish to delete this item?')) dispatch()
      }
    }> Delete </Button>
  );
}
