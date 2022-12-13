function Alert({alert}) {
  return (
    <div className={`${ alert.error ? 'from-red-500 to-red-600' : 'from-lime-600 to-lime-700'} bg-gradient-to-br text-white uppercase rounded w-full text-center p-2 my-4 font-bold`}>{alert.msg}</div>
  )
}

export default Alert