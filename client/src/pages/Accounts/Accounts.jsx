import './Accounts.css'
import ShopAccountCard from '../../components/ShopAccountCard/ShopAccountCard';
// import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { assetTypeApi } from '../../context/api';

const Accounts = () => {
  const { data, loading, error, refetch } = useFetch(assetTypeApi('account'), "GET");
  console.log(data)

  if (data === null) {
    return (
      <div className="accounts">...Loading</div>
    )
  } else {
    return (
      <div className="accounts">
        {
          data.map((detail) => (
            <div className='shop-card' key={detail._id}>
              <div  className='card-link'>
                <ShopAccountCard
                  id = {detail._id}
                  shiny={detail.info.shiny}
                  legendary={detail.info.legendary}
                  p_storage={detail.info.p_storage}
                  l_storage={detail.info.l_storage}
                  level={detail.info.level}
                  price = {detail.price}
                />
                </div>
            </div>
          ))
        }
      </div>
    )
  }
}
export default Accounts;