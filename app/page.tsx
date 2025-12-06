import React from 'react'
import Link from 'next/link'

export default function Page  () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-slate-800 p-4">
      <div className="text-center">
        <h1 className="mb-8 text-5xl font-bold text-orange-400">Quizzapp</h1>
        <Link href="Toooommi">
          <button className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600">
            Start Game
          </button>
        </Link>
      </div>
    </main>
  )
}


