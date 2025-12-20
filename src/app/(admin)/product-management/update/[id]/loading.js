import Spinner from '@/components/Spinner'

const Loading = () => {
  return (
    <div className='flex items-center justify-center my-20'>
      <Spinner className='h-16 w-16'/>
    </div>
  )
}

export default Loading
