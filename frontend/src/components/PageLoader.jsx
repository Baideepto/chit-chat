import { LoaderIcon } from 'lucide-react'
import React from 'react'

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoaderIcon className="animate-spin h-8 w-8 text-indigo-500" />
    </div>
  )
}
export default PageLoader
