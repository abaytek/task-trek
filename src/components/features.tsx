import { CheckSquare, Smartphone, Zap, Shield, Users, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: CheckSquare,
    title: "Simple Task Management",
    description: "Add, complete, and organize your tasks with an intuitive interface that gets out of your way.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Access your tasks anywhere with our responsive design that works perfectly on all devices.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with modern technology for instant loading and real-time updates across all your devices.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is encrypted and secure. We never share your information with third parties.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share tasks and collaborate with your team members to achieve goals together.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Visualize your productivity with insights and analytics about your task completion.",
  },
]

export function Features() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything you need to stay productive</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you organize your life and accomplish more every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
