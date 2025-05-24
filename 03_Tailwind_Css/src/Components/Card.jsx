const Card = ({name ="Naruto", about="This is me software engineer"}) =>
{
    console.log(name , about)
    return(
        <>
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://preview.redd.it/zfohxnf8t3pa1.jpg?width=1024&format=pjpg&auto=webp&v=enabled&s=0f660e0a56476991ee3b97f2885d8c010fec5b97"
          alt="error while loading image "
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="text-gray-400">
              {about}
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-black"
          >
            Read more
          </button>
        </div>
      </div>
        
        </>
    )
}
export default Card