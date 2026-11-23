import { LoaderCircle } from 'lucide-react';

function Loaders() {
  return (
    <div className="flex justify-center items-center h-64">
        <LoaderCircle className="animate-spin text-blue-600" size={24} />
        <p className="text-blue-600 font-medium">
                Loading employees...
        </p>
    </div>
  )
}

export default Loaders