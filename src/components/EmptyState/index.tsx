import EmptyImg from '../../assets/404.svg';


export default function EmptyState() {
  return(
    <div className='w-96'>
      <img src={EmptyImg} alt="" />
    </div>
  )
}