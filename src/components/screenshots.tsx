import Image from "next/image"

export function Screenshots() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">See it in action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at our clean, intuitive interface designed to help you focus on what matters.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main screenshot */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-1"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="Task Tracker App Screenshot"
                width={1000}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Mobile screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mx-auto w-64 h-96 mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform rotate-2"></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-gray-900">
                  <Image
                    src="/placeholder.svg?height=400&width=250"
                    alt="Mobile Task List"
                    width={250}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Task List View</h3>
              <p className="text-gray-600">Clean, organized view of all your tasks</p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto w-64 h-96 mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl transform -rotate-2"></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-gray-900">
                  <Image
                    src="/placeholder.svg?height=400&width=250"
                    alt="Add Task Form"
                    width={250}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Add</h3>
              <p className="text-gray-600">Add new tasks in seconds</p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto w-64 h-96 mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl transform rotate-1"></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-gray-900">
                  <Image
                    src="/placeholder.svg?height=400&width=250"
                    alt="Task Progress"
                    width={250}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">See your productivity at a glance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
