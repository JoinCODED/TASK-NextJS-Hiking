import Link from 'next/link'

function DifficultyButton({ difficulty, isActive = false }) {
  return (
    <Link href={`/trips?difficulty=${difficulty}`}>
      <button className={`${isActive ? "bg-primarydark" : "bg-primary hover:bg-primarydark"} text-white  py-5 px-6 rounded-lg text-lg mx-2 mb-2 capitalize`}>
        {difficulty}
      </button>
    </Link>
  )
}

export default DifficultyButton